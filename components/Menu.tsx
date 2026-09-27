"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { menu } from "@/lib/menu";
import { site } from "@/lib/site";
import { scrollToEl } from "@/lib/scroll";
import { MaskTitle, Reveal } from "./Reveal";
import GelatoArt from "./GelatoArt";

export default function Menu() {
  const [active, setActive] = useState<string>(menu[0].id);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id.replace("cat-", ""));
    }, { rootMargin: "-25% 0px -50% 0px" });
    menu.forEach(c => { const el = document.getElementById("cat-" + c.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  function scrollToId(id: string) {
    const el = document.getElementById("cat-" + id);
    if (el) scrollToEl(el, -((bar.current?.offsetHeight ?? 64) + 112));
  }
  return <section id="menu" className="relative bg-bianco-tortora text-carbone">
    <div className="mx-auto max-w-7xl px-5 pt-24 md:px-10 md:pt-36">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <MaskTitle text="La felicità al banco." className="max-w-2xl font-display uppercase text-[clamp(3rem,8vw,7rem)] leading-[.98]"/>
        <p className="max-w-sm text-lg text-carbone/75 md:justify-self-end">Gelato, granite, brioche e caffè.<br/>Quattro buoni motivi per fermarsi.</p>
      </div>
    </div>
    <div className="sticky top-3 z-30 mt-10 px-3 transition-[top] duration-700 ease-[var(--ease-spring)] md:px-10 in-data-[nav=shown]:top-[5.35rem] md:in-data-[nav=shown]:top-[5.95rem]">
      <div ref={bar} className="mx-auto flex w-fit max-w-full gap-1 rounded-full bg-latte/95 p-1.5 shadow-lg ring-1 ring-carbone/10 backdrop-blur-xl">
        {menu.map(c => <button key={c.id} onClick={() => scrollToId(c.id)} aria-current={active === c.id ? "true" : undefined} className={`relative min-h-12 rounded-full px-3 text-sm sm:px-6 sm:text-base ${active === c.id ? "text-latte" : "text-carbone"}`}>
          {active === c.id && <motion.span layoutId="category" className="absolute inset-0 rounded-full bg-carbone" transition={{ type:"spring",stiffness:350,damping:30 }}/>}
          <span className="relative">{c.title}</span>
        </button>)}
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-36">
      {menu.map((c,i) => <div id={"cat-"+c.id} key={c.id} className="grid items-center gap-6 border-b border-carbone/15 py-14 md:grid-cols-2 md:gap-20 md:py-20">
        <div className={`rounded-[2rem] p-1.5 ring-1 ring-carbone/15 ${c.color} ${i % 2 ? "md:order-2" : ""}`}>
          <div className="grid aspect-[5/4] place-items-center rounded-[calc(2rem-.375rem)] ring-1 ring-carbone/15">
            <GelatoArt kind={c.icon} className="h-full max-h-80 w-full p-5 md:max-h-96"/>
          </div>
        </div>
        <Reveal>
          <h3 className="font-display uppercase text-[clamp(3.5rem,7vw,6rem)] leading-none">{c.title}</h3>
          <p className="mt-5 text-2xl leading-snug">{c.subtitle}</p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-carbone/75">{c.desc}</p>
          {i === 0 && <a href={`tel:${site.phone.tel}`} className="mt-7 inline-block border-b border-carbone/50 pb-1">Chiedi i gusti di oggi ↗</a>}
        </Reveal>
      </div>)}
      <p className="mt-8 max-w-xl text-carbone/70">Per disponibilità, prezzi e informazioni sugli allergeni, chiedi al banco o chiamaci.</p>
    </div>
  </section>;
}
