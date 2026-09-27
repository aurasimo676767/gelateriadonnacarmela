"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useReduced } from "@/lib/useReduced";
import { MaskTitle, Reveal } from "./Reveal";
import Brand from "./Brand";
export default function Storia() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({target:ref,offset:["start end","end start"]});
  const rotate = useTransform(scrollYProgress,[0,1],reduce?[0,0]:[-12,12]);
  const y = useTransform(scrollYProgress,[0,1],reduce?[0,0]:[40,-40]);
  return <section ref={ref} id="storia" className="relative overflow-hidden bg-nero px-5 py-24 md:px-10 md:py-36">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
        <MaskTitle text="Prima un gesto. Poi una tradizione." className="font-display uppercase text-[clamp(3rem,7.5vw,6.5rem)] leading-[.98]"/>
        <Reveal><p className="max-w-md text-xl leading-relaxed text-latte/75">A Novara di Sicilia, una donna preparava il gelato in casa e lo regalava alla famiglia e al paese. Si chiamava Carmela.</p></Reveal>
      </div>
      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-2 md:items-center md:gap-24">
        <motion.div style={{y}} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem]">
            <Image src="/images/mestiere.jpg" alt="Il banco e le persone della gelateria Donna Carmela" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover"/>
          </div>
          <motion.div style={{rotate}} className="absolute -right-3 -bottom-6 rounded-full bg-salvia p-5 text-carbone"><Brand className="size-20 md:size-28"/></motion.div>
        </motion.div>
        <div>
          <Reveal><p className="font-display uppercase text-[clamp(5rem,14vw,10rem)] leading-none text-salvia">1890</p><p className="mt-3 text-latte/65">Nasce Donna Carmela, a Novara di Sicilia.</p></Reveal>
          <Reveal delay={.1}><p className="mt-10 text-xl leading-relaxed text-latte/85">Nei tempi difficili, latte di capra e frutta secca diventavano un piccolo momento di gioia. Il suo gelato era un dono, prima ancora di essere una ricetta.</p></Reveal>
          <Reveal delay={.15}><p className="mt-6 text-lg leading-relaxed text-latte/70">Quel ricordo attraversa quattro generazioni e arriva qui, alla Kalsa. Una storia di famiglia che puoi leggere anche sul pannello accanto alla nostra porta.</p></Reveal>
          <a href="/images/storia.jpg" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-salvia/50 pb-1 text-salvia">Leggi il pannello originale ↗</a>
        </div>
      </div>
    </div>
  </section>;
}
