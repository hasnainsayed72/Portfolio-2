"use client";

import { motion } from "framer-motion";
import { about, profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  // Highlight the final word of the heading with the molten gradient.
  const words = about.heading.split(" ");
  const lastWord = words.pop() ?? "";
  const leadWords = words.join(" ");

  return (
    <section id="about" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto grid max-w-shell items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-20">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto w-full max-w-[380px] md:mx-0"
        >
          {/* molten glow */}
          <div
            aria-hidden
            className="absolute -inset-5 -z-10 rounded-[36px] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(62% 58% at 30% 18%, rgba(228,165,72,0.30), transparent 72%)",
            }}
          />
          {/* frame */}
          <div className="relative overflow-hidden rounded-[28px] border border-gold/25 bg-carbon shadow-forge">
            <div className="aspect-[4/5] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.photo}
                alt={about.photoAlt}
                width={796}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
            {/* scrim + caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-void via-void/70 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-display text-lg font-semibold leading-tight text-titanium">
                {profile.name}
              </p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">
                {profile.role}
              </p>
            </div>
            {/* corner tick */}
            <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(228,165,72,0.8)]" />
          </div>
        </motion.div>

        {/* Bio */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            <span className="tick mr-3" />
            About — who you&apos;re working with
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="max-w-xl font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-semibold leading-[1.03] tracking-tightest text-titanium"
          >
            {leadWords}{" "}
            <span className="metal-text">{lastWord}</span>
          </motion.h2>

          <div className="mt-6 max-w-xl space-y-4">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: 0.12 + i * 0.08 }}
                className="text-[0.98rem] leading-relaxed text-ash"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* quick facts */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-9 grid gap-6 border-t border-[color:var(--line)] pt-7 sm:grid-cols-3"
          >
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-gold/80">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-titanium">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="mt-9"
          >
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-medium text-titanium/90 transition-colors duration-300 hover:border-gold/60 hover:text-titanium"
            >
              Get in touch
              <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
