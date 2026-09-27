import { site } from "@/lib/site";
import { PhoneIcon } from "./Nav";
import { MaskTitle, Reveal } from "./Reveal";

const modes = [
  {
    title: "Asporto",
    text: `Chiama, ordina e passa a ritirare in ${site.address.street}.`,
  },
  {
    title: "Domicilio",
    text: "Te la portiamo a casa. Ordina al telefono o dalle app di consegna.",
  },
  {
    title: "Tavola calda",
    text: "Su prenotazione, in formato piccolo, medio o grande. Schiacciata su ordinazione.",
  },
];

export default function Ordina() {
  return (
    <section id="ordina" className="bg-nero px-4 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <MaskTitle
            text="Ordina come preferisci"
            className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[0.9] uppercase"
          />
          <Reveal delay={0.15}>
            <p className="max-w-md text-lg leading-relaxed text-latte/70 md:justify-self-end">
              Tocca il numero per chiamarci. Siamo aperti tutti i giorni dalle 17:00 alle 23:00,
              martedì chiuso.
            </p>
          </Reveal>
        </div>

        <Reveal y={24} className="mt-14 border-y border-white/10 md:mt-20">
          <a
            href={`tel:${site.phone.tel}`}
            className="group flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:py-10"
          >
            <span className="relative font-display text-[clamp(3.4rem,15.5vw,8rem)] leading-none whitespace-nowrap tabular-nums">
              <span className="text-latte transition-opacity duration-500 group-hover:opacity-0">{site.phone.display}</span>
              <span
                aria-hidden="true"
                className="absolute inset-0 text-tortora [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-[var(--ease-expo)] group-hover:[clip-path:inset(0_0%_0_0)]"
              >
                {site.phone.display}
              </span>
            </span>
            <span className="flex w-max items-center gap-3 rounded-full bg-tortora py-2 pr-2 pl-6 text-lg font-medium text-nero transition-transform duration-500 ease-[var(--ease-spring)] group-active:scale-[0.97]">
              Chiama ora
              <span className="grid size-10 place-items-center rounded-full bg-nero/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[-14deg] group-hover:scale-110">
                <PhoneIcon />
              </span>
            </span>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-12">
          {modes.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-tortora" aria-hidden="true" />
                <h3 className="font-display text-3xl uppercase">{m.title}</h3>
              </div>
              <p className="mt-3 max-w-xs text-lg leading-relaxed text-latte/70">{m.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-3 md:mt-20">
          <span className="mr-2 text-latte/60">Ci trovi anche su</span>
          <a
            href={site.delivery.glovo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 px-6 py-3 text-lg ring-1 ring-white/15 transition-[background-color,transform] duration-500 ease-[var(--ease-spring)] hover:bg-white/10 active:scale-[0.97]"
          >
            Glovo
          </a>
          <a
            href={site.delivery.deliveroo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 px-6 py-3 text-lg ring-1 ring-white/15 transition-[background-color,transform] duration-500 ease-[var(--ease-spring)] hover:bg-white/10 active:scale-[0.97]"
          >
            Deliveroo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
