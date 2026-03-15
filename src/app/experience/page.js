//src/app/experience/page.js
"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "HACO",
    location: "Nigeria",
    period: "June 2025 - Present",
    description: "Built and scaled two AI-powered products serving students and graduates across Africa.",
    achievements: [
      "Built and launched CareerlyAI (careerlyai.app), an AI-powered career platform used by 100+ users for smart job matching, tailored resume and cover letter generation, skill gap analysis, and Paystack subscription integration, winning a ₦1,000,000 innovation grant and 2nd place at the AI for Social Good Hackathon.",
      "Led a team of engineers to deliver Careerly for Kids (kids.careerlyai.app), a RIASEC-based career discovery platform for students, owning the product roadmap, task assignment, frontend development, and AI integration",
      " Built across the full stack using Next.js, NestJS, PostgreSQL, Supabase, Tailwind CSS, Groq, OpenAI, RapidAPI, and Paystack,implementing a dual AI model strategy to optimise token costs.",
    ],
    technologies: ["NestJS", "PostgreSQL", "Next.js", "React", "Three.js", "Tailwind CSS", "Groq AI", "OpenAI", "Supabase", "Paystack"]
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Kwurah",
    location: "Canada",
    period: "October 2024 - Present",
    description: "First frontend engineer on a Canada-based property management startup.",
    achievements: [
      "Built the frontend of a property management platform (proptility.com) from scratch using Next.js, TypeScript, React, and Tailwind CSS,delivering 6 core modules, dashboard, properties, occupants financials, insights, and communications",
      " Integrated location and device fingerprint APIs to enable property geolocation and secure new device/new location login detection",
      "Optimised data fetching by prefetching and caching property data at login, eliminating redundant API calls and reducing loading states across the platform."
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Zustand"]
  },
  {
    id: 3,
    role: "Frontend Engineer (Internship)",
    company: "CenosTechnology",
    location: "Nigeria",
    period: "June 2025 - September 2025",
    description: "Led frontend development and engineering team as Acting CTO during internship.",
    achievements: [
      "Built the frontend of Bokimart, a role-based e-commerce platform with dedicated interfaces for shoppers, store keepers, and admins,featuring inventory management, product purchasing, and delivery tracking, using Next.js, React, TypeScript, Tailwind CSS, and Zustand",
      "Led sprint planning and task delegation across the engineering team as Acting CTO, delivering the MVP within the internship timeline.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustand"]
  },
  {
    id: 4,
    role: "Software Engineer (Internship)",
    company: "AppEasy",
    location: "Los Angeles",
    period: "July 2025 - August 2025",
    description: "Worked across backend and frontend for a US-based job application platform.",
    achievements: [
      "Consolidated four backend microservices, Stripe payments, email service, Gemini AI resume analyzer, and job application matching, into a unified Express/Supabase system",
      " Redesigned the landing page with 2D and 3D UI components, built reusable frontend components using React, Vite, and TypeScript",
      "Implemented deployment pipelines with Sentry monitoring"
    ],
    technologies: ["React", "Node.js", "Tailwind", "Supabase", "Express", "Sentry"]
  },
  {
    id: 5,
    role: "Software Engineer (Internship)",
    company: "MTN Nigeria",
    location: "Nigeria",
    period: "January 2024 - July 2024",
    description: "Contributed to mission-critical internal platforms at Nigeria's largest telecom company.",
    achievements: [
      "Maintained and developed new features for the SSP Backoffice, a mission-critical platform managing agent operations and SIM card registrations for 1,000,000+ agents across Nigeria's largest telecom network.",
      " Built the frontend for two internal platforms (Bus Tracker and Avatar Portal) using Next.js, TypeScript, Tailwind CSS, and Shadcn.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    id: 6,
    role: "Frontend Developer",
    company: "BUCC Software Development Team",
    location: "Nigeria",
    period: "June 2022 - July 2025",
    description: "Maintained and built university platforms serving the Babcock student community.",
    achievements: [
      "Maintained and enhanced the SIWES Portal serving 1,000+ active students per cycle, using React, JavaScript, Tailwind CSS, and Redux",
      "Built the frontend of the BUCC Single Sign-On platform using Next.js, React, TypeScript, Tailwind CSS, and Zustand, streamlining authentication and user access.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  }
]

const awards = [
  
  "1st Place, Babcock Innovation Challenge 2025 (Team earned ₦1,000,000 business grant)",
  "2nd Place, AI FOR SOCIAL Good - BUCC Hackathon Competition, 2025 (Team earned $350)",
  "Winner, GDGBabcock x Ready Tensor's Chatbothon, 2025 (Received $100 prize)"
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h2 className="text-3xl font-bold mb-6">My Work Experience</h2>
        <div className="w-24 h-1.5 dynamic-gradient mx-auto dynamic-rounded mb-8" />
      </motion.div>

      <div ref={ref} className="max-w-4xl mx-auto space-y-4">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0"
          >
            <div className="mb-3">
              <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {experience.company} • {experience.location} • {experience.period}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {experience.description}
            </p>

            <ul className="space-y-1 mb-4">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 text-sm pl-4">
                  • {achievement}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 dynamic-rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
        <ul className="space-y-2">
          {awards.map((award, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 pl-4">
              • {award}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Experience;