"use client";

import { AnimatePresence, motion } from "motion/react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { scrollToEl } from "@/lib/scroll";
import { formatPrice, menu, supplementi, type MenuItem } from "@/lib/menu";
import { MaskTitle, Reveal } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;
const suggestions = ["pistacchio", "bufala", "porcini", "salmone", "nduja"];

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function scrollToId(id: string, bar: HTMLElement | null) {
  const el = document.getElementById(id);
  if (!el) return;
  const barHeight = bar?.offsetHeight ?? 120;
  scrollToEl(el, -(barHeight + 12 + 84 + 16));
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const i = normalize(text).indexOf(query);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm bg-tortora/50 px-0.5 text-carbone">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

function Item({ item, hasMaxi, query }: { item: MenuItem; hasMaxi: boolean; query: string }) {
  return (
    <motion.li
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease }}
      className="group border-b border-carbone/12 py-4"
    >
      <div className="flex items-baseline gap-3">
        <h4 className="text-lg font-medium text-carbone">
          <Highlight text={item.name} query={query} />
        </h4>
        <span
          aria-hidden="true"
          className="mb-1.5 min-w-4 flex-1 border-b border-dotted border-carbone/30 transition-colors duration-500 group-hover:border-carbone/60"
        />
        <p className="flex shrink-0 gap-4 text-right text-lg tabular-nums text-carbone">
          <span className="w-12">
            <span className="sr-only">{hasMaxi ? "Normale " : ""}</span>
            {formatPrice(item.price)}
          </span>
          {hasMaxi && (
            <span className="w-12 text-carbone/60">
              <span className="sr-only">Maxi </span>
              {item.maxi ? formatPrice(item.maxi) : "–"}
            </span>
          )}
        </p>
      </div>
      {item.desc && (
        <p className="mt-1 max-w-[52ch] leading-relaxed text-carbone/65">
          <Highlight text={item.desc} query={query} />
        </p>
      )}
    </motion.li>
  );
}

export default function Menu() {
  const [rawQuery, setRawQuery] = useState("");
  const deferred = useDeferredValue(rawQuery);
  const query = normalize(deferred.trim());
  const [active, setActive] = useState(menu[0].id);
  const chipsRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query) return menu;
    return menu
      .map((c) => ({
        ...c,
        items: c.items.filter((it) => normalize(`${it.name} ${it.desc ?? ""}`).includes(query)),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  const resultCount = filtered.reduce((n, c) => n + c.items.length, 0);

  useEffect(() => {
    const sections = filtered.map((c) => document.getElementById(`cat-${c.id}`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id.replace("cat-", ""));
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [filtered]);

  useEffect(() => {
    const row = chipsRef.current;
    const chip = row?.querySelector<HTMLElement>(`[data-cat="${active}"]`);
    if (!row || !chip) return;
    row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <section id="menu" className="relative bg-bianco-tortora text-carbone">
      <div className="mx-auto max-w-7xl px-4 pt-28 md:px-10 md:pt-40">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <MaskTitle text="Il menu" className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.85] uppercase" />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-lg leading-relaxed text-carbone/75 md:pb-4 md:text-right">
              Rosse, bianche, gialle, gourmet e pizzoli, più calzoni e pizze dolci. Quasi tutte anche in
              formato maxi.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="sticky top-3 z-30 mt-10 px-3 transition-[top] duration-700 ease-[var(--ease-spring)] md:mt-14 md:px-10 in-data-[nav=shown]:top-[5.35rem] md:in-data-[nav=shown]:top-[5.95rem]">
        <div ref={barRef} className="mx-auto max-w-7xl rounded-[1.75rem] bg-bianco-tortora/80 p-1.5 shadow-[0_20px_50px_-24px_rgba(47,46,45,0.35)] ring-1 ring-carbone/10 backdrop-blur-xl">
          <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
            <label className="relative block md:w-72 md:shrink-0">
              <span className="sr-only">Cerca una pizza o un ingrediente</span>
              <SearchIcon />
              <input
                type="search"
                value={rawQuery}
                onChange={(e) => setRawQuery(e.target.value)}
                placeholder="Cerca pizza o ingrediente"
                className="h-12 w-full rounded-full bg-latte pr-4 pl-11 text-base text-carbone placeholder:text-carbone/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-tortora"
              />
            </label>
            <div ref={chipsRef} className="no-scrollbar relative flex gap-1 overflow-x-auto" role="list">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="listitem"
                  data-cat={c.id}
                  onClick={() => scrollToId(`cat-${c.id}`, barRef.current)}
                  className={`relative h-12 shrink-0 rounded-full px-4 text-[15px] whitespace-nowrap transition-colors duration-500 ${
                    active === c.id ? "text-latte" : "text-carbone/70 hover:text-carbone"
                  }`}
                  aria-current={active === c.id ? "true" : undefined}
                >
                  {active === c.id && (
                    <motion.span
                      layoutId="chip"
                      className="absolute inset-0 rounded-full bg-carbone"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative">{c.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-28 md:px-10 md:pb-40">
        <div className="mt-6 flex min-h-10 flex-wrap items-center gap-2 text-[15px]" aria-live="polite">
          {query ? (
            <p className="text-carbone/70">
              {resultCount === 1 ? "1 risultato" : `${resultCount} risultati`} per “{deferred.trim()}”
              <button
                type="button"
                onClick={() => setRawQuery("")}
                className="ml-3 underline decoration-carbone/30 underline-offset-4 hover:decoration-carbone"
              >
                Mostra tutto il menu
              </button>
            </p>
          ) : (
            <>
              <span className="mr-1 text-carbone/60">Prova con:</span>
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRawQuery(s)}
                  className="rounded-full px-3 py-1 ring-1 ring-carbone/20 transition-[background-color,transform] duration-300 hover:bg-carbone/5 active:scale-95"
                >
                  {s}
                </button>
              ))}
            </>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-display text-4xl uppercase md:text-5xl">Niente con “{deferred.trim()}”</p>
            <p className="mt-4 text-lg text-carbone/70">
              Prova con un altro ingrediente o con il nome della pizza.
            </p>
          </div>
        )}

        <div className="mt-4 space-y-20 md:space-y-28">
          {filtered.map((c) => (
            <motion.div
              key={c.id}
              id={`cat-${c.id}`}
              className="scroll-mt-40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease }}
            >
              <div className="mb-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-2 border-carbone pb-4">
                <div>
                  <h3 className="font-display text-[clamp(2.4rem,4.5vw,3.5rem)] leading-none uppercase">{c.title}</h3>
                  {c.note && <p className="mt-2 text-carbone/65">{c.note}</p>}
                </div>
                {c.hasMaxi && (
                  <p className="flex gap-4 text-sm text-carbone/60" aria-hidden="true">
                    <span className="w-12 text-right">Normale</span>
                    <span className="w-12 text-right">Maxi</span>
                  </p>
                )}
              </div>
              <ul className="grid gap-x-16 lg:grid-cols-2">
                <AnimatePresence mode="popLayout" initial={false}>
                  {c.items.map((it) => (
                    <Item key={`${c.id}-${it.name}`} item={it} hasMaxi={c.hasMaxi} query={query} />
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-24 grid gap-6 md:mt-32 md:grid-cols-3">
          <div className="rounded-[1.75rem] bg-carbone/[0.04] p-1.5 ring-1 ring-carbone/10">
            <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-latte/70 p-7">
              <h3 className="font-display text-3xl uppercase">Supplementi</h3>
              <ul className="mt-5 space-y-2.5">
                {supplementi.map((s) => (
                  <li key={s.name} className="flex justify-between gap-4 text-carbone/80">
                    <span>{s.name}</span>
                    <span className="shrink-0 tabular-nums">€ {s.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-carbone p-1.5 md:col-span-2">
            <div className="grid h-full gap-8 rounded-[calc(1.75rem-0.375rem)] p-7 text-bianco-tortora ring-1 ring-white/10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-3xl uppercase">Tavola calda</h3>
                <p className="mt-4 leading-relaxed text-bianco-tortora/80">
                  Su prenotazione, in formato piccolo, medio e grande. Schiacciata su ordinazione a
                  16,00 € al kg.
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase">Da sapere</h3>
                <p className="mt-4 leading-relaxed text-bianco-tortora/80">
                  Ogni pizza si può fare con impasto classico, integrale o senza glutine. Prodotti
                  surgelati: piselli, patatine fritte, spinaci.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-carbone/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.2-5.2M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
    </svg>
  );
}
