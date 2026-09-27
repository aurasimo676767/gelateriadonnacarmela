import Footer from "@/components/Footer";
import Forno from "@/components/Forno";
import Hero from "@/components/Hero";
import Impasti from "@/components/Impasti";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Ordina from "@/components/Ordina";
import Promo from "@/components/Promo";
import Visit from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Impasti />
        <Forno />
        <Promo />
        <Menu />
        <Ordina />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
