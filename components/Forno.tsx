"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/lib/useReduced";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const sentence =
  "La qualità delle nostre pizze viene da una lunga lievitazione e dal nostro forno a legna, acceso con bucce di mandorla.";

function Word({
  word,
  range,
  progress,
  highlight,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? "text-tortora" : undefined}>
      {word}{" "}
    </motion.span>
  );
}

const highlighted = new Set(["forno", "legna,", "bucce", "mandorla."]);

export default function Forno() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = sentence.split(" ");

  return (
    <section className="relative overflow-hidden bg-nero px-4 py-28 md:px-10 md:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[80vw] max-w-[900px] max-h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(182,165,148,0.16),transparent_62%)]"
      />
      <div ref={ref} className="relative mx-auto max-w-5xl">
        <p className="font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02] uppercase">
          {reduce
            ? sentence
            : words.map((w, i) => (
                <Word
                  key={i}
                  word={w}
                  progress={scrollYProgress}
                  range={[i / words.length, (i + 1) / words.length]}
                  highlight={highlighted.has(w)}
                />
              ))}
        </p>
        <Reveal delay={0.1} className="mt-12 grid gap-8 text-latte/75 sm:grid-cols-2 md:mt-16 md:max-w-3xl">
          <p className="text-lg leading-relaxed">
            <span className="block text-latte">Farina Petra</span>
            La farina dei nostri impasti.
          </p>
          <p className="text-lg leading-relaxed">
            <span className="block text-latte">Fiordilatte napoletano</span>
            Sulle nostre pizze, insieme alla mozzarella di bufala dove indicato nel menu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
