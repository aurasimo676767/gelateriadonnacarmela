export type MenuItem = {
  name: string;
  desc?: string;
  price: number;
  maxi?: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  hasMaxi: boolean;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "rosse",
    title: "Pizze rosse",
    hasMaxi: true,
    items: [
      { name: "Faccia di vecchia", desc: "Olio, origano e sale", price: 3.5, maxi: 8 },
      { name: "Pizzaiola", desc: "Pomodoro, olio e origano", price: 4.5, maxi: 10 },
      { name: "Margherita", desc: "Pomodoro, mozzarella, olio e origano", price: 6, maxi: 13 },
      { name: "Contadina", desc: "Pomodoro, mozzarella, cipolletta, olio e origano", price: 6.5, maxi: 14 },
      { name: "Norma", desc: "Pomodoro, melanzane fritte, ricotta salata, olio e basilico", price: 8, maxi: 17 },
      { name: "Bruschetta", desc: "Pomodoro datterino, ricotta salata, olio e origano", price: 6.5, maxi: 13 },
      { name: "Romana", desc: "Pomodoro, mozzarella, acciughe, olio e origano", price: 7, maxi: 15 },
      { name: "Americana", desc: "Pomodoro, mozzarella, salame piccante, wurstel, peperoni, olio e origano", price: 8, maxi: 17 },
      { name: "Patatina", desc: "Pomodoro, mozzarella, wurstel e patatine", price: 8, maxi: 17 },
      { name: "Pesto", desc: "Pomodoro, mozzarella, pesto di basilico, melanzane, peperoni, cipolletta", price: 8, maxi: 17 },
      { name: "Napoletana", desc: "Pomodoro, mozzarella di bufala, olio e basilico", price: 8, maxi: 17 },
      { name: "San Daniele", desc: "Pomodoro, mozzarella, funghi freschi, prosciutto crudo e olio", price: 8.5, maxi: 18 },
      { name: "Quattro stagioni", desc: "Pomodoro, mozzarella, funghi freschi, piselli, spinaci, prosciutto cotto, olio e origano", price: 8.5, maxi: 18 },
      { name: "Messicana", desc: "Pomodoro, mozzarella, salame piccante, olive, cipolletta, olio e origano", price: 8.5, maxi: 18 },
      { name: "Parmigiana", desc: "Pomodoro, mozzarella, prosciutto cotto, uovo, melanzane fritte, scaglie di grana e olio", price: 8.5, maxi: 17 },
      { name: "Fattoressa", desc: "Pomodoro, mozzarella, prosciutto cotto, acciughe, piselli, olive, olio e origano", price: 8.5, maxi: 17 },
      { name: "Capricciosa", desc: "Pomodoro, mozzarella, prosciutto cotto, uovo, funghi freschi, olio e origano", price: 8.5, maxi: 17 },
      { name: "Tonnata", desc: "Pomodoro, mozzarella, tonno, cipolletta, olive, olio e origano", price: 8.5, maxi: 18 },
      { name: "Sicula", desc: "Pomodoro, mozzarella, patate al forno, spinaci, scaglie di grana, olio e origano", price: 8.5, maxi: 17 },
      { name: "Porcina", desc: "Pomodoro, mozzarella, funghi porcini, scaglie di grana e olio", price: 8.5, maxi: 17 },
      { name: "Deliziosa", desc: "Pomodoro, mozzarella, pesto di basilico, melanzane fritte, patate al forno e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Catanese", desc: "Pomodoro, mozzarella, salsiccia, cipolletta, olive, scaglie di grana, olio e origano", price: 8.5, maxi: 18 },
      { name: "Boscaiola", desc: "Pomodoro, mozzarella, salsiccia, funghi porcini, cipolletta", price: 8.5, maxi: 18 },
      { name: "Nduja spilinga", desc: "Pomodoro, mozzarella, nduja, peperoni, cipolletta e olio", price: 8.5, maxi: 18 },
      { name: "Pizza del Re", desc: "Poco pomodoro, mozzarella, patate al forno, pomodoro datterino, cipolletta, scaglie di grana, olive e salsiccia", price: 10, maxi: 21 },
    ],
  },
  {
    id: "bianche",
    title: "Pizze bianche",
    hasMaxi: true,
    items: [
      { name: "Biancaneve", desc: "Mozzarella, olio e origano", price: 5, maxi: 11 },
      { name: "Genovese", desc: "Mozzarella, pesto di basilico, panna, scaglie di grana", price: 8, maxi: 17 },
      { name: "Carbonara", desc: "Mozzarella, pancetta, uovo, grana e pepe nero", price: 8.5, maxi: 18 },
      { name: "Gracy", desc: "Mozzarella, pepato fresco, pomodori secchi, olive, cipolletta e olio", price: 8.5, maxi: 18 },
      { name: "Moulin Rouge", desc: "Mozzarella, provola affumicata, mortadella, granella di pistacchio e olio", price: 8.5, maxi: 18 },
      { name: "Elite", desc: "Mozzarella, gorgonzola, radicchio, noci e miele", price: 8.5, maxi: 18 },
      { name: "4 Formaggi", desc: "Mozzarella, emmenthal, gorgonzola, scaglie di grana e olio", price: 8.5, maxi: 18 },
      { name: "Pingui", desc: "Mozzarella, pesto di basilico, pomodoro datterino, melanzane, ricotta salata e basilico", price: 8.5, maxi: 18 },
      { name: "Mario", desc: "Mozzarella, provola affumicata, patate al forno, pancetta, cipolletta e olio", price: 8.5, maxi: 18 },
      { name: "Mitica", desc: "Mozzarella, patate al forno, speck, rucola e olio", price: 8.5, maxi: 18 },
      { name: "Friarelli", desc: "Mozzarella, pepato fresco, salsiccia e friarelli", price: 8.5, maxi: 18 },
      { name: "Zuccosa", desc: "Mozzarella, crema di zucca, provola, cipolletta, grana, speck e olio", price: 9, maxi: 20 },
      { name: "Grigliata", desc: "Mozzarella, pomodoro datterino, melanzane, peperoni, zucchine, radicchio, olio e origano", price: 9, maxi: 20 },
      { name: "Pizza Kebab", desc: "Mozzarella, kebab, patatine, salsa yogurt e olio", price: 9, maxi: 20 },
      { name: "Vegetariana", desc: "Mozzarella, gorgonzola, melanzane, spinaci, funghi, radicchio e cipolletta", price: 9, maxi: 20 },
      { name: "Gustosa", desc: "Mozzarella di bufala, pomodoro datterino, speck, radicchio e scaglie di grana", price: 9, maxi: 20 },
      { name: "Bufalina", desc: "Mozzarella di bufala, pomodoro datterino, gorgonzola, speck, rucola e olio", price: 9, maxi: 20 },
      { name: "Super Pizza", desc: "Mozzarella, provola affumicata, salsiccia, patate al forno, olive e cipolletta", price: 9, maxi: 20 },
      { name: "Philadelphia", desc: "Mozzarella, philadelphia, pomodoro datterino, prosciutto crudo, rucola e olio", price: 9, maxi: 20 },
      { name: "Zucchine e speck", desc: "Mozzarella, pomodoro datterino, zucchine fritte, speck, grana e olio", price: 9, maxi: 20 },
      { name: "Zuccosa DOC", desc: "Mozzarella, provola, zucca, funghi porcini, salsiccia, cipolletta e olio", price: 10, maxi: 21 },
      { name: "Balù", desc: "Mozzarella, pesto di pistacchio, funghi porcini, salsiccia, scaglie di grana e granella di pistacchio", price: 10, maxi: 21 },
      { name: "Parmigiana DOC", desc: "Mozzarella, pesto di pistacchio, prosciutto cotto, uovo, melanzane, scaglie di grana e granella di pistacchio", price: 10, maxi: 21 },
      { name: "Pistacchio", desc: "Mozzarella, pesto di pistacchio, speck, scaglie di grana e granella di pistacchio", price: 10, maxi: 21 },
      { name: "Salmone", desc: "Mozzarella, panna, salmone, radicchio, cipolletta e grana", price: 10, maxi: 21 },
      { name: "Sophia", desc: "Mozzarella di bufala, datterino, porcini, speck e rucola", price: 10, maxi: 21 },
      { name: "Giulio", desc: "Mozzarella di bufala, pomodoro datterino, prosciutto crudo, rucola e scaglie di grana", price: 10, maxi: 21 },
      { name: "Bresaola", desc: "Mozzarella di bufala, datterino, rucola, bresaola e scaglie di grana", price: 10, maxi: 21 },
    ],
  },
  {
    id: "gialle",
    title: "Pizze gialle",
    note: "Base di vellutata di datterino giallo.",
    hasMaxi: true,
    items: [
      { name: "Margherita 2.0", desc: "Vellutata di datterino giallo, mozzarella, olio e scaglie di grana", price: 8, maxi: 17 },
      { name: "Invernale", desc: "Vellutata di datterino giallo, mozzarella, melanzane, salsiccia, rucola e scaglie di grana", price: 10, maxi: 21 },
      { name: "Delizia", desc: "Vellutata di datterino giallo, mozzarella, gorgonzola, prosciutto crudo, cipolletta e noci", price: 11, maxi: 23 },
      { name: "Norvegese", desc: "Vellutata di datterino giallo, mozzarella, salmone affumicato, cipolletta, rucola e petali di mandorla", price: 13, maxi: 27 },
      { name: "Prestige", desc: "Vellutata di datterino giallo, mozzarella, gorgonzola, funghi, salsiccia, rucola, scaglie di grana, olio e origano", price: 13, maxi: 27 },
    ],
  },
  {
    id: "gourmet",
    title: "Pizze gourmet",
    hasMaxi: false,
    items: [
      { name: "Tradizione", desc: "Sugo di basilico, mozzarella, melanzane, stracciatella di bufala a crudo, ricotta salata, olio e origano", price: 12 },
      { name: "Condivisione", desc: "Crema di pistacchio, mozzarella, mortadella, stracciatella di bufala a crudo, rucola, granella di pistacchio e grana", price: 12 },
      { name: "Emozione", desc: "Mozzarella, salmone, Philadelphia, lime, rucola, pepe rosa, scaglie di grana e origano", price: 12 },
      { name: "Provocazione", desc: "Mozzarella, cipolletta, noci, crudo, miele e grana", price: 12 },
      { name: "Selfie", desc: "Mozzarella, salmone, pesto di pistacchio, rucola, grana, granella di pistacchio, limone grattugiato e olio", price: 12 },
      { name: "Burratina", desc: "Mozzarella, cipolletta, crudo, pesto di pistacchio, burratina e grana", price: 12 },
      { name: "Burrata e mortadella", desc: "Mozzarella, pesto di pistacchio, mortadella, burratina, limone grattugiato e olio", price: 12 },
      { name: "Tartufo e funghi", desc: "Mozzarella, funghi porcini, salsiccia, olio al tartufo e basilico", price: 12 },
      { name: "Pizza e pizzoli", desc: "Crema di zucca, mozzarella, salmone, panna, rucola, stracciatella di bufala, scaglie di grana e olio", price: 12 },
    ],
  },
  {
    id: "pizzoli",
    title: "Pizzoli",
    hasMaxi: true,
    items: [
      { name: "Cotto", desc: "Mozzarella e cotto", price: 7, maxi: 15 },
      { name: "Piccantino", desc: "Emmental e salame piccante", price: 7, maxi: 14 },
      { name: "Caprese", desc: "Mozzarella e condimento di bruschetta", price: 7, maxi: 14 },
      { name: "Provoletto", desc: "Provola e mortadella", price: 7, maxi: 14 },
      { name: "Grigliato", desc: "Mozzarella, pomodoro datterino, radicchio, melanzane e zucchine", price: 8.5, maxi: 17 },
      { name: "Crudo", desc: "Mozzarella, funghi freschi, rucola e prosciutto crudo", price: 8.5, maxi: 17 },
      { name: "Ricotta e spinaci", desc: "Mozzarella, ricotta fresca, spinaci e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Zucca", desc: "Provola affumicata, crema di zucca, speck e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Tonno", desc: "Mozzarella, tonno, cipolla e olive", price: 8.5, maxi: 17 },
      { name: "Siciliano", desc: "Pepato fresco, cavolfiore, cipolletta e olive nere", price: 8.5, maxi: 17 },
      { name: "Trinacria", desc: "Pepato fresco, broccoli, salsiccia e cipolletta", price: 8.5, maxi: 17 },
      { name: "Calabrese", desc: "Pepato fresco, nduja, peperoni e cipolletta", price: 8.5, maxi: 17 },
      { name: "Tirolese", desc: "Mozzarella, datterino, gorgonzola, speck, rucola", price: 8.5, maxi: 17 },
      { name: "Bresaola", desc: "Mozzarella, datterino, bresaola, rucola e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Etna", desc: "Mozzarella, funghi porcini, salsiccia e friarelli", price: 8.5, maxi: 17 },
      { name: "Parmigiana", desc: "Mozzarella, datterino, melanzane fritte, prosciutto cotto, uovo e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Pistacchio", desc: "Mozzarella, pesto di pistacchio, mortadella e granella di pistacchio", price: 8.5, maxi: 17 },
      { name: "Salmone", desc: "Mozzarella, salmone, rucola e scaglie di grana", price: 8.5, maxi: 17 },
      { name: "Philadelphia", desc: "Philadelphia, datterino, crudo e rucola", price: 8.5, maxi: 17 },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni",
    hasMaxi: false,
    items: [
      { name: "Classico", desc: "Pomodoro, mozzarella, prosciutto cotto", price: 7 },
      { name: "Verde", desc: "Mozzarella, spinaci, olive", price: 7 },
      { name: "Siciliano", desc: "Mozzarella, pepato fresco, cipolletta, acciughe e olive", price: 7 },
      { name: "Pistacchio", desc: "Crema di pistacchio, mozzarella, prosciutto cotto e granella di pistacchio", price: 7 },
    ],
  },
  {
    id: "dolci",
    title: "Pizze dolci",
    hasMaxi: true,
    items: [
      { name: "Nutella", price: 8, maxi: 17 },
      { name: "Cioccolato bianco e caramello", price: 8, maxi: 17 },
      { name: "Pistacchio", price: 8, maxi: 17 },
      { name: "Ricotta e miele", price: 8, maxi: 17 },
      { name: "Nutella e ricotta", price: 8, maxi: 17 },
    ],
  },
  {
    id: "stuzzichini",
    title: "Stuzzichini",
    hasMaxi: false,
    items: [
      { name: "Patatine piccole", price: 2 },
      { name: "Patatine medie", price: 3 },
      { name: "Patatine grandi", price: 4 },
    ],
  },
  {
    id: "bibite",
    title: "Bibite",
    hasMaxi: false,
    items: [
      { name: "Acqua piccola", price: 1.5 },
      { name: "Acqua grande", price: 2.5 },
      { name: "Bibite in lattina", price: 2.5 },
      { name: "Bibite in bottiglia", price: 4 },
      { name: "Birra 33 cl", price: 2.5 },
      { name: "Birra 66 cl", price: 4 },
    ],
  },
];

export const supplementi: { name: string; price: string }[] = [
  { name: "Bustine ketchup e maionese", price: "0,25" },
  { name: "Verdure", price: "1,00" },
  { name: "Pesto e granella di pistacchio", price: "1,50" },
  { name: "Salumi", price: "2,00 / 3,00" },
  { name: "Tutti gli altri supplementi", price: "1,50" },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
