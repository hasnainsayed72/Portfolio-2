"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StatsBand() {
  return (
    <section className="section-pad border-y border-[color:var(--line)] bg-void/60 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-shell">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            >
              <div className="metal-text font-display text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-none">
                {stat.value}
              </div>
              <div className="mt-3 max-w-[18ch] font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-ash">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
