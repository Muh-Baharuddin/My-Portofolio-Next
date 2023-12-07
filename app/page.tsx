import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Portofolio from "@/components/Portofolio";
import Skill from "@/components/Skill";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Skill />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  )
}
