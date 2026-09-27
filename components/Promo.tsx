"use client";

import { motion } from "motion/react";
import { CanIcon, PizzaIcon, PizzoloIcon } from "./FoodIcons";
import { MaskTitle } from "./Reveal";
import { useReduced } from "@/lib/useReduced";

const offers = [
  {
    pizzas: "3 pizze normali",
    gift: "una lattina in omaggio",
    giftName: "Lattina",
    Icon: CanIcon,
    pizzaSize: "size-11 sm:size-12 md:size-14",
    iconSize: "h-9 w-auto md:h-11",
  },
  {
    pizzas: "3 pizze maxi",
    gift: "un pizzolo dolce in omaggio",
    giftName: "Pizzolo dolce",
    Icon: PizzoloIcon,
    pizzaSize: "size-14 sm:size-16 md:size-20",
    iconSize: "size-10 md:size-12",
  },
];

const burst = [
  { x: -46, y: -30, s: 8 },
  { x: -18, y: -48, s: 6 },
  { x: 22, y: -46, s: 9 },
  { x: 58, y: -26, s: 6 },
  { x: 66, y: 18, s: 7 },
  { x: 30, y: 44, s: 6 },
  { x: -30, y: 40, s: 8 },
  { x: -60, y: 8, s: 5 },
];

function Offer({
  pizzas,
  gift,
  giftName,
  Icon,
  pizzaSize,
  iconSize,
  i,
}: (typeof offers)[number] & { i: number }) {
  const reduce = useReduced();
  const giftDelay = 1.05 + i * 0.15;

  return (
    <motion.li
      className="grid gap-7 border-t border-white/10 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <p className="text-2xl leading-snug text-latte/80 md:text-3xl">
        Ogni <span className="text-latte">{pizzas}</span>,<br />
        {gift}.
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-4 md:gap-x-4" aria-hidden="true">
        <div className="flex items-center gap-2 md:gap-3">
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className={`block drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)] ${pizzaSize}`}
              variants={{
                hidden: { scale: 0.3, rotate: -140, y: -40, opacity: 0 },
                show: {
                  scale: 1,
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 170, damping: 15, delay: 0.2 + i * 0.15 + d * 0.2 },
                },
              }}
            >
              <PizzaIcon className="size-full" />
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
        <motion.span
          className="font-display text-3xl text-tortora md:text-4xl"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            show: { opacity: 1, scale: 1, transition: { delay: 0.9 + i * 0.15, duration: 0.4 } },
          }}
        >
          =
        </motion.span>

        <div className="relative">
          {burst.map((b, k) => (
            <motion.span
              key={k}
              className={`absolute top-1/2 left-1/2 rounded-full ${k % 2 ? "bg-tortora" : "bg-salvia"}`}
              style={{ width: b.s, height: b.s, marginLeft: -b.s / 2, marginTop: -b.s / 2 }}
              variants={{
                hidden: { x: 0, y: 0, opacity: 0, scale: 0 },
                show: {
                  x: b.x,
                  y: b.y,
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0.6],
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: giftDelay + 0.08 },
                },
              }}
            />
          ))}
          <motion.div
            className="relative flex items-center gap-3 rounded-full bg-latte py-1.5 pr-5 pl-1.5 text-nero shadow-[0_14px_30px_-12px_rgba(182,165,148,0.55)]"
            variants={{
              hidden: { scale: 0, rotate: -14 },
              show: {
                scale: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 320, damping: 13, delay: giftDelay },
              },
            }}
          >
            <motion.span
              className="grid size-12 place-items-center rounded-full bg-bianco-tortora md:size-14"
              animate={reduce ? undefined : { rotate: [0, -10, 9, -5, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 2.6, delay: giftDelay + 1 }}
            >
              <Icon className={iconSize} />
            </motion.span>
            <span className="leading-tight">
              <span className="block text-sm text-carbone/60">in omaggio</span>
              <span className="block text-base font-medium whitespace-nowrap md:text-lg">{giftName}</span>
            </span>
          </motion.div>
        </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function Promo() {
  return (
    <section className="bg-nero px-4 pt-4 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-7xl">
        <MaskTitle
          text="Più siete, più ci guadagnate"
          className="mb-12 max-w-4xl font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[0.92] uppercase md:mb-16"
        />
        <ul className="border-b border-white/10">
          {offers.map((o, i) => (
            <Offer key={o.pizzas} {...o} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
