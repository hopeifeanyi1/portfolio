import { Inter } from 'next/font/google'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white ${inter.className}`}>
      <NavBar/>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <HeroSection />
        <AboutSection/> 
        <ProjectSection/> 
        <EmailSection/>
      </div>
      <Footer/>
    </main>   
  )
}
