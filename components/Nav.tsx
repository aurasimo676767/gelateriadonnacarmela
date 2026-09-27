"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Mill from "./Mill";
import { site } from "@/lib/site";

const links = [
  { href: "#impasti", label: "Impasti" },
  { href: "#menu", label: "Menu" },
  { href: "#ordina", label: "Ordina" },
  { href: "#orari", label: "Orari e indirizzo" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setSolid(y > 60);
  });

  useEffect(() => {
    document.documentElement.dataset.nav = hidden ? "hidden" : "shown";
  }, [hidden]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: hidden ? 0 : 0.2 }}
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-4 ring-1 transition-[background-color,box-shadow] duration-700 ease-[var(--ease-spring)] md:w-auto md:justify-start md:gap-8 ${
            solid || open
              ? "bg-nero/70 ring-white/10 backdrop-blur-xl"
              : "bg-transparent ring-transparent"
          }`}
          aria-label="Navigazione principale"
        >
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Mill className="h-7 w-auto text-latte" />
            <span className="font-display text-xl tracking-wide">
              PEPE <span className="mirror text-tortora">NERO</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-[15px] text-latte/75 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="relative transition-colors duration-300 hover:text-latte">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phone.tel}`}
              className="group flex items-center gap-2 rounded-full bg-tortora py-1.5 pr-1.5 pl-4 text-[15px] font-medium text-nero transition-transform duration-500 ease-[var(--ease-spring)] active:scale-[0.97]"
            >
              Chiama
              <span className="grid size-8 place-items-center rounded-full bg-nero/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-12deg] group-hover:scale-110">
                <PhoneIcon />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="relative grid size-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 md:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              <span
                className={`absolute h-[1.5px] w-5 bg-latte transition-transform duration-500 ease-[var(--ease-spring)] ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-5 bg-latte transition-transform duration-500 ease-[var(--ease-spring)] ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-30 flex flex-col justify-between bg-nero/85 px-6 pt-32 pb-10 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.15 } }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-[13vw] leading-[1.05] uppercase"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", transition: { duration: 0.35, delay: i * 0.03 } }}
                    transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.07 }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="space-y-1 text-latte/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
            >
              <p>{site.address.street}, {site.address.city}</p>
              <p>Tutti i giorni 17:00 – 23:00, martedì chiuso</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PhoneIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.1a1.13 1.13 0 0 0-1.17.42l-.97 1.29a1.13 1.13 0 0 1-1.21.38 12.04 12.04 0 0 1-7.14-7.14 1.13 1.13 0 0 1 .38-1.21l1.3-.97c.36-.27.52-.73.41-1.17L6.97 3.1A1.13 1.13 0 0 0 5.87 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}
