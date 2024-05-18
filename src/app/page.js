import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/> 
        <ProjectSection/> 
        <EmailSection/>
      </div>
      <Footer/>
    </main>   
  )
}
