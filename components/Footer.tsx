"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  {
    label: "LinkedIn",
    value: "Connect",
    href: profile.linkedin,
    external: true,
  },
];

export default function Footer() {
  const bigName = "Hasnain Sayed".split(" ");

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[color:var(--line)] pt-24 md:pt-32"
    >
      {/* warm floor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(80% 100% at 50% 120%, rgba(228,165,72,0.18), transparent 70%)",
        }}
      />

      <div className="section-pad relative mx-auto max-w-shell">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow mb-6"
        >
          <span className="tick mr-3" />
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-4xl font-display text-[clamp(2.2rem,6.5vw,5rem)] font-semibold leading-[0.98] tracking-tightest text-titanium"
        >
          Let&apos;s talk about your next{" "}
          <span className="metal-text">implementation</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-6 max-w-xl text-ash"
        >
          Open to leadership roles across ERP, implementation and customer
          success. The fastest ways to reach me:
        </motion.p>

        {/* contact links */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="group flex flex-col gap-2 bg-carbon p-6 transition-colors duration-300 hover:bg-panel"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                {c.label}
              </span>
              <span className="flex items-center gap-2 text-[0.98rem] text-titanium">
                {c.value}
                <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                  {c.external ? "↗" : "→"}
                </span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* meta */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[color:var(--line)] pt-8 font-mono text-xs text-ash sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.location}</span>
          <span>© {new Date().getFullYear()} Mohammad Hasnain Sayed</span>
          <button
            onClick={() => scrollToId("hero")}
            className="self-start text-ash transition-colors hover:text-gold sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* giant signature name */}
      <div className="mt-12 flex select-none justify-center overflow-hidden md:mt-16">
        <h2 className="flex gap-[0.15em] whitespace-nowrap font-display text-[13vw] font-semibold leading-[0.8] tracking-tightest text-titanium/[0.06]">
          {bigName.map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "45%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.12 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
    </footer>
  );
}
