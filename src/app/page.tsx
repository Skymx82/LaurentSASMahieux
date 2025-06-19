import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Separator from "../components/Separator";
import Realisations from "../components/Realisations";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Separator backgroundColor="#F9F9F9" />
      <Realisations />
      <Contact />
    </div>
  );
}
