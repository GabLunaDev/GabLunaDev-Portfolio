import Image from 'next/image'
import HeroSection from "./components/HeroSection"
import AboutSection from  "./components/AboutSection"
import TechnologiesSection from "./components/TechnologiesSection"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-10 mx-auto px-12 py-4'>
        <HeroSection /> 
        <AboutSection />
        <TechnologiesSection />
      </div>
    </main>
  )
}
