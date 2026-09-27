import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import "./globals.css";

const anton = localFont({
  src: "../assets/Anton-Regular.ttf",
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const jost = localFont({
  src: "../assets/Jost-Latin.woff2",
  weight: "100 900",
  variable: "--font-jost",
  display: "swap",
});

const description =
  "Gelato, granite, brioche e caffè alla Kalsa, Palermo. Scopri Antica Gelateria Donna Carmela in Via Alessandro Paternostro 20.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Donna Carmela · Antica Gelateria alla Kalsa, Palermo",
  description,
  openGraph: {
    title: "Donna Carmela · Antica Gelateria",
    description,
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#242b1c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  servesCuisine: ["Gelato", "Siciliana"],
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "01:30",
    },
  ],
  sameAs: [site.social.instagram],
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
