# Antica Gelateria Donna Carmela

One-page locale per la gelateria alla Kalsa, Palermo. Next.js 16, React 19, Tailwind v4, Motion e Lenis.

## Avvio

```sh
npm run dev -- --hostname 0.0.0.0
```

Dal computer: http://localhost:3000. Dal telefono sulla stessa rete: http://192.168.0.5:3000 (IP rilevato il 27 settembre 2026; può cambiare). Il server deve rimanere aperto. Nessun collegamento GitHub o Vercel.

## Verifiche

```sh
npm run build
npm run lint
npx tsc --noEmit
```

Verificare desktop e telefono, assenza di scroll laterale, navigazione mobile, barra categorie sticky e mappa caricata solo dopo il tocco.

## Contenuti

- lib/site.ts: contatti e orari, incluso il turno oltre mezzanotte.
- lib/menu.ts: categorie documentate. Gusti e prezzi non ancora forniti.
- docs/contenuti.md: provenienza e dati da confermare.
- public/images: foto e marchio dalla copia fornita dall'utente.
- assets: font locali, nessun download necessario durante la build.

La privacy è una bozza locale: completare dati legali e hosting prima di pubblicare.
