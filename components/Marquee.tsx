const words = [
  "Forno a legna",
  "Impasto integrale",
  "Senza glutine",
  "Mozzarella senza lattosio",
  "Lunga lievitazione",
  "Asporto e domicilio",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = [...words, ...words];
  return (
    <div className={`flex overflow-hidden ${reverse ? "marquee-reverse" : ""}`} aria-hidden="true">
      <div className="marquee-track flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
        {list.map((w, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 md:gap-12">
            <span className="font-display text-4xl whitespace-nowrap uppercase md:text-5xl">{w}</span>
            <span className="size-3 shrink-0 rounded-full bg-current opacity-60 md:size-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative z-10 -my-6 overflow-hidden py-6">
      <div className="-rotate-2 bg-tortora py-4 text-nero md:py-5">
        <Row />
      </div>
      <p className="sr-only">{words.join(", ")}</p>
    </section>
  );
}
