"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/lib/useReduced";
import Link from "next/link";
import { useRef } from "react";
import { HeartIcon } from "./FoodIcons";
import Mill from "./Mill";
import { site } from "@/lib/site";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const rotateY = useTransform(scrollYProgress, [0.25, 0.85], reduce ? [180, 180] : [0, 180]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["30%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-nero px-4 pt-24 pb-8 md:px-10 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 text-latte/70 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-latte">Dove siamo</p>
            <p className="mt-2 leading-relaxed">
              {site.address.street}
              <br />
              {site.address.cap} {site.address.city}
            </p>
          </div>
          <div>
            <p className="text-latte">Telefono</p>
            <a href={`tel:${site.phone.tel}`} className="mt-2 inline-block transition-colors hover:text-latte">
              {site.phone.display}
            </a>
          </div>
          <div>
            <p className="text-latte">Orari</p>
            <p className="mt-2 leading-relaxed">
              Tutti i giorni 17:00 – 23:00
              <br />
              Martedì chiuso
            </p>
          </div>
          <div>
            <p className="text-latte">Ti è piaciuta?</p>
            <a
              href={site.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block underline decoration-white/25 underline-offset-4 transition-colors hover:text-latte hover:decoration-latte"
            >
              Lasciaci una recensione su Google
            </a>
            <div className="mt-3 flex gap-4">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-latte">
                Instagram
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-latte">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <motion.div
          style={{ y }}
          aria-hidden="true"
          className="mt-20 flex items-end justify-center gap-[2vw] font-display text-[17vw] leading-[0.8] select-none md:mt-28 xl:text-[15rem]"
        >
          <Mill className="mb-[1vw] h-[0.72em] w-auto shrink-0 text-latte" />
          <span className="text-latte">PEPE</span>
          <span className="[perspective:1400px]">
            <motion.span style={{ rotateY }} className="inline-block text-tortora">
              NERO
            </motion.span>
          </span>
        </motion.div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-latte/50 md:flex-row md:justify-between">
          <p>
            {site.legalName} · P.IVA {site.vat} ·{" "}
            <Link href="/privacy" className="underline decoration-white/25 underline-offset-4 hover:text-latte">
              Privacy e cookie
            </Link>
          </p>
          <p>© {new Date().getFullYear()} Pepe Nero. Tutti i diritti riservati.</p>
        </div>

        <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-latte/45">
          Fatto con
          <HeartIcon className="heartbeat size-4 text-[#e0574f]" />
          <span className="sr-only">amore</span>
          da <span className="text-latte/80">Simo</span>
        </p>
      </div>
    </footer>
  );
}
