"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "CareerlyAI",
    description:
      "AI-powered career platform for students and graduates across Africa. Built the full stack — from AI resume scoring and job matching to Paystack subscription billing.",
    outcome: "₦1M innovation grant • 100+ active users",
    outcomeType: "award",
    tools: "Next.js, NestJS, TypeScript, Groq AI, PostgreSQL, Supabase, Paystack, Three.js",
    image: "/images/careerlyai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://careerlyai.app",
    featured: true,
  },
  {
    id: 2,
    title: "Easy Therapy",
    description:
      "Mental health companion chatbot offering guided conversations and emotional support, available 24/7. Won $100 at the GDGBabcock x Ready Tensor Chatbothon.",
    outcome: "$100 Chatbothon winner • AI-powered",
    outcomeType: "award",
    tools: "Next.js, TypeScript, Groq AI, Firebase, Express, Tailwind CSS",
    image: "/images/easy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1/mental-health",
    previewUrl: "https://easy-therapy.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "AppEasy",
    description:
      "Job application tracker with AI-powered job description analysis. Helps candidates identify skill gaps before they apply.",
    outcome: "AI-assisted • Groq-powered analysis",
    outcomeType: "ai",
    tools: "Next.js, TypeScript, Groq AI, Three.js, Firebase, Tailwind CSS",
    image: "/images/appeasy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1/job-tracker",
    previewUrl: "https://appeasy-alpha.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Renovation Pricing Calculator",
    description:
      "Full stack renovation cost estimator. Upload an Excel sheet or enter rooms and materials manually — the formula engine calculates costs step by step, with every arithmetic trace visible. Exports a PDF report.",
    outcome: "Full stack solo build • NestJS + Next.js",
    outcomeType: "production",
    tools: "Next.js, NestJS, TypeScript, PostgreSQL, Supabase, Puppeteer, TypeORM, shadcn/ui, Zod",
    image: "/images/rpc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://rpc-frontend-pi.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Careerly",
    description:
      "AI career navigator with tailored job postings, curated learning resources, and AI mentorship. Placed 1st runner-up at the AI for Social Good Hackathon.",
    outcome: "1st runner-up • AI for Social Good Hackathon",
    outcomeType: "award",
    tools: "Next.js, React, TypeScript, Tailwind CSS, Rapid API, Groq AI, Firebase, Express",
    image: "/careerly.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://carerly.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "Careerly for Kids",
    description:
      "RIASEC-based career discovery platform helping students identify their strengths and explore career paths. Built the frontend and AI integration as part of the Haco engineering team.",
    outcome: "Frontend & AI • kids.careerlyai.app",
    outcomeType: "ai",
    tools: "Next.js, React, TypeScript, Tailwind CSS, Groq AI, OpenAI",
    image: "/images/careerlyKids.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://kids.careerlyai.app",
    featured: false,
  },
  {
    id: 7,
    title: "Life Ledger",
    description:
      "AI-powered decision tracker that helps users log choices, track outcomes, and learn from their patterns over time.",
    outcome: "Full stack • Supabase + PostgreSQL",
    outcomeType: "production",
    tools: "Next.js, TypeScript, React, Supabase, PostgreSQL, Tailwind CSS",
    image: "/images/LLEDGER.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1/lledger",
    previewUrl: "https://lledger.vercel.app",
    featured: false,
  },
  {
    id: 8,
    title: "Pomat Health",
    description:
      "Contributed frontend development for a biolab running clinical trials across Africa. Built responsive interfaces for trial management and research dashboards.",
    outcome: "Production • Frontend contribution",
    outcomeType: "production",
    tools: "Next.js, TypeScript, React, Tailwind CSS",
    image: "/images/pomat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://www.pomathealth.com/",
    featured: false,
  },
  {
    id: 9,
    title: "Krist E-Commerce",
    description:
      "Full-featured e-commerce storefront with product filtering, cart management, and a clean checkout experience.",
    outcome: "UI-focused • Responsive across devices",
    outcomeType: "ui",
    tools: "Next.js, React, Tailwind CSS",
    image: "/images/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hopeifeanyi1",
    previewUrl: "https://krist-mu.vercel.app/",
    featured: false,
  },
];

const ProjectClient = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      id="projects"
      className="py-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="w-24 h-1.5 dynamic-gradient mx-auto dynamic-rounded mb-8"></div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A selection of projects I have shipped, each built with a focus on{" "}
          <span className="text-transparent bg-clip-text dynamic-text-gradient">
            real impact
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text dynamic-text-gradient">
            production-quality code
          </span>
          .
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tool={project.tools}
              outcome={project.outcome}
              outcomeType={project.outcomeType}
              featured={project.featured}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <a
          href="https://github.com/hopeifeanyi1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 dynamic-rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 text-sm"
        >
          <Github size={15} />
          See more on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectClient;