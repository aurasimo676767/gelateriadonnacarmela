# Gelateria Donna Carmela — note per Claude

**Questo progetto è partito come copia del sito della Pizzeria Pepe Nero** (`../pepenero`). Struttura, stile e tecniche restano; contenuti e identità vanno rifatti per la Gelateria Donna Carmela. Tutto quello che sotto parla di Pepe Nero descrive il codice com'è adesso, non come deve diventare.

## Da sostituire (ancora di Pepe Nero)

- [ ] `lib/site.ts`: nome, ragione sociale, P.IVA, indirizzo, Maps, telefono, social, delivery, recensioni, orari
- [ ] `lib/menu.ts`: il menu delle pizze (normale/maxi) va trasformato in quello della gelateria (gusti, coppe, ecc.)
- [ ] Sezioni specifiche della pizzeria: `Impasti.tsx`, `Forno.tsx`, `Promo.tsx`, parte di `Menu.tsx` (supplementi, tavola calda, "Prova con")
- [ ] Hero: scritta "PEPE NERO" lettera per lettera e macinapepe (`Mill.tsx`, animazioni `mill-*` e `pepper-grain` in `globals.css`); anche il segnaposto della mappa usa `Mill`
- [ ] Palette in `globals.css` e `themeColor` in `layout.tsx`
- [ ] `app/layout.tsx`: title, description, JSON-LD (tipo, cucina, orari)
- [ ] `app/opengraph-image.tsx`, `app/icon.svg`
- [ ] `app/privacy/page.tsx`: titolare e dati
- [ ] Testi a mano in `Footer.tsx`, `Nav.tsx`, `Ordina.tsx`, `Visit.tsx`, `Hero.tsx`
- [ ] `package.json` `name`, `README.md`
- [ ] Nuovo repo GitHub e nuovo progetto Vercel: **non** collegare questa cartella a quelli di Pepe Nero

Spunta le voci man mano, poi cancella questa sezione e riscrivi il resto del file per la gelateria.


Sito one-page della Pizzeria Pepe Nero (Enna). Parla con l'utente in italiano, anche nei messaggi di commit.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript, Tailwind CSS v4 (config in `app/globals.css` con `@theme`, niente `tailwind.config`)
- Animazioni: `motion` (`motion/react`), scroll morbido: `lenis`
- Font: Anton (titoli, `font-display`) e Jost (testo, `font-sans`) da `next/font/google`; `assets/Anton-Regular.ttf` serve solo all'immagine di anteprima
- Deploy su Vercel (`vercel.json` imposta solo `framework: nextjs`), repo GitHub `aurasimo676767/pepenero`
- Niente immagini: tutto è disegnato in SVG/CSS (macinapepe in `Mill.tsx`, icone cibo in `FoodIcons.tsx`, mappa finta in `MapEmbed.tsx`)

## Dove stanno le cose

- `lib/site.ts` — dati del locale: nome, ragione sociale, P.IVA, indirizzo, link Maps, telefono, social, Glovo/Deliveroo, recensioni, orari (`hours`, 0 = domenica)
- `lib/menu.ts` — categorie, pizze, prezzi (normale/maxi), supplementi, `formatPrice`
- `lib/useOpenStatus.ts` — "Aperto ora / Chiuso, riapriamo…" calcolato sull'ora di Roma da `site.hours`
- `lib/scroll.ts` — istanza Lenis condivisa + `scrollToEl` (usa Lenis se c'è, altrimenti scroll nativo)
- `lib/url.ts` — `siteUrl` da `VERCEL_PROJECT_PRODUCTION_URL`, fallback localhost
- `lib/useReduced.ts` — `prefers-reduced-motion`
- `app/page.tsx` — ordine delle sezioni: Nav, Hero, Marquee, Impasti, Forno, Promo, Menu, Ordina, Visit, Footer
- `app/layout.tsx` — font, metadata, JSON-LD `Restaurant`, SmoothScroll, MotionProvider
- `app/opengraph-image.tsx` — anteprima link generata (1200×630)
- `app/privacy/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`

## Stile

- Palette in `@theme` (`globals.css`): nero, carbone, tortora, tortora-scuro, bianco-tortora, salvia, latte. Usa questi nomi, non colori a caso
- Easing: `--ease-spring` e `--ease-expo`; in JS `[0.16, 1, 0.3, 1]`
- Pulsanti "a pillola" con cerchio icona a destra; card a doppio bordo (`p-1.5` esterno + raggio interno `calc(1.75rem-0.375rem)`)
- Grana di sfondo con `.grain` sul body
- `Reveal` e `MaskTitle` (`components/Reveal.tsx`) per le entrate allo scroll
- Testo non selezionabile (tranne input), niente highlight al tocco

## Decisioni da non rompere

- **Niente scorrimento laterale su telefono**: `overflow-x: clip` su `html` e `body` (Safari iOS ignora il solo body) + `overscroll-behavior-x: none`, e `overflow-x-clip` su `main`. Non usare `overflow: hidden` sul body, romperebbe il `sticky` della barra del menu
- **Barra del menu sticky**: quando la Nav appare, imposta `data-nav="shown"` su `<html>` (`Nav.tsx`), e la barra cambia solo `top` (`in-data-[nav=shown]:top-…`). Non spostarla con `translate`, altrimenti copre "Prova con" anche quando non è agganciata
- **Scroll alle categorie**: `scrollToId` in `Menu.tsx` sottrae altezza barra + nav, così il titolo non finisce sotto la barra
- **Maschere dei titoli** (`MaskTitle`, lettere hero) hanno padding verticale extra con margini negativi: servono per non tagliare accenti e lettere alte
- **Movimento ridotto**: `MotionConfig reducedMotion="never"`, quindi le animazioni d'ingresso girano sempre; parallasse e loop CSS invece si spengono con `useReduced()` o con la media query in `globals.css`
- **Mappa**: Google Maps si carica solo al tocco ("Mostra la mappa") per i cookie; prima si vede lo schizzo SVG
- **Un solo telefono** (il fisso), ovunque

## Testi scritti a mano (non leggono da `site.ts`)

Se cambiano orari o dati, controlla anche: `Footer.tsx`, `Nav.tsx`, `Ordina.tsx`, `Visit.tsx`, il fallback di `StatusPill` in `Hero.tsx`, `description` e `openingHoursSpecification` in `app/layout.tsx`, `app/privacy/page.tsx`, `app/opengraph-image.tsx`.

## Comandi

```bash
npm run dev     # sviluppo
npm run build   # verifica prima di pubblicare
npm run lint
```

Prima di dire che una modifica funziona, controllala su larghezza telefono (niente scroll laterale) e su desktop.
