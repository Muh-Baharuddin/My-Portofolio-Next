import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Portofolio from "@/components/Portofolio";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  )
}
