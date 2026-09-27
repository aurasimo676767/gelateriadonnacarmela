# Gelateria Donna Carmela — note condivise

## Collaborazione

- Parlare e scrivere commit in italiano. Fare commit piccoli e chiari.
- CLAUDE.md contiene solo @AGENTS.md.
- Non modificare ../pepenero. Questa cartella nasce come copia, ma ora contiene il sito Donna Carmela.
- Non collegare GitHub o Vercel: lo farà l'utente con progetti nuovi.
- Lavorare in locale. Anteprima sul telefono tramite IP della stessa rete.
- Non inventare dati, gusti, prezzi, allergeni o servizi.
- Prima di dichiarare funzionante una modifica, eseguire build e verifica visiva desktop/telefono. Segnalare esplicitamente verifiche impedite dall'ambiente.
- Limitare ricerche e operazioni ripetitive: l'utente ha chiesto attenzione al consumo di usage.

## Migrazione

- [ ] Dati locali: contatti e orari sostituiti; mancano ragione sociale e P.IVA, conferma orari/telefono.
- [x] Menu pizze sostituito con gelato, granite, brioche e caffè. Non ci sono gusti o prezzi nella fonte.
- [x] Rimosse sezioni Impasti, Forno e Promo; aggiunta Storia.
- [x] Hero Donna Carmela, marchio al posto del macinapepe, rimossi loop pepe.
- [x] Palette e themeColor.
- [x] Metadata e JSON-LD IceCreamShop.
- [x] Anteprima social e icona.
- [ ] Privacy: rimossi dati Pepe Nero, bozza locale da completare con titolare/hosting.
- [x] Testi Nav, Footer, Ordina, Visit e Hero.
- [x] Nome package e README.
- [ ] Build completa e verifica browser desktop/mobile: ambiente blocca processi figli con spawn EPERM.
- [ ] GitHub/Vercel: compito dell'utente, non eseguirlo.

## Fonti e decisioni

Dettagli in docs/contenuti.md.
- Instagram: https://www.instagram.com/donnacarmela1890/
- Maps: https://share.google/cssYXcujYlYb1LLyn
- Fonte autorizzata: https://donna-carmela.devra.net e /gusti, salvate dall'utente come HTML e cartelle *_files nella radice. Non importare script della fonte. Copie escluse da git e lint.
- Il pannello originale conferma nascita di Donna Carmela nel 1890 a Novara di Sicilia e tradizione alla quarta generazione: non confondere con apertura del negozio.
- Telefono unico 331 748 2568: cellulare della fonte, sostituisce la vecchia regola del fisso.
- Nessun Facebook/delivery/recensione numerica senza dati.
- Colori dai materiali dell'insegna: nero #242B1C, carbone #343B28, tortora #E7C49B, tortora-scuro #716044, bianco-tortora #EDEBD9, salvia #BAC78A, latte #FAF8EC.
- L'utente ha rifiutato sia Georgia sia Oswald Bold: ripristinato Anton locale (400) per i titoli, senza grassetto sintetico. Jost locale per testo. Conservati maiuscole, proporzioni e altri ritocchi. Non cambiare nuovamente font senza richiesta.
- Hero con marchio in evidenza e cornice ad arco; rimossa la targhetta circolare sulla foto. Marquee orizzontale incorniciata con titoli maiuscoli, al posto della fascia inclinata condivisa con Pepe Nero.
- Dopo lo screenshot iPhone: hero mobile compattata di 48px (padding superiore 112px, marchio 40px, margine sotto 24px). Dimensioni del nome e layout desktop conservati.
- Hero lettere in sequenza e foto ad arco; prodotti illustrati in SVG con entrata a molla; storia e footer con parallasse. Nessuna dipendenza da hover per interazioni principali.

## Stack e file

Next.js 16, React 19, TypeScript, Tailwind v4 (@theme in app/globals.css), Motion e Lenis.
- lib/site.ts: dati; lib/menu.ts: categorie.
- lib/useOpenStatus.ts: ora di Roma, turno che termina il giorno successivo.
- lib/scroll.ts: Lenis condiviso e scrollToEl.
- lib/useReduced.ts: prefers-reduced-motion.
- app/page.tsx: Nav, Hero, Marquee, Menu, Storia, Ordina, Visit, Footer.
- components/Brand.tsx: ricostruzione SVG del marchio; GelatoArt.tsx: illustrazioni.
- components/Reveal.tsx: Reveal e MaskTitle.
- app/layout.tsx: font, metadata, JSON-LD e provider.
- public/images: fotografie fornite, non generate.
- lib/url.ts: URL da VERCEL_PROJECT_PRODUCTION_URL con fallback locale.
- app/privacy/page.tsx: bozza da completare prima della pubblicazione.

## Decisioni da non rompere

- html e body: overflow-x: clip e overscroll-behavior-x: none; main overflow-x-clip. Niente overflow hidden sul body che rompa sticky.
- Nav scrive data-nav su html. Barra categorie cambia top, mai translate.
- Scroll categorie sottrae altezza barra e nav.
- MaskTitle e lettere hero hanno padding verticale con margini negativi per non tagliare glifi.
- Le maschere usano anche title-mask-gutter (padding e margine orizzontale compensati): necessario per non tagliare la A finale di Anton con tracking negativo. Applicato a hero, MaskTitle e navigazione mobile; non rimuoverlo.
- MotionConfig reducedMotion="never": ingressi restano; parallasse/loop disattivati tramite useReduced o media query.
- Google Maps si carica solo al tocco. Prima mostra illustrazione, non una mappa geografica reale.
- Pulsanti a pillola, card con doppio bordo, grana, easing expo [0.16, 1, 0.3, 1].
- Testo non selezionabile salvo input.

## Verifiche ultima sessione

Compilazione Next riuscita, build interrotta al worker TypeScript con spawn EPERM. TypeScript diretto e npm run lint passati. Verificati gli orari a mezzanotte, 01:29, 01:30, 08:59, 09:00 e 23:59, incluso cambio settimana. Server dev e browser automatizzato bloccati dallo stesso ambiente: verifica visuale ancora da fare. Non dichiarare completati questi controlli.

Migrazione committata in locale (548a390). Nessun remote configurato: il push su GitHub e il collegamento a Vercel li fa l'utente.

Comandi: npm run dev -- --hostname 0.0.0.0; npm run build; npm run lint; npx tsc --noEmit.
