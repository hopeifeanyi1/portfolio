// src/app/page.js
import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ifeanyi Hope",
  url: "https://hopeifeanyi.vercel.app",
  image: "https://hopeifeanyi.vercel.app/images/IMG.jpeg",
  sameAs: [
    "https://github.com/hopeifeanyi1",
    "https://www.linkedin.com/in/hope-ifeanyi",
  ],
  jobTitle: "Frontend & Full-Stack Engineer",
  description:
    "Frontend & Full-Stack Engineer with 4 years of experience specialising in React, Next.js, TypeScript, and NestJS.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Three.js",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Babcock University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className="container max-w-7xl mx-auto px-5 lg:px-8 pt-24">
          <HeroSection />
          <AboutSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}