"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";

const spring = { type: "spring" as const, stiffness: 300, damping: 28 };
const ease = [0.22, 1, 0.36, 1] as const;

export default function LimelightNav() {
  const [active, setActive] = useState(0);
  // left/width drive the spotlight; top/height place the lit "key" precisely.
  const [box, setBox] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
  });
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Track which section is in view
  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      navItems.forEach((item, i) => {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= marker) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Measure the active item so the spotlight + key can align to it
  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      if (!el) return;
      setBox({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        ready: true,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    const id = window.setTimeout(measure, 120); // after fonts settle
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(id);
    };
  }, [active]);

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-3">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      >
        <div className="relative flex items-center gap-0.5 rounded-full border border-[color:var(--line)] bg-carbon/75 px-1.5 py-2 shadow-[0_12px_34px_-12px_rgba(0,0,0,0.75),inset_0_-8px_16px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md sm:gap-1 sm:px-2">
          {/* forged bevel — light catching the top rim of the capsule */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-5 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-goldbright/40 to-transparent"
          />

          {/* monogram — a small forge dot + molten initials */}
          <span className="ml-2 mr-1.5 hidden select-none items-center gap-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(228,165,72,0.85)]" />
            <span className="metal-text font-display text-sm font-semibold tracking-tight">
              MHS
            </span>
          </span>
          <span className="mr-1 hidden h-5 w-px bg-[color:var(--line)] sm:inline" />

          {/* the lit key — a warm pool of light the beam lands on */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            initial={false}
            animate={{
              left: box.left,
              top: box.top,
              width: box.width,
              height: box.height,
              opacity: box.ready ? 1 : 0,
            }}
            transition={spring}
            style={{
              background:
                "radial-gradient(130% 145% at 50% 0%, rgba(228,165,72,0.24), rgba(228,165,72,0.05) 58%, transparent 82%)",
              border: "1px solid rgba(228,165,72,0.16)",
              boxShadow: "inset 0 1px 0 rgba(247,208,138,0.32)",
            }}
          />

          {/* limelight beam — emitter filament + focused cone */}
          <motion.div
            className="pointer-events-none absolute top-0 flex flex-col items-center"
            initial={false}
            animate={{
              left: box.left,
              width: box.width,
              opacity: box.ready ? 1 : 0,
            }}
            transition={spring}
            style={{ height: 0 }}
          >
            {/* glowing filament */}
            <span className="h-[3px] w-10 -translate-y-[1px] rounded-full bg-goldbright shadow-[0_0_10px_2px_rgba(247,208,138,0.95),0_0_24px_7px_rgba(228,165,72,0.55)]" />
            {/* cone of light */}
            <span
              className="mt-[1px] h-11 w-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,208,138,0.5), rgba(228,165,72,0.14) 46%, rgba(228,165,72,0))",
                clipPath: "polygon(34% 0, 66% 0, 100% 100%, 0 100%)",
                filter: "blur(6px)",
              }}
            />
          </motion.div>

          {navItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onClick={() => scrollToId(item.id)}
              className={`relative z-10 rounded-full px-2.5 py-1.5 text-[0.76rem] font-medium transition-colors duration-300 sm:px-3.5 sm:text-[0.8rem] ${
                active === i
                  ? "text-goldbright [text-shadow:0_0_14px_rgba(228,165,72,0.45)]"
                  : "text-ash hover:bg-titanium/[0.04] hover:text-titanium"
              }`}
              aria-current={active === i ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
