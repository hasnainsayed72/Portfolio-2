"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { caseStudies, type CaseStudy } from "@/lib/data";

function StackCard({
  study,
  index,
  total,
  progress,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[92vh] items-center justify-center">
      <motion.article
        style={{ scale, top: `calc(-6vh + ${index * 26}px)` }}
        className="panel relative w-full max-w-4xl overflow-hidden rounded-[28px] p-8 shadow-card md:p-12"
      >
        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(228,165,72,0.35), transparent 70%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-6">
          <p className="eyebrow max-w-[70%]">{study.kicker}</p>
          <span className="font-mono text-xs text-ash">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-8 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-tight text-titanium">
              {study.title}
            </h3>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ash">
              {study.context}
            </p>
            <p className="mt-5 flex gap-3 text-[0.98rem] leading-relaxed text-titanium/90">
              <span className="tick mt-3 shrink-0" />
              <span>{study.outcome}</span>
            </p>
          </div>

          <div className="flex flex-col justify-center md:col-span-5 md:items-end">
            <span className="metal-text font-display text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-none">
              {study.metric}
            </span>
            <span className="mt-3 max-w-[16ch] font-mono text-xs uppercase tracking-[0.16em] text-ash md:text-right">
              {study.metricLabel}
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function SelectedImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const total = caseStudies.length;

  return (
    <section id="impact" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto mb-6 max-w-shell">
        <p className="eyebrow mb-4">
          <span className="tick mr-3" />
          Selected impact
        </p>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tightest text-titanium">
          Case studies, from raw to refined.
        </h2>
        <p className="mt-4 max-w-xl text-ash">
          A handful of deployments where messy operations were forged into
          reliable, adopted systems.
        </p>
      </div>

      <div ref={containerRef} className="mx-auto max-w-shell">
        {caseStudies.map((study, i) => (
          <StackCard
            key={study.id}
            study={study}
            index={i}
            total={total}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
