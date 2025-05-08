import React from 'react'
import { motion } from 'framer-motion'

const ProjectTag = ({name, onClick, isSelected}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${isSelected 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
        }`}
    >
      {name}
    </motion.button>
  )
}

export default ProjectTag;