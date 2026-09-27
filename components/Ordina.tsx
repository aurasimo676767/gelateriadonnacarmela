import { site } from "@/lib/site";
import { MaskTitle, Reveal } from "./Reveal";
import { PhoneIcon } from "./Nav";
export default function Ordina() {
  return <section id="contatti" className="bg-salvia px-5 py-24 text-carbone md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 md:grid-cols-2 md:items-end">
        <MaskTitle text="Che gusto ha oggi?" className="font-display uppercase text-[clamp(3rem,8vw,7rem)] leading-[.98]"/>
        <Reveal><p className="max-w-md text-xl leading-relaxed">Hai un gusto in mente? Chiamaci per sapere cosa trovi al banco, poi passa da Via Paternostro.</p></Reveal>
      </div>
      <a href={`tel:${site.phone.tel}`} className="group mt-12 flex flex-wrap items-center justify-between gap-6 border-y border-carbone/25 py-8">
        <span className="font-display uppercase text-[clamp(2.5rem,10vw,8rem)] leading-none">{site.phone.display}</span>
        <span className="pill bg-carbone text-latte">Chiama ora <span className="pill-icon bg-white/10"><PhoneIcon/></span></span>
      </a>
      <p className="mt-6">{site.hoursLabel}</p>
    </div>
  </section>;
}
