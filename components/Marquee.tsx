const words = ["Gelato", "Granite", "Brioche", "Caffè", "Ci vediamo alla Kalsa"];

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = [...words, ...words];
  return (
    <div className={`flex overflow-hidden ${reverse ? "marquee-reverse" : ""}`} aria-hidden="true">
      <div className="marquee-track flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
        {list.map((w, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 md:gap-12">
            <span className="font-display text-4xl whitespace-nowrap uppercase md:text-5xl">{w}</span>
            <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-salvia" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36 18.36 5.64" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative z-10 overflow-hidden bg-nero pb-10">
      <div className="border-y border-salvia/25 py-5 text-latte md:py-7">
        <Row />
      </div>
      <p className="sr-only">{words.join(", ")}</p>
    </section>
  );
}
