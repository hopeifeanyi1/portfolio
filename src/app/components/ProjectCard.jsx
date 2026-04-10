import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, ExternalLinkIcon, Award, Users, Zap, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const outcomeStyles = {
  award: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  production: "bg-green-500/10 text-green-400 border border-green-500/20",
  ai: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
  ui: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
}

const outcomeIcons = {
  award: <Award size={11} />,
  production: <Users size={11} />,
  ai: <Zap size={11} />,
  ui: <LinkIcon size={11} />,
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tool, outcome, outcomeType, featured }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`overflow-hidden dynamic-rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ${
        featured ? 'dynamic-border-ring' : ''
      }`}
    >
      <div className='aspect-video relative overflow-hidden'>
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 left-3 z-10 text-[10px] font-medium px-2 py-0.5 dynamic-rounded dynamic-gradient text-white">
            Featured
          </div>
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4'>
          <div className="flex gap-2">
            <Link 
              href={gitUrl} 
              className="p-2 bg-white/20 backdrop-blur-sm dynamic-rounded hover:bg-white/30 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={20} className="text-white" />
            </Link>
            <Link 
              href={previewUrl} 
              className="p-2 bg-white/20 backdrop-blur-sm dynamic-rounded hover:bg-white/30 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        {outcome && (
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full mb-3 ${outcomeStyles[outcomeType]}`}>
            {outcomeIcons[outcomeType]}
            {outcome}
          </div>
        )}
        <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tool.split(', ').map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 dynamic-rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;