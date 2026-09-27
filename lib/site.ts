export const site = {
  name: "Pepe Nero",
  legalName: "Pizzeria Pepe Nero di Lorenzo Bruno",
  vat: "04041710361",
  tagline: "Pizzeria d'asporto e domicilio, tavola calda",
  address: {
    street: "Via Ottavio Catalano, 61",
    city: "Enna",
    cap: "94100",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pizzeria+Pepe+Nero+Via+Ottavio+Catalano+61+Enna",
  mapsEmbed:
    "https://maps.google.com/maps?q=Via%20Ottavio%20Catalano%2061%2C%2094100%20Enna&z=16&output=embed",
  phone: { display: "0935 1620072", tel: "+3909351620072" },
  social: {
    instagram: "https://www.instagram.com/pepeneroenna",
    facebook: "https://www.facebook.com/share/1C9N5D26LH/",
  },
  delivery: {
    glovo: "https://glovoapp.com/it/it/enna/stores/pizzeria-pepe-nero-enn",
    deliveroo: "https://deliveroo.it/it/menu/catania/enna/pizzeria-pepe-nero-via-ottavio-catalano-59",
  },
  reviewUrl: "https://share.google/6k1nqXNmVaLJx8gY4",
  // 0 = domenica ... 6 = sabato, null = chiuso
  hours: {
    0: { open: "17:00", close: "23:00" },
    1: { open: "17:00", close: "23:00" },
    2: null,
    3: { open: "17:00", close: "23:00" },
    4: { open: "17:00", close: "23:00" },
    5: { open: "17:00", close: "23:00" },
    6: { open: "17:00", close: "23:00" },
  } as Record<number, { open: string; close: string } | null>,
};

export const dayNames = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

export const weekOrder = [1, 2, 3, 4, 5, 6, 0];
