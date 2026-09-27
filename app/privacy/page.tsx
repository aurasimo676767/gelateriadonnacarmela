import type { Metadata } from "next";
import Link from "next/link";
import Mill from "@/components/Mill";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie · Pepe Nero",
  description: "Come il sito di Pepe Nero tratta i dati di chi lo visita.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Chi è il titolare",
    body: [
      `${site.legalName}, ${site.address.street}, ${site.address.cap} ${site.address.city}, P.IVA ${site.vat}.`,
      `Per qualsiasi domanda sui tuoi dati puoi chiamarci allo ${site.phone.display}.`,
    ],
  },
  {
    title: "Cosa raccoglie questo sito",
    body: [
      "Questo sito serve solo a mostrare il menu, gli orari e i contatti. Non ci sono moduli, account, newsletter, strumenti di statistica o pubblicità, e il sito non usa cookie propri.",
      "I caratteri tipografici sono caricati dal sito stesso, senza richieste a servizi esterni.",
    ],
  },
  {
    title: "Dati tecnici dell'hosting",
    body: [
      "Il sito è ospitato da Vercel Inc. Come ogni server, per funzionare e per sicurezza registra alcuni dati tecnici delle visite, come l'indirizzo IP, il tipo di browser e le pagine richieste. Questi dati non vengono usati per identificarti.",
    ],
    link: { href: "https://vercel.com/legal/privacy-policy", label: "Privacy di Vercel" },
  },
  {
    title: "La mappa di Google",
    body: [
      "La mappa nella sezione \"Vienici a trovare\" si carica solo se tocchi \"Mostra la mappa\". Da quel momento Google riceve dati come il tuo indirizzo IP e può usare dei cookie, secondo la sua privacy.",
    ],
    link: { href: "https://policies.google.com/privacy?hl=it", label: "Privacy di Google" },
  },
  {
    title: "Link ad altri siti",
    body: [
      "Instagram, Facebook, Glovo, Deliveroo e Google Maps si aprono sui loro siti o nelle loro app: da lì valgono le loro regole sulla privacy.",
    ],
  },
  {
    title: "Ordini al telefono",
    body: [
      "Se ci chiami per ordinare, usiamo il tuo numero e i dati che ci dai (per esempio l'indirizzo di consegna) solo per preparare e consegnare l'ordine.",
    ],
  },
  {
    title: "I tuoi diritti",
    body: [
      "Puoi chiederci in qualsiasi momento di vedere, correggere o cancellare i tuoi dati, oppure opporti al loro uso. Se pensi che i tuoi dati siano trattati in modo scorretto puoi rivolgerti al Garante per la protezione dei dati personali.",
    ],
    link: { href: "https://www.garanteprivacy.it", label: "garanteprivacy.it" },
  },
];

export default function Privacy() {
  return (
    <main className="min-h-dvh bg-nero px-4 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-2.5 rounded-full py-2 pr-4 pl-3 ring-1 ring-white/15 transition-colors hover:bg-white/5">
          <Mill className="h-6 w-auto text-latte" />
          <span className="font-display text-lg">
            PEPE <span className="mirror text-tortora">NERO</span>
          </span>
          <span className="ml-1 text-latte/60">Torna al sito</span>
        </Link>

        <h1 className="mt-14 font-display text-[clamp(2.75rem,9vw,4.5rem)] leading-[0.95] uppercase">Privacy e cookie</h1>
        <p className="mt-4 text-latte/60">Ultimo aggiornamento: settembre 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-2xl text-tortora uppercase">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-lg leading-relaxed text-latte/80">
                  {p}
                </p>
              ))}
              {s.link && (
                <a
                  href={s.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-latte underline decoration-white/30 underline-offset-4 hover:decoration-latte"
                >
                  {s.link.label}
                </a>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
