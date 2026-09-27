"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/lib/useReduced";
import { useRef } from "react";
import { MaskTitle, Reveal } from "./Reveal";

const impasti = [
  {
    name: "Classico",
    text: "Farina Petra e lunga lievitazione. È la base di tutte le nostre pizze.",
  },
  {
    name: "Integrale",
    text: "Più rustico, più saporito. Qualsiasi pizza del menu, con impasto integrale.",
  },
  {
    name: "Senza glutine",
    text: "L'impasto senza glutine per chi deve o vuole evitarlo. Chiedilo quando ordini.",
  },
];

function ImpastoRow({ name, text, index }: { name: string; text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dir = index % 2 === 0 ? 1 : -1;
  const x = useTransform(scrollYProgress, [0.05, 0.4], reduce ? ["0%", "0%"] : [`${-10 * dir}%`, "0%"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.3], reduce ? [1, 1] : [0, 1]);

  return (
    <li ref={ref} className="border-t border-carbone/15 py-8 md:py-12">
      <div className="grid items-end gap-4 md:grid-cols-[1fr_minmax(0,20rem)] md:gap-12">
        <div className="@container">
          <motion.p
            style={{ x, opacity }}
            className="font-display text-[15.5cqw] leading-[0.85] whitespace-nowrap text-carbone uppercase"
          >
            {name}
          </motion.p>
        </div>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-carbone/80 md:pb-3">{text}</p>
        </Reveal>
      </div>
    </li>
  );
}

export default function Impasti() {
  return (
    <section id="impasti" className="relative overflow-x-clip bg-bianco-tortora pt-32 pb-24 text-carbone md:pt-44 md:pb-36">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-2 md:items-end">
          <MaskTitle
            text="Scegli il tuo impasto"
            className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] uppercase"
          />
          <Reveal delay={0.2}>
            <p className="max-w-md text-lg leading-relaxed text-carbone/75 md:justify-self-end">
              Tre impasti per ogni pizza del menu. Tu scegli la pizza, poi ci dici come la vuoi.
            </p>
          </Reveal>
        </div>

        <ul>
          {impasti.map((i, idx) => (
            <ImpastoRow key={i.name} {...i} index={idx} />
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-carbone/15 pt-16 md:mt-24 md:grid-cols-[auto_1fr] md:items-center md:gap-20 md:pt-24">
          <LactoseBadge />
          <div className="max-w-xl space-y-5">
            <MaskTitle
              text="Anche senza lattosio"
              as="h3"
              className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[0.95] uppercase"
            />
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-carbone/80">
                Usiamo fiordilatte napoletano e, per chi non digerisce il lattosio, mozzarella senza
                lattosio. Basta chiederla al momento dell&apos;ordine.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LactoseBadge() {
  const reduce = useReduced();
  const text = "Mozzarella senza lattosio · Fiordilatte napoletano · ";
  return (
    <Reveal className="justify-self-center md:justify-self-start">
      <div className="relative grid size-56 place-items-center md:size-64">
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 size-full text-carbone"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          <defs>
            <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-current font-sans text-[13.5px] tracking-[0.12em] uppercase">
            <textPath href="#circle">{text}</textPath>
          </text>
        </motion.svg>
        <div className="grid size-28 place-items-center rounded-full bg-carbone text-center md:size-32">
          <span className="font-display text-3xl leading-none text-bianco-tortora md:text-4xl">
            Senza
            <span className="mt-1 block font-sans text-xs tracking-wide normal-case opacity-70">lattosio</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
}
