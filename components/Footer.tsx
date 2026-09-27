"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useReduced } from "@/lib/useReduced";
import { site } from "@/lib/site";
import Brand from "./Brand";
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReduced();
  const {scrollYProgress} = useScroll({target:ref,offset:["start end","end end"]});
  const y = useTransform(scrollYProgress,[0,1],reduced?["0%","0%"]:["35%","0%"]);
  return <footer ref={ref} className="overflow-hidden bg-nero px-5 pt-20 pb-8 md:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 text-latte/75 sm:grid-cols-3">
        <div><Brand className="mb-4 size-14 text-salvia"/><p>{site.fullName}</p><p className="mt-2">{site.address.street}<br/>{site.address.cap} {site.address.city}</p></div>
        <div><p className="text-latte">Passa a trovarci</p><p className="mt-3">{site.hoursLabel}</p><a className="mt-3 inline-block" href={`tel:${site.phone.tel}`}>{site.phone.display}</a></div>
        <div className="flex flex-col items-start gap-3"><a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={site.reviewUrl} target="_blank" rel="noopener noreferrer">Lascia una recensione ↗</a><a href="#top">Torna su ↑</a></div>
      </div>
      <div className="mt-16 overflow-hidden py-3"><motion.p style={{y}} aria-hidden="true" className="text-center font-display text-[clamp(2rem,12.2vw,10.8rem)] leading-none whitespace-nowrap text-salvia">DONNA CARMELA</motion.p></div>
      <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-latte/15 pt-6 text-sm text-latte/60"><p>© {new Date().getFullYear()} {site.name}</p><Link href="/privacy" className="underline underline-offset-4">Privacy e cookie</Link><p>Fatto con cura da Simo</p></div>
    </div>
  </footer>;
}
