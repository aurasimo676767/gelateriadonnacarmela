import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Ordina from "@/components/Ordina";
import Storia from "@/components/Storia";
import Visit from "@/components/Visit";
export default function Home() {
  return <><Nav/><main className="overflow-x-clip"><Hero/><Marquee/><Menu/><Storia/><Ordina/><Visit/></main><Footer/></>;
}
