// Location: src/app/components/HighlightsSection.jsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Layers, Users } from "lucide-react";

// Featured roles for the home page — full history lives on /experience
const FEATURED_ROLES = [
  {
    company: "Chiwiq",
    role: "Lead Fullstack Developer (Contract)",
    meta: "Apr 2026 – Aug 2026 · Remote (US-based)",
    points: [
      "Led a team of engineers building CROP, a multi-tenant e-commerce platform where businesses onboard onto a shared marketplace app, across payments, inventory, admin tooling, AI-powered insights and an AI WhatsApp agent.",
      "Implemented payment infrastructure end-to-end: Stripe Connect, Paystack sub-account revenue splitting, physical POS terminal support and automated subscription billing.",
      "Ran a code-level audit of a client e-commerce platform that showed true completion was 52%; the status report and sprint plan became the team's delivery roadmap.",
    ],
    tags: ["Team Lead", "Stripe Connect", "Paystack", "AI Agents"],
  },
  {
    company: "Haco",
    role: "Founder",
    meta: "Jun 2025 – Present · Nigeria",
    link: { href: "https://careerlyai.app", label: "careerlyai.app" },
    points: [
      "Built and launched CareerlyAI, an AI career platform used by 100+ users: job matching, tailored resumes and cover letters, skill gap analysis, a Chrome extension that answers application questions, and Paystack subscriptions.",
      "Won a ₦1,000,000 innovation grant and 2nd place at the AI for Social Good Hackathon; led a team to ship Careerly for Kids.",
      "Dual AI model strategy (Groq + OpenAI) on Next.js, NestJS and Postgres to keep token costs down.",
    ],
    tags: ["Founder", "Next.js", "NestJS", "OpenAI"],
  },
  {
    company: "Kwurah",
    role: "Frontend Engineer",
    meta: "Oct 2024 – Mar 2026 · Canada (Remote)",
    link: { href: "https://proptility.com", label: "proptility.com" },
    points: [
      "Architected and built the frontend of a property management platform, delivering 6 production modules: dashboard, properties, occupants, financials, insights and communications.",
      "Prefetched and cached property data at login to remove redundant API calls, and added device-fingerprint and location checks for secure login detection.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "MTN Nigeria",
    role: "Software Engineer (Internship)",
    meta: "Jan 2024 – Jul 2024 · Nigeria",
    points: [
      "Maintained and shipped features for the SSP Backoffice, a mission-critical platform managing agent operations and SIM registrations for 1,000,000+ agents.",
      "Built frontends for internal platforms including Bus Tracker.",
    ],
    tags: ["Next.js", "TypeScript", "Shadcn"],
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Full-Stack Product Engineering",
    body: "Next.js, React, React Native, TypeScript and NestJS with PostgreSQL. From architecture to production modules that real users depend on.",
  },
  {
    icon: CreditCard,
    title: "Payments & AI Integration",
    body: "Stripe, Stripe Connect, Paystack revenue splitting, POS terminals and subscription billing, plus AI agents and multi-model cost optimisation.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    body: "Codebase audits, sprint planning, team leadership and product roadmap ownership. I turn unclear projects into realistic delivery plans.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-14 max-w-6xl mx-auto px-1">
      {/* What I bring */}
      <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
          What I Bring
        </h2>
        <div className="w-16 h-1 dynamic-gradient mx-auto dynamic-rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 dynamic-rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200/70 dark:border-gray-700/50"
            >
              <div className="w-9 h-9 dynamic-rounded dynamic-gradient flex items-center justify-center mb-3">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="font-semibold mb-1.5">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Selected experience */}
      <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
          Selected Experience
        </h2>
        <div className="w-16 h-1 dynamic-gradient mx-auto dynamic-rounded mb-8" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {FEATURED_ROLES.map((item, i) => (
          <motion.article
            key={item.company}
            {...fadeUp}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col p-6 dynamic-rounded bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/60 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="text-lg font-bold">{item.company}</h3>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-transparent bg-clip-text dynamic-text-gradient font-medium hover:opacity-80 shrink-0 mt-1"
                >
                  {item.link.label} ↗
                </a>
              )}
            </div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {item.role}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {item.meta}
            </p>
            <ul className="space-y-2 mb-5 flex-1">
              {item.points.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  <span className="h-1.5 w-1.5 rounded-full dynamic-gradient shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 dynamic-rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/experience"
          className="group flex items-center gap-2 px-6 py-2.5 dynamic-rounded border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          See full experience
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default HighlightsSection;