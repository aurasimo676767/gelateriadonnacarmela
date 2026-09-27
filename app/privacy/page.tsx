import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = { title:"Privacy e cookie · Donna Carmela", robots:{index:false,follow:false} };
export default function Privacy() {
  return <main className="min-h-dvh bg-nero px-5 py-12 text-latte md:py-20"><div className="mx-auto max-w-2xl">
    <Link href="/" className="underline underline-offset-4">← Torna a Donna Carmela</Link>
    <h1 className="mt-12 font-display text-5xl uppercase">Privacy e cookie</h1>
    <p className="mt-6 rounded-2xl border border-salvia/30 p-5 text-salvia">Anteprima locale. L’informativa sarà completata con i dati del titolare e dell’hosting prima della pubblicazione.</p>
    <section className="mt-10 space-y-4 text-lg leading-relaxed"><h2 className="font-display text-3xl">Il sito</h2><p>Questa anteprima presenta la gelateria, i prodotti e i contatti. Non include moduli, account, newsletter o strumenti di analisi. Foto e font sono serviti localmente.</p></section>
    <section className="mt-10 space-y-4 text-lg leading-relaxed"><h2 className="font-display text-3xl">La mappa</h2><p>Google Maps viene caricato solo premendo “Mostra la mappa”. Da quel momento il browser si collega a Google, che può ricevere dati tecnici e utilizzare cookie.</p><a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className="underline">Privacy di Google</a></section>
    <section className="mt-10 space-y-4 text-lg leading-relaxed"><h2 className="font-display text-3xl">Link e contatti</h2><p>I link Instagram e Google aprono servizi esterni. Per contattare il locale: <a href={`tel:${site.phone.tel}`} className="underline">{site.phone.display}</a>.</p></section>
  </div></main>;
}
