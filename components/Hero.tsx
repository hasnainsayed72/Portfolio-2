"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { scrollToId } from "@/lib/scroll";

// WebGL is client-only; render a warm gradient while it loads.
const LiquidMetal = dynamic(() => import("@/components/LiquidMetal"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 62%, rgba(228,165,72,0.30), rgba(122,78,34,0.14) 34%, #0b0908 72%)",
      }}
    />
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Liquid-metal background */}
      <div className="absolute inset-0 z-0">
        <LiquidMetal reduced={reduced} />
      </div>

      {/* Legibility overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,9,8,0.72) 0%, rgba(11,9,8,0.10) 22%, rgba(11,9,8,0.0) 45%, rgba(11,9,8,0.35) 78%, rgba(11,9,8,0.92) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="section-pad relative z-20 mx-auto flex w-full max-w-shell flex-col items-start"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          {profile.eyebrow}
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.9] tracking-tightest text-titanium">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
            className="block text-[clamp(2.75rem,10vw,8.5rem)]"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.55)" }}
          >
            Mohammad
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            className="block text-[clamp(2.75rem,10vw,8.5rem)]"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.55)" }}
          >
            Hasnain Sayed
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.42 }}
          className="mt-7 max-w-2xl text-[clamp(1.05rem,2.1vw,1.5rem)] leading-snug text-titanium/85"
        >
          I forge raw operations into{" "}
          <span className="metal-text font-medium">systems that scale</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.54 }}
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-ash"
        >
          <span className="rounded-full border border-[color:var(--line)] bg-carbon/60 px-4 py-2 text-titanium/80">
            {profile.role}
          </span>
          <span className="hidden sm:inline">7+ yrs</span>
          <span className="hidden text-gold/70 sm:inline">/</span>
          <span className="hidden sm:inline">Healthcare · Mfg · FMCG · Saas</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.66 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToId("experience")}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-bronze via-gold to-goldbright px-7 py-3.5 text-sm font-semibold text-void transition-transform duration-300 ease-forge hover:scale-[1.03]"
          >
            View the work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button
            onClick={() => scrollToId("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-7 py-3.5 text-sm font-medium text-titanium/85 transition-colors duration-300 hover:border-gold/60 hover:text-titanium"
          >
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToId("impact")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        aria-label="Scroll to work"
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-ash/40 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-gold animate-scrollcue" />
        </span>
      </motion.button>
    </section>
  );
}
