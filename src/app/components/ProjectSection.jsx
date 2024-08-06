"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'


const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "project description",
        image: "/images/portfoli.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        
    },
    {
        id: 2,
        title: "Krist E-Commerce Website",
        description: "project description",
        image: "/images/ecommerce.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        
    },
    {
        id: 3,
        title: "Bus Tracker",
        description: "project description",
        image: "/images/bus.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Bitcoin Trading Website",
        description: "project description",
        image: "/images/bitcoi.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Store Inventory Website",
        description: "project description",
        image: "/images/inventory.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Weather App",
        description: "project description",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Project Management Website",
        description: "project description",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        
    },
    {
        id: 8,
        title: "Transportation Booking Website",
        description: "project description",
        image: "/images/project.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
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
                    />
                </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection
