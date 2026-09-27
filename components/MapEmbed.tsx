"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Mill from "./Mill";
import { site } from "@/lib/site";

export default function MapEmbed() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
      <AnimatePresence initial={false}>
        {!show && (
          <motion.div
            key="placeholder"
            className="absolute inset-0 grid place-items-center bg-[#ddd5ca]"
            exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.5 } }}
          >
            <MapSketch />

            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-full">
              <span className="pulse-ring absolute top-full left-1/2 -mt-1.5 -ml-3 size-6 rounded-full bg-carbone/30" />
              <div className="relative grid size-14 place-items-center rounded-full bg-carbone shadow-[0_12px_24px_-10px_rgba(0,0,0,0.6)]">
                <Mill className="h-8 w-auto text-latte" />
              </div>
              <div className="mx-auto -mt-1 h-3 w-3 rotate-45 bg-carbone" />
            </div>

            <div className="absolute inset-x-4 bottom-4 flex flex-col items-center gap-2 text-center">
              <button
                type="button"
                onClick={() => setShow(true)}
                className="group flex items-center gap-3 rounded-full bg-carbone py-2 pr-2 pl-5 text-latte transition-transform duration-500 ease-[var(--ease-spring)] active:scale-[0.97]"
              >
                Mostra la mappa
                <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                  </svg>
                </span>
              </button>
              <p className="text-xs text-carbone/60">
                Si carica Google Maps, che può usare dei cookie.{" "}
                <a href="/privacy" className="underline underline-offset-2">
                  Privacy
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {show && (
        <iframe
          title={`Mappa: ${site.address.street}, ${site.address.city}`}
          src={site.mapsEmbed}
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 block size-full grayscale-[0.9] sepia-[0.15] contrast-[1.05]"
        />
      )}
    </div>
  );
}

function MapSketch() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <g fill="#cfc6b9">
        <rect x="18" y="20" width="110" height="70" rx="10" />
        <rect x="150" y="14" width="80" height="96" rx="10" />
        <rect x="258" y="26" width="124" height="60" rx="10" />
        <rect x="24" y="118" width="84" height="84" rx="10" />
        <rect x="262" y="112" width="110" height="94" rx="10" />
        <rect x="30" y="230" width="120" height="74" rx="10" />
        <rect x="176" y="236" width="70" height="70" rx="10" />
        <rect x="272" y="232" width="100" height="72" rx="10" />
      </g>
      <g fill="none" stroke="#f3eee7" strokeLinecap="round">
        <path d="M-10 104 C 90 96, 160 130, 240 118 S 360 98, 420 108" strokeWidth="14" />
        <path d="M136 -10 C 140 80, 150 160, 162 330" strokeWidth="11" />
        <path d="M244 -10 C 250 90, 236 180, 258 330" strokeWidth="9" />
        <path d="M-10 216 C 80 222, 200 214, 420 222" strokeWidth="10" />
      </g>
      <path d="M-10 104 C 90 96, 160 130, 240 118 S 360 98, 420 108" fill="none" stroke="#b6a594" strokeWidth="2" strokeDasharray="6 8" />
    </svg>
  );
}
