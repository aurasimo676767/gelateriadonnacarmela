import type { Metadata, Viewport } from "next";
import { Anton, Jost } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Pizzeria d'asporto e domicilio a Enna. Forno a legna, lunga lievitazione, impasto classico, integrale o senza glutine e mozzarella senza lattosio. Aperti dalle 17 alle 23, martedì chiuso.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Pepe Nero · Pizzeria d'asporto e domicilio a Enna",
  description,
  openGraph: {
    title: "Pepe Nero · Pizzeria a Enna",
    description,
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  legalName: site.legalName,
  vatID: `IT${site.vat}`,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  servesCuisine: ["Pizza", "Italiana"],
  telephone: site.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.cap,
    addressCountry: "IT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${anton.variable} ${jost.variable} antialiased`}>
      <body className="grain min-h-dvh overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
