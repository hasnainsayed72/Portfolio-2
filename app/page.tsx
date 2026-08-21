import DottedSurface from "@/components/DottedSurface";
import LimelightNav from "@/components/LimelightNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsBand from "@/components/StatsBand";
import SelectedImpact from "@/components/SelectedImpact";
import Experience from "@/components/Experience";
import Toolkit from "@/components/Toolkit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DottedSurface />
      <LimelightNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <StatsBand />
        <SelectedImpact />
        <Experience />
        <Toolkit />
        <Footer />
      </main>
    </>
  );
}
