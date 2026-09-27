"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useReduced } from "@/lib/useReduced";
import { useRef } from "react";
import Mill from "./Mill";
import { PhoneIcon } from "./Nav";
import { site } from "@/lib/site";
import { useOpenStatus } from "@/lib/useOpenStatus";

const ease = [0.16, 1, 0.3, 1] as const;

const grains = [
  { dx: -7, rot: 140, delay: 0.0, w: 4, h: 3, c: "#cbc7bb", r: "40% 60% 55% 45%" },
  { dx: 5, rot: -90, delay: 0.05, w: 3, h: 3, c: "#8f8a80", r: "50% 30% 60% 40%" },
  { dx: -2, rot: 200, delay: 0.1, w: 5, h: 3.5, c: "#b6a594", r: "35% 65% 45% 55%" },
  { dx: 9, rot: 80, delay: 0.14, w: 2.5, h: 2.5, c: "#cbc7bb", r: "50%" },
  { dx: -11, rot: -160, delay: 0.2, w: 3.5, h: 2.5, c: "#8f8a80", r: "60% 40% 30% 70%" },
  { dx: 2, rot: 120, delay: 0.24, w: 4, h: 3, c: "#b6a594", r: "45% 55% 65% 35%" },
  { dx: -5, rot: 60, delay: 0.3, w: 2.5, h: 2, c: "#cbc7bb", r: "50%" },
  { dx: 7, rot: -130, delay: 0.36, w: 3, h: 3.5, c: "#8f8a80", r: "55% 45% 40% 60%" },
];

const dots = [
  { x: "8%", y: "-8%", size: "clamp(3.5rem,11vw,8.5rem)", color: "bg-tortora", depth: -120, d: 0.15 },
  { x: "-4%", y: "42%", size: "clamp(2.2rem,6.5vw,5rem)", color: "bg-salvia", depth: -60, d: 0.3 },
  { x: "22%", y: "52%", size: "clamp(2.6rem,7.5vw,6rem)", color: "bg-salvia", depth: -90, d: 0.4 },
  { x: "6%", y: "92%", size: "clamp(1.5rem,4vw,3.2rem)", color: "bg-tortora", depth: -40, d: 0.5 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const status = useOpenStatus();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const wordY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const wordScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.9]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-4 pt-32 pb-10 md:px-10 md:pb-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-[18vw] -right-[20vw] size-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-white/[0.035]"
          style={{ y: bgY1 }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
        />
        <motion.div
          className="absolute -bottom-[25vw] -left-[15vw] size-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-white/[0.03]"
          style={{ y: bgY2 }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease, delay: 0.2 }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:items-end md:gap-14">
        <motion.div style={{ y: wordY, scale: wordScale, opacity: fade }} className="relative origin-bottom-left">
          <h1 className="sr-only">Pepe Nero, pizzeria d&apos;asporto e domicilio a Enna</h1>

          <div aria-hidden="true" className="relative font-display leading-[0.82] text-[34vw] md:text-[min(22vw,33svh,21rem)]">
            <div className="absolute -top-[0.62em] left-0 h-[0.62em] w-[0.6em]">
              {dots.map((d, i) => (
                <Dot key={i} d={d} progress={scrollYProgress} reduce={!!reduce} />
              ))}
            </div>

            <div className="flex pl-[0.62em] text-latte">
              {"PEPE".split("").map((ch, i) => (
                <span key={i} className="-my-[0.14em] inline-block overflow-hidden py-[0.14em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "135%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.07 }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </div>

            <div className="flex items-end">
              <div className="relative w-[0.62em] pr-[0.08em]">
                <motion.div
                  initial={{ y: 40, opacity: 0, rotate: -18 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease, delay: 0.6 }}
                  className="relative w-max origin-bottom"
                >
                  <Mill grind={!reduce} className="block h-[0.8em] w-auto text-latte" />
                  {!reduce && (
                    <div className="pointer-events-none absolute top-[calc(100%-2px)] left-1/2">
                      {grains.map((g, i) => (
                        <span
                          key={i}
                          className="pepper-grain absolute"
                          style={
                            {
                              width: g.w,
                              height: g.h,
                              marginLeft: -g.w / 2,
                              background: g.c,
                              borderRadius: g.r,
                              "--dx": `${g.dx}px`,
                              "--rot": `${g.rot}deg`,
                              "--delay": `${2.6 + g.delay}s`,
                              opacity: 0,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              <span className="inline-block [perspective:1200px]">
                <motion.span
                  className="inline-block text-tortora [backface-visibility:visible]"
                  initial={{ rotateY: 0, opacity: 0, y: 60 }}
                  animate={{ rotateY: [0, 0, 180], opacity: [0, 1, 1], y: [60, 0, 0] }}
                  transition={{ duration: 2.1, delay: 0.55, times: [0, 0.4, 1], ease: [0.65, 0, 0.35, 1] }}
                >
                  NERO
                </motion.span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-md space-y-7 md:justify-self-end md:pb-4"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease, delay: 1.5 }}
        >
          <p className="text-xl leading-snug text-latte/85 md:text-2xl">
            Pizze al forno a legna, da asporto e a domicilio. A Enna, in via Ottavio Catalano.
          </p>

          <StatusPill label={status?.label} open={status?.open} />

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${site.phone.tel}`}
              className="group flex items-center gap-3 rounded-full bg-latte py-2 pr-2 pl-6 text-base font-medium text-nero transition-transform duration-500 ease-[var(--ease-spring)] hover:scale-[1.02] active:scale-[0.97]"
            >
              Ordina al telefono
              <span className="grid size-10 place-items-center rounded-full bg-nero text-latte transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-14deg] group-hover:scale-110">
                <PhoneIcon />
              </span>
            </a>
            <a
              href="#menu"
              className="group flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-base text-latte ring-1 ring-white/20 transition-[background-color,transform] duration-500 ease-[var(--ease-spring)] hover:bg-white/5 active:scale-[0.97]"
            >
              Sfoglia il menu
              <span className="grid size-10 place-items-center rounded-full bg-white/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:translate-y-0.5">
                <ArrowDown />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Dot({
  d,
  progress,
  reduce,
}: {
  d: (typeof dots)[number];
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : d.depth]);
  return (
    <motion.span className="absolute" style={{ left: d.x, top: d.y, y }}>
      <motion.span
        className={`block rounded-full ${d.color}`}
        style={{ width: d.size, height: d.size }}
        initial={{ scale: 0, y: -80 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.9 + d.d }}
      />
    </motion.span>
  );
}

export function StatusPill({ label, open }: { label?: string; open?: boolean }) {
  return (
    <p className="inline-flex min-h-9 items-center gap-3 rounded-full bg-white/5 px-4 py-1.5 text-[15px] text-latte/85 ring-1 ring-white/10">
      <span className="relative grid size-2.5 place-items-center">
        {open && <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-400" />}
        <span className={`relative size-2.5 rounded-full ${open ? "bg-emerald-400" : "bg-tortora"}`} />
      </span>
      {label ?? "Dalle 17:00 alle 23:00, martedì chiuso"}
    </p>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}
