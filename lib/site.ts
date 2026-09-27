// Fonte: copie locali autorizzate dall'utente; vedi docs/contenuti.md.
export const site = {
  name: "Donna Carmela",
  fullName: "Antica Gelateria Donna Carmela",
  legalName: null as string | null,
  vat: null as string | null,
  tagline: "Gelato, granite e brioche alla Kalsa",
  address: { street: "Via Alessandro Paternostro, 20", city: "Palermo", cap: "90133" },
  mapsUrl: "https://share.google/cssYXcujYlYb1LLyn",
  mapsEmbed: "https://www.google.com/maps?q=38.1155077,13.3663851&hl=it&z=17&output=embed",
  phone: { display: "331 748 2568", tel: "+393317482568" },
  social: { instagram: "https://www.instagram.com/donnacarmela1890/" },
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJO8njLQDlGRMR9iVnW16k3Pk",
  hoursLabel: "Tutti i giorni, 09:00 – 01:30",
  hours: Object.fromEntries(Array.from({ length: 7 }, (_, day) => [day, { open: "09:00", close: "01:30" }])) as Record<number, { open: string; close: string } | null>,
};
export const dayNames = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
export const weekOrder = [1, 2, 3, 4, 5, 6, 0];
