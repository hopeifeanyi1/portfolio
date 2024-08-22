"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'


const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My portfolio website.",
        tools: "React js",
        image: "/images/portfoli.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
        
    },
    {
        id: 2,
        title: "Krist E-Commerce Website",
        description: "Krist is a shopping E-commerce website.",
        tools: "React js, Tailwind, Next.js",
        image: "/images/ecommerce.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://krist-mu.vercel.app/",
        
    },
    {
        id: 3,
        title: "Movies",
        description: "This website is a movie catalog showcasing films with titles, images, descriptions, and genres from a JSON file. Users can browse popular movies.",
        tools: "React js",
        image: "/images/movie.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://movies-ten-alpha.vercel.app/"
    },
    {
        id: 4,
        title: "Shuttle Bus Tracker",
        description: "A frontend-only shuttle bus tracker that allows users to locate nearby shuttle buses and provides features for chatting and calling drivers, offering an intuitive user interface for seamless interaction,",
        tools: "React js, Tailwind, Next",
        image: "/images/bus.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "https://bus-tracker-tawny.vercel.app/"
    },
    {
        id: 5,
        title: "Task Management Website",
        description: "A website that helps users organize and track their tasks. It features tools for creating and setting deadlines for tasks, offering an interface for better productivity and time management.",
        tools: "React js",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
        
    },
    {
        id: 6,
        title: "Bitcoin Trading Website",
        description: "A frontend-only website for trading bitcion",
        tools: "React js",
        image: "/images/bitcoi.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Store Inventory Website",
        description: "a frontend-only inventory management website for a store. It allows users to view and interact with an intuitive interface designed to manage product inventory.",
        tools: "React js",
        image: "/images/inventory.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Weather App",
        description: "A weather website that displays the current weather conditions for any city worldwide. Users can search for a city and get real-time updates",
        tools: "React js",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
    },
    {
        id: 9,
        title: "Transportation Booking Website",
        description: "A frontend-only website that allows users to book and get tickets",
        tools: "React js",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hopeifeanyi1",
        previewUrl: "/",
        
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true})

    const handleTabChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <p className='text-slate-300 text-[11-px] text-center mt-4'>My portfolio features various projects, with some completed and others in progress. Each one emphasizes my focus on <span className='font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400'>beautiful UI design</span> and <span className='font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400'>elegant code</span> for easy maitenance and reusability.</p>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={() => handleTabChange("All")} 
                    name="All" 
                    isSelected={tag === "All"} /> 
                <ProjectTag 
                    onClick={() => handleTabChange("Web")} 
                    name="Web" 
                    isSelected={tag === "Web"} /> 
                <ProjectTag 
                    onClick={() => handleTabChange("Mobile")} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"} /> 
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    tool={project.tools}
                    />
                </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection
