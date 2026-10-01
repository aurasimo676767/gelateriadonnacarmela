// Sospensione del sito: con SITO_SOSPESO = true ogni richiesta riceve la
// pagina di cortesia (503). Per riattivare il sito impostare false.
const SITO_SOSPESO = true;

const pagina = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Sito non disponibile</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: grid; place-items: center; padding: 16px; box-sizing: border-box;
    background: #242B1C; color: #EDEBD9;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif; text-align: center;
  }
  p { margin: 0; font-size: 1.125rem; letter-spacing: 0.02em; }
</style>
</head>
<body><p>Sito temporaneamente non disponibile.</p></body>
</html>`;

export function proxy() {
  if (!SITO_SOSPESO) return;
  return new Response(pagina, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "86400",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
