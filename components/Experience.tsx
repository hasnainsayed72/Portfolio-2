"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { experiences, type Experience as Exp } from "@/lib/data";

type Dims = { spacing: number; drop: number };

function GalleryCard({
  exp,
  index,
  pos,
  dims,
  active,
}: {
  exp: Exp;
  index: number;
  pos: MotionValue<number>;
  dims: Dims;
  active: number;
}) {
  const x = useTransform(pos, (p) => (index - p) * dims.spacing);
  const y = useTransform(
    pos,
    (p) => 24 + Math.abs(index - p) * dims.drop
  );
  const rotate = useTransform(pos, (p) => (index - p) * 5);
  const scale = useTransform(pos, (p) =>
    Math.max(0.6, 1 - Math.abs(index - p) * 0.18)
  );
  const opacity = useTransform(pos, (p) =>
    Math.max(0, 1 - Math.abs(index - p) * 0.62)
  );

  const isActive = active === index;

  return (
    <div
      className="absolute left-1/2 top-1/2 w-[min(84vw,430px)] -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 100 - Math.abs(index - active) * 10 }}
    >
      <motion.article
        style={{
          x,
          y,
          rotate,
          scale,
          opacity,
          willChange: "transform",
          background:
            "radial-gradient(120% 130% at 20% -10%, rgba(228,165,72,0.10), transparent 55%), #14110d",
        }}
        className={`w-full rounded-[26px] p-7 transition-[box-shadow,filter] duration-500 md:p-8 ${isActive
            ? "pointer-events-auto border border-gold/40 shadow-forge blur-0"
            : "pointer-events-none border border-[color:var(--line)] blur-[2px]"
          }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
            {exp.period}
          </span>
          <span className="font-display text-3xl font-semibold text-titanium/15">
            {exp.year}
          </span>
        </div>

        <h3 className="mt-5 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-tight text-titanium">
          {exp.company}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold/90">{exp.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-ash">{exp.summary}</p>

        {isActive && (
          <ul className="mt-5 space-y-2 border-t border-[color:var(--line)] pt-5">
            {exp.points.slice(0, 3).map((pt) => (
              <li
                key={pt}
                className="flex gap-2.5 text-[0.82rem] leading-snug text-titanium/80"
              >
                <span className="tick mt-2 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--line)] px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ash"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = experiences.length;
  const [active, setActive] = useState(0);
  const [dims, setDims] = useState<Dims>({ spacing: 320, drop: 46 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const pos = useTransform(scrollYProgress, [0, 1], [0, total - 1]);

  useMotionValueEvent(pos, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.round(v)));
    setActive(idx);
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setDims({
        spacing: Math.min(w * 0.42, 360),
        drop: w < 640 ? 24 : 46,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const jumpTo = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    // Absolute document offset (offsetTop is unreliable here because the
    // parent <section> is position:relative, making it the offsetParent).
    const currentScroll = window.scrollY || window.pageYOffset || 0;
    const elTop = el.getBoundingClientRect().top + currentScroll;
    const scrollable = Math.max(0, el.offsetHeight - window.innerHeight);
    const targetY = elTop + (i / (total - 1)) * scrollable;
    if (window.__lenis) window.__lenis.scrollTo(targetY, { duration: 1.2 });
    else window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section id="experience" className="relative">
      <div
        ref={containerRef}
        style={{ height: `${total * 70}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* header */}
          <div className="section-pad pointer-events-none absolute inset-x-0 top-16 z-[200] mx-auto max-w-shell md:top-20">
            <p className="eyebrow mb-3">
              <span className="tick mr-3" />
              Experience - the path so far
            </p>
            <h2 className="max-w-xl font-display text-[clamp(1.8rem,4.5vw,3rem)] font-semibold leading-[1.02] tracking-tightest text-titanium">
              Six stops, one throughline.
            </h2>
          </div>

          {/* giant ghost year */}
          <span
            aria-hidden
            className="pointer-events-none absolute select-none font-display text-[38vw] font-semibold leading-none text-titanium/[0.03]"
          >
            {"20" + experiences[active].year.replace(/\D/g, "")}
          </span>

          {/* the arc of company cards */}
          {experiences.map((exp, i) => (
            <GalleryCard
              key={exp.id}
              exp={exp}
              index={i}
              pos={pos}
              dims={dims}
              active={active}
            />
          ))}

          {/* progress rail */}
          <div className="section-pad absolute inset-x-0 bottom-10 z-[200] mx-auto flex max-w-shell items-center justify-center">
            <div className="flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-carbon/70 px-3 py-2 backdrop-blur-md sm:gap-3">
              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => jumpTo(i)}
                  className={`flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[0.7rem] transition-colors duration-300 sm:px-3 ${active === i
                      ? "bg-gold/15 text-gold"
                      : "text-ash hover:text-titanium"
                    }`}
                  aria-label={`Go to ${exp.company}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${active === i ? "bg-gold" : "bg-ash/40"
                      }`}
                  />
                  <span className="hidden sm:inline">{exp.company.split(" ")[0]}</span>
                  <span className="sm:hidden">{exp.year}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
