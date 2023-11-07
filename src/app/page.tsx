import HeroSection from "./components/HeroSection"
import AboutSection from  "./components/AboutSection"
import TechnologiesSection from "./components/TechnologiesSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from "./components/FooterSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HeroSection />
      <div className='container mt-10 mx-auto px-12 py-4'>
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer/>
    </main>
  )
}
