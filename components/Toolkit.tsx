"use client";

import { motion } from "framer-motion";
import { toolkit, certificates, education } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">
            <span className="tick mr-3" />
            Toolkit
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tightest text-titanium">
            What I bring to the table.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Skills groups */}
          <div className="lg:col-span-8">
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {toolkit.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: gi * 0.06 }}
                >
                  <h3 className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[color:var(--line)] bg-carbon/50 px-3 py-1.5 text-sm text-titanium/85 transition-colors duration-300 hover:border-gold/50 hover:text-titanium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certs + Education */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="panel rounded-2xl p-7">
              <h3 className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                Certificates
              </h3>
              <ul className="space-y-2">
                {certificates.map((c) => (
                  <li key={c.name}>
                    
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group -mx-2 flex items-baseline justify-between gap-4 rounded-lg px-2 py-1.5 transition-colors duration-300 hover:bg-titanium/[0.04]"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-titanium transition-colors duration-300 group-hover:text-gold">
                          {c.name}
                          <span
                            aria-hidden
                            className="-translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          >
                            ↗
                          </span>
                        </div>
                        <div className="text-xs text-ash">{c.issuer}</div>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-ash">{c.date}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="my-6 hairline" />

              <h3 className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-gold">
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="text-sm font-medium text-titanium">{e.degree}</div>
                    <div className="text-xs text-ash">{e.org}</div>
                    <div className="mt-0.5 font-mono text-[0.7rem] text-ash/80">
                      {e.detail} · {e.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
