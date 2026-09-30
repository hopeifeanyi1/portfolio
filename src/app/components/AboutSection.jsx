// Location: src/app/components/AboutSection.jsx
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const STATS = [
  { value: "4+", label: "Years experience" },
  { value: "1M+", label: "Agents served at MTN" },
  { value: "100+", label: "CareerlyAI users" },
  { value: "₦1M", label: "Innovation grant" },
  { value: "3x", label: "Hackathon & innovation awards" },
];

const TECH_STACK = [
  {
    level: "Core Stack",
    description: "What I build with daily",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    level: "Payments & AI",
    description: "Integrated end-to-end in production",
    skills: [
      "Stripe",
      "Stripe Connect",
      "Paystack (revenue splits)",
      "Subscription billing",
      "POS terminals",
      "OpenAI",
      "Groq",
      "AI agents (WhatsApp)",
      "Multi-model cost optimisation",
    ],
  },
  {
    level: "Extended Stack",
    description: "Shipped in production, reach for when needed",
    skills: [
      "Node.js",
      "React Native",
      "Three.js",
      "Zustand",
      "Supabase",
      "Shadcn",
      "Redux",
      "TypeORM",
      "MySQL",
      "Vite",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    level: "Also worked with",
    description: "Used in real projects, comfortable picking up",
    skills: [
      "Express",
      "Firebase",
      "MongoDB",
      "Docker",
      "Azure",
    ],
  },
];

const levelConfig = {
  "Core Stack": {
    dot: "dynamic-gradient",
    badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  "Payments & AI": {
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  },
  "Extended Stack": {
    dot: "bg-blue-500",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  "Also worked with": {
    dot: "bg-gray-400 dark:bg-gray-500",
    badge: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  },
};

const TAB_DATA = [
  {
    title: "Tech Stack",
    id: "skills",
    content: (
      <div className="space-y-6">
        {TECH_STACK.map((group) => {
          const config = levelConfig[group.level];
          return (
            <div key={group.level}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}
                >
                  {group.level}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {group.description}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center p-3 dynamic-rounded bg-gray-50 dark:bg-gray-800/50"
                  >
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 mr-3 ${config.dot}`}
                    />
                    <span className="text-sm text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        {[
          "BSc, Software Engineering, Babcock University (2025)",
          "Microsoft Learn",
          "Udemy",
          "Code with Mosh",
          "Coursera",
        ].map((edu, index) => (
          <div
            key={index}
            className="flex items-center p-3 dynamic-rounded bg-gray-50 dark:bg-gray-800/50"
          >
            <span className="h-2 w-2 dynamic-rounded dynamic-gradient mr-3"></span>
            <span>{edu}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent className="md:w-auto w-[97vw]" opts={{ align: "start" }}>
            <CarouselItem className="md:basis-1/3">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/3B11AE95D51C7AD?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image src="/ai900.png" alt="Microsoft Certified: Azure AI Fundamentals" className="mx-auto" width={200} height={200} />
                  <p className="text-sm font-medium mt-4">Microsoft Certified: Azure AI Fundamentals</p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              
              <a href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/F96AC56F66AF7953?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image src="/dp900.png" alt="Microsoft Certified: Azure Data Fundamentals" className="mx-auto" width={200} height={200} />
                  <p className="text-sm font-medium mt-4">Microsoft Certified: Azure Data Fundamentals</p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/D93D7739FAD1104?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image src="/az900.png" alt="Microsoft Certified: Azure Fundamentals" className="mx-auto" width={200} height={200} />
                  <p className="text-sm font-medium mt-4">Microsoft Certified: Azure Fundamentals</p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">Cyber Security and Ethical Hacking</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">Full-Stack Web Design and Development</p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">HTML, CSS, Javascript for Web Developers</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-gray-100 dark:bg-gray-800 border-none" />
            <CarouselNext className="static translate-y-0 bg-gray-100 dark:bg-gray-800 border-none" />
          </div>
        </Carousel>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="py-14 max-w-6xl mx-auto px-1">
      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Bio */}
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
            About Me
          </h2>
          <div className="w-16 h-1 dynamic-gradient mx-auto dynamic-rounded mb-8" />
          <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300 text-[16px] leading-relaxed">
            <p>
              I&apos;m a Frontend and Full-Stack Engineer with 4 years of experience in Next.js,
              TypeScript, and NestJS. I{" "}
              <span className="text-black dark:text-white font-medium">lead engineering teams</span>,{" "}
              <span className="text-black dark:text-white font-medium">build payment infrastructure</span>, and{" "}
              <span className="text-black dark:text-white font-medium">ship AI-powered products</span>, working remotely with distributed teams
              across the US and Canada.
            </p>
            <p>
              As{" "}
              <span className="text-black dark:text-white font-medium">Lead Fullstack Developer at Chiwiq</span>, a US-based company, I led a team of
              engineers building CROP, a multi-tenant e-commerce platform with inventory, admin
              tooling, AI-powered insights, and an AI WhatsApp agent. I implemented its payments
              end-to-end: Stripe Connect, Paystack revenue splitting, physical POS terminals, and
              subscription billing. My code-level audit of a client platform showed it was only{" "}
              <span className="text-black dark:text-white font-medium">52% complete</span>, and the sprint plan I wrote from it became the
              team&apos;s delivery roadmap.
            </p>
            <p>
              I&apos;m also the founder of{" "}
              <span className="text-black dark:text-white font-medium">Haco</span>, where I built{" "}
              <a
                href="https://careerlyai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text dynamic-text-gradient font-medium hover:opacity-80 transition-opacity"
              >
                CareerlyAI
              </a>
              , an AI career platform with 100+ users and a Chrome extension that answers job
              application questions using a user&apos;s profile. It won a{" "}
              <span className="text-black dark:text-white font-medium">₦1,000,000 innovation grant</span> and 2nd place at the AI for Social Good
              Hackathon, and I led the team that shipped Careerly for Kids after it.
            </p>
            <p>
              Earlier, at <span className="text-black dark:text-white font-medium">MTN Nigeria</span>, I shipped features on a mission-critical
              platform managing{" "}
              <span className="text-black dark:text-white font-medium">1,000,000+ agents</span>. I build things that ship, work, and scale.
            </p>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10 py-6 border-y border-gray-200 dark:border-gray-700/60"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="text-center last:col-span-2 sm:last:col-span-1">
                <p className="text-2xl font-bold text-transparent bg-clip-text dynamic-text-gradient">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;