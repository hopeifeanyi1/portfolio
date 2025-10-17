//src/app/components/ProjectCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tool}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="overflow-hidden dynamic-rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className='aspect-video relative overflow-hidden'>
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
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
