import { Inter } from 'next/font/google'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``}>
      <div className="container max-w-7xl mx-auto px-5 lg:px-8 pt-24">
        <HeroSection />
        <AboutSection/> 
        <EmailSection/>
      </div>
      <Footer/>
    </main>   
  )
}
