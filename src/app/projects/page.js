"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectTag from '../components/ProjectTag'
import { motion, useInView } from 'framer-motion'


const projectData = [
    {
        id: 1,
        title: "AppEasy",
        description: "Track Your Job Application and Analze Job Description",
        tools: "Three js, Next js, Tailwind, Typescript, Groq AI, Next API, Firebase",
        image: "/images/appeasy.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1/job-tracker",
        previewUrl: "https://appeasy-alpha.vercel.app",
        
    },
    {
        id: 2,
        title: "Easy Therapy",
        description: "Mental health chatbot website.",
        tools: "Typescript, Tailwind, Groq AI, Firebase, Express, Next.js",
        image: "/images/easy.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1/mental-health",
        previewUrl: "https://easy-therapy.vercel.app",
        
    },
    {
        id: 3,
        title: "Careerly",
        description: "Career Navigator AI, Tailored Job Posting, Learning Resources, and AI Mentorship",
        tools: "Next.js, React, Typescript, Tailwind, Rapid API, Groq AI, Firebase, Express",
        image: "/careerly.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://carerly.vercel.app",
        
    },
    {
        id: 4,
        title: "Krist E-Commerce Website",
        description: "Krist is a shopping E-commerce website.",
        tools: "React js, Tailwind, Next.js",
        image: "/images/ecommerce.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://krist-mu.vercel.app/",
        
    },
    {
        id: 5,
        title: "Life Ledger",
        description: "Life Ledger is your AI-powered decision tracker",
        tools: "React js, Tailwind, Next.js, Typescript, Supabase, PostgreSQL",
        image: "/images/LLEDGER.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1/lledger",
        previewUrl: "https://lledger.vercel.app",
        
    },
    {
        id: 6,
        title: "Pomat Health",
        description: "I collaborated as a frontend developer to build a website for a biolab conducting clinical trials and research aimed at developing solutions to human health challenges.",
        tools: "TypeScript, React, Next, Taiwind",
        image: "/images/pomat.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://www.pomathealth.com/",
    },
    {
        id: 7,
        title: "Weather App",
        description: "This is a Weather Application that allows users to search and view the current weather conditions in their desired cities.",
        tools: "TypeScript, React, Next, Openweather API",
        image: "/images/weatherapp.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://hope-weather-app.vercel.app/",
    },
    {
        id: 8,
        title: "Shuttle Bus Tracker",
        description: "A frontend-only shuttle bus tracker that allows users to locate nearby shuttle buses and provides features for chatting and calling drivers, offering an intuitive user interface for seamless interaction,",
        tools: "React js, Tailwind, Next js",
        image: "/images/bus.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://bus-tracker-tawny.vercel.app/"
        
    },
    {
        id: 9,
        title: "Movies",
        description: "This website is a movie catalog showcasing films with titles, images, descriptions, and genres from a JSON file. Users can browse popular movies.",
        tools: "React js",
        image: "/images/movie.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://movies-ticketing.vercel.app/"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    return (
        <section id="projects" className="py-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
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
                    My portfolio features various projects, with some completed and others in progress. Each one emphasizes my focus on <span className='text-transparent bg-clip-text dynamic-text-gradient'>beautiful UI design</span> and <span className='text-transparent bg-clip-text dynamic-text-gradient'>elegant code</span> for easy maintenance and re-usability.
                </p>
            </motion.div>
            
            <div className='flex flex-wrap justify-center gap-3 mb-12'>
                <ProjectTag 
                    onClick={() => handleTagChange("All")} 
                    name="All" 
                    isSelected={tag === "All"} /> 
                <ProjectTag 
                    onClick={() => handleTagChange("Web")} 
                    name="Web" 
                    isSelected={tag === "Web"} /> 
                <ProjectTag 
                    onClick={() => handleTagChange("Mobile")} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"} /> 
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
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection;
