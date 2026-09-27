"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";
import { useReduced } from "@/lib/useReduced";
import { useOpenStatus } from "@/lib/useOpenStatus";
import Brand from "./Brand";
const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const status = useOpenStatus();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -3]);
  return <section ref={ref} id="top" className="hero-shell relative overflow-hidden bg-nero px-5 pt-28 pb-20 md:px-10 md:pt-40 md:pb-28">
    <div className="hero-watermark pointer-events-none absolute -top-28 -left-24 text-salvia/[0.04]" aria-hidden="true"><Brand className="size-[95vw] max-w-[1100px]" /></div>
    <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-4">
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="mb-6 flex items-center gap-3 text-sm text-latte/75 md:mb-8 md:gap-4 md:text-base">
          <Brand className="size-10 shrink-0 text-salvia md:size-20" /> <p>Antica gelateria<br/><span className="text-latte/50">Nel cuore di Palermo</span></p>
        </motion.div>
        <h1 aria-label="Donna Carmela, antica gelateria alla Kalsa" className="hero-name font-display uppercase">
          {["Donna", "Carmela"].map((word, row) => <span key={word} aria-hidden="true" className="block whitespace-nowrap text-latte">
            {word.split("").map((letter, i) => <span className="title-mask-gutter inline-block overflow-hidden py-[.17em] -my-[.17em]" key={i}>
              <motion.span className="inline-block origin-bottom" initial={{ y: "120%", rotate: 8 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1.1, ease, delay: .18 + row * .25 + i * .045 }}>{letter}</motion.span>
            </span>)}
          </span>)}
        </h1>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: .8 }} className="mt-9 max-w-sm space-y-6 lg:mt-12">
          <p className="text-xl leading-snug text-latte/85 md:text-2xl">Un gelato. Due passi.<br/>Tutta la dolcezza di Palermo.</p>
          <a href="#menu" className="pill bg-latte text-nero">Scopri cosa c’è al banco <span className="pill-icon bg-nero text-latte">↓</span></a>
          <StatusPill label={status?.label} open={status?.open}/>
        </motion.div>
      </div>
      <motion.div style={{ y, rotate }} className="relative mx-auto w-full max-w-lg lg:ml-0">
        <div className="hero-frame">
        <motion.div className="hero-arch relative aspect-[4/5] overflow-hidden bg-carbone" initial={{ clipPath: "inset(100% 0 0 0 round 48% 48% 3% 3%)" }} animate={{ clipPath: "inset(0% 0 0 0 round 48% 48% 3% 3%)" }} transition={{ duration: 1.5, ease, delay: .4 }}>
          <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2, ease, delay: .4 }}>
            <Image src="/images/gelateria.jpg" alt="L’insegna e l’ingresso ad arco di Donna Carmela, alla Kalsa" fill priority sizes="(max-width: 1023px) 90vw, 45vw" className="object-cover" />
          </motion.div>
        </motion.div>
        </div>
        <p className="mt-5 text-center text-sm text-latte/60">{site.address.street}<br/>Palermo, Sicilia</p>
      </motion.div>
    </div>
  </section>;
}
export function StatusPill({ label, open }: { label?: string; open?: boolean }) {
  return <p className="flex items-center gap-2.5 text-sm text-latte/70"><span className={`size-2 rounded-full ${open ? "bg-salvia" : "bg-tortora"}`} />{label ?? site.hoursLabel}</p>;
}
