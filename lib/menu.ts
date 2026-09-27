// Nessun gusto o prezzo inventato: la fonte riporta queste categorie.
export const menu = [
  { id: "gelato", title: "Gelato", subtitle: "Un cucchiaino di felicità.", desc: "Il gelato di Donna Carmela, nel cuore della Kalsa. Chiedici quali gusti trovi oggi al banco.", color: "bg-salvia", icon: "gelato" },
  { id: "granite", title: "Granite", subtitle: "La Sicilia, cucchiaino dopo cucchiaino.", desc: "Una pausa fresca, da accompagnare con una brioche. Per conoscere i gusti disponibili, chiamaci o passa a trovarci.", color: "bg-tortora", icon: "granita" },
  { id: "brioche", title: "Brioche", subtitle: "La compagna della granita.", desc: "Soffice, da gustare un morso alla volta. Un piccolo rito siciliano da concedersi senza fretta.", color: "bg-bianco-tortora", icon: "brioche" },
  { id: "caffe", title: "Caffè", subtitle: "Ci vediamo al banco.", desc: "Un caffè in Via Paternostro, prima di ripartire tra le strade di Palermo.", color: "bg-tortora", icon: "caffe" },
] as const;
