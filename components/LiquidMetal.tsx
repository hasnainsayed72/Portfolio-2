"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Molten titanium — a domain-warped fbm field mapped to a forged     */
/*  bronze → gold → hot-white ramp, with a glowing horizon seam.       */
/* ------------------------------------------------------------------ */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform float uReduced;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  // Forged-metal colour ramp: near-black bronze -> gold -> hot white.
  vec3 metalRamp(float x) {
    x = clamp(x, 0.0, 1.0);
    vec3 c0 = vec3(0.055, 0.038, 0.022);
    vec3 c1 = vec3(0.235, 0.120, 0.045);
    vec3 c2 = vec3(0.520, 0.270, 0.085);
    vec3 c3 = vec3(0.820, 0.520, 0.180);
    vec3 c4 = vec3(0.960, 0.760, 0.380);
    vec3 c5 = vec3(1.000, 0.945, 0.820);
    vec3 col = mix(c0, c1, smoothstep(0.00, 0.28, x));
    col = mix(col, c2, smoothstep(0.28, 0.48, x));
    col = mix(col, c3, smoothstep(0.48, 0.66, x));
    col = mix(col, c4, smoothstep(0.66, 0.84, x));
    col = mix(col, c5, smoothstep(0.86, 1.00, x));
    return col;
  }

  void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vUv;
    p.x *= aspect;

    // gentle parallax toward the pointer
    p += (uMouse - 0.5) * 0.22;

    float t = uReduced > 0.5 ? 3.2 : uTime * 0.05;

    // scale the field
    vec2 q0 = p * 2.4;

    // domain warp — two passes for a molten, folding flow
    vec2 q = vec2(
      fbm(q0 + vec2(0.0, 0.0) + t),
      fbm(q0 + vec2(5.2, 1.3) - t)
    );
    vec2 r = vec2(
      fbm(q0 + 3.0 * q + vec2(1.7, 9.2) + 0.6 * t),
      fbm(q0 + 3.0 * q + vec2(8.3, 2.8) - 0.5 * t)
    );
    float f = fbm(q0 + 3.6 * r);

    // shape it: lift contrast, add flowing veins from warp magnitude
    float veins = length(r) * 0.55;
    float heat = smoothstep(0.15, 0.95, f) + veins * 0.6;
    heat = clamp(heat, 0.0, 1.15);

    vec3 col = metalRamp(heat);

    // Glowing horizon seam — the "pour line" where metal meets the void
    float horizon = 1.0 - smoothstep(0.0, 0.035 + 0.02 * f, abs(vUv.y - 0.60));
    col += horizon * vec3(1.0, 0.72, 0.34) * (0.35 + 0.35 * f);

    // Hot molten veins glow
    float molten = smoothstep(0.82, 1.05, heat);
    col += molten * vec3(1.0, 0.55, 0.18) * 0.8;

    // fine specular glints
    float glint = pow(noise(q0 * 6.0 + t * 4.0), 42.0);
    col += glint * vec3(1.0, 0.9, 0.72) * 0.7;

    // overall dark grade so hero text stays readable
    col *= 0.82;

    // radial vignette
    vec2 d = vUv - 0.5;
    d.x *= aspect;
    float vig = 1.0 - smoothstep(0.35, 1.15, length(d));
    col *= mix(0.55, 1.0, vig);

    // subtle filmic curve
    col = col / (col + vec3(0.85));
    col = pow(col, vec3(0.85));

    gl_FragColor = vec4(col, 1.0);
  }
`;

function MetalPlane({ reduced }: { reduced: boolean }) {
  const { viewport, size } = useThree();
  const target = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uReduced: { value: reduced ? 1 : 0 },
    }),
    [reduced]
  );

  useFrame((state) => {
    const u = uniforms;
    if (!reduced) u.uTime.value = state.clock.elapsedTime;
    u.uResolution.value.set(size.width, size.height);
    // pointer is -1..1; remap to 0..1 and ease toward it
    target.current.set(state.pointer.x * 0.5 + 0.5, state.pointer.y * 0.5 + 0.5);
    u.uMouse.value.lerp(target.current, 0.04);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function LiquidMetal({ reduced = false }: { reduced?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);

  // Pause the render loop while the hero is scrolled out of view — a
  // fullscreen shader running off-screen is wasted GPU and makes the rest
  // of the page feel less fluid.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        className="!absolute inset-0"
        dpr={[1, 2]}
        frameloop={reduced || !onScreen ? "demand" : "always"}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#0b0908"]} />
        <MetalPlane reduced={reduced} />
      </Canvas>
    </div>
  );
}
