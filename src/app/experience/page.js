//src/app/experience/page.js
"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "Careerly AI",
    location: "Nigeria",
    period: "June 2025 - Present",
    description: "Co-founded Careerly AI: résumé builder, AI mentorship chatbot, and job recommendation engine.",
    achievements: [
      "Built backend with NestJS, PostgreSQL, and Supabase",
      "Integrated RapidAPI for real-time job listings across multiple platforms",
      "Implemented AI personalization with Groq Cloud and OpenAI",
      "Developed frontend with Next.js, React, and Tailwind CSS",
      "Secured ₦1,000,000 innovation grant"
    ],
    technologies: ["NestJS", "PostgreSQL", "Next.js", "React", "Tailwind CSS", "Groq AI", "OpenAI"]
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Kwurah",
    location: "Canada",
    period: "October 2024 - September 2025",
    description: "Built scalable property management platform.",
    achievements: [
      "Developed platform using Next.js, TypeScript, React, and Tailwind CSS",
      "Integrated multiple APIs to expand functionality",
      "Optimized performance, reducing load times by 30%"
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "Frontend Engineer (Internship)",
    company: "CenosTechnology",
    location: "Nigeria",
    period: "June 2025 - September 2025",
    description: "Led e-commerce MVP development as Acting CTO.",
    achievements: [
      "Led cross-functional team and sprint planning",
      "Delivered MVP within tight deadlines",
      "Improved UX through iterative enhancements"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: 4,
    role: "Software Engineer (Internship)",
    company: "AppEasy",
    location: "Los Angeles",
    period: "July 2025 - August 2025",
    description: "Consolidated microservices and built fullstack features.",
    achievements: [
      "Unified four backend microservices (Stripe, email, résumé tools)",
      "Optimized features using Next.js, React, Node.js, and MongoDB",
      "Implemented deployment pipelines with Sentry monitoring"
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Sentry"]
  },
  {
    id: 5,
    role: "Software Engineer (Internship)",
    company: "MTN Nigeria",
    location: "Nigeria",
    period: "January 2024 - July 2024",
    description: "Maintained SSP Backoffice and led frontend projects.",
    achievements: [
      "Updated SSP Backoffice for SIM registrations",
      "Led Bus Tracker Project frontend development",
      "Built Avatar Portal website frontend"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 6,
    role: "Frontend Developer",
    company: "BUCC Software Development Team",
    location: "Nigeria",
    period: "June 2022 - July 2025",
    description: "Maintained university portals and built authentication platform.",
    achievements: [
      "Maintained SIWES Portal with React and Redux",
      "Developed Single Sign-On platform with Next.js and TypeScript",
      "Collaborated with teams to enhance functionality"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustard"]
  }
]

const awards = [
  "Winner, GDGBabcock x Ready Tensor's Chatbothon, 2025 (Received $100 prize)",
  "2nd Place, AI FOR SOCIAL Good - BUCC Hackathon Competition, 2025 (Team earned $350)",
  "1st Place, Babcock Innovation Challenge 2025 (Team earned ₦1,000,000 business grant)"
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