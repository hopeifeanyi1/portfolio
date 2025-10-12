import React from 'react'
import { motion } from "framer-motion";

const TabButton = ({active, selectTab, children}) => {
  return (
    <button 
      onClick={selectTab}
      className={`relative lg:px-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
        ${active 
          ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-800' 
          : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
        }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="active-tab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </button>
  )
}

export default TabButton;