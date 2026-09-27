"use client";

import { motion } from "motion/react";
import { dayNames, site, weekOrder } from "@/lib/site";
import { useOpenStatus } from "@/lib/useOpenStatus";
import { MaskTitle, Reveal } from "./Reveal";
import MapEmbed from "./MapEmbed";

export default function Visit() {
  const status = useOpenStatus();

  return (
    <section id="orari" className="bg-bianco-tortora px-4 py-28 text-carbone md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <MaskTitle
          text="Vienici a trovare"
          className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] uppercase"
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-[2rem] bg-carbone/[0.05] p-2 ring-1 ring-carbone/10">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
                <MapEmbed />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4 px-2">
              <address className="text-xl leading-snug not-italic">
                {site.address.street}
                <br />
                {site.address.cap} {site.address.city}
              </address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-carbone py-2 pr-2 pl-5 text-latte transition-transform duration-500 ease-[var(--ease-spring)] active:scale-[0.97]"
              >
                Indicazioni stradali
                <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-4xl uppercase">Orari di apertura</h3>
            <p className="mt-3 flex items-center gap-2.5 text-carbone/75" aria-live="polite">
              <span className={`size-2.5 rounded-full ${status?.open ? "bg-emerald-500" : "bg-tortora-scuro"}`} />
              {status?.label ?? "Tutti i giorni dalle 17:00 alle 23:00, martedì chiuso"}
            </p>
            <ul className="mt-8">
              {weekOrder.map((d, i) => {
                const h = site.hours[d];
                const isToday = status?.today === d;
                return (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.05 }}
                    className={`relative flex items-center justify-between border-b border-carbone/12 py-4 text-lg ${
                      h ? "" : "text-carbone/45"
                    }`}
                  >
                    {isToday && (
                      <motion.span
                        layoutId="today"
                        className="absolute inset-x-[-0.5rem] inset-y-1 -z-0 rounded-2xl bg-carbone"
                      />
                    )}
                    <span className={`relative ${isToday ? "text-latte" : ""}`}>
                      {dayNames[d]}
                      {isToday && <span className="ml-2 text-sm text-latte/60">oggi</span>}
                    </span>
                    <span className={`relative tabular-nums ${isToday ? "text-latte" : ""}`}>
                      {h ? `${h.open} – ${h.close}` : "Chiuso"}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-12">
              <h3 className="font-display text-4xl uppercase">Seguici</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <SocialLink href={site.social.instagram} label="Instagram" handle="@pepeneroenna">
                  <path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
                </SocialLink>
                <SocialLink href={site.social.facebook} label="Facebook" handle="Pepe Nero Enna">
                  <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5c0-.28.22-.5.5-.5Z" />
                </SocialLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  handle,
  children,
}: {
  href: string;
  label: string;
  handle: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full py-2 pr-5 pl-2 ring-1 ring-carbone/20 transition-[background-color,transform] duration-500 ease-[var(--ease-spring)] hover:bg-carbone hover:text-latte active:scale-[0.97]"
    >
      <span className="grid size-10 place-items-center rounded-full bg-carbone/[0.07] transition-[transform,background-color] duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-8deg] group-hover:bg-white/10">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          {children}
        </svg>
      </span>
      <span>
        <span className="sr-only">{label}: </span>
        {handle}
      </span>
    </a>
  );
}
