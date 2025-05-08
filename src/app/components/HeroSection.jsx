"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block">Hello, I&apos;m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                <TypeAnimation
                  sequence={[
                    'Ifeanyi Hope',
                    1000,
                    'A MERN Stack Dev',
                    1000,
                    'A React Native Dev',
                    1000,
                    'A Security Expert',
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
          >
            I&apos;m Ifeanyi Hope, a web and mobile developer specializing in the MERN stack, creating elegant solutions with modern technologies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#contact" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <span className="relative inline-flex overflow-hidden rounded-full p-0.5 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-300">
                  <span className="px-6 py-3 rounded-full bg-white dark:bg-black relative group-hover:bg-transparent transition-all duration-300 ease-out">
                    <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
                      Hire Me
                    </span>
                  </span>
                </span>
              </motion.div>
            </Link>
            
            <a href="/hope.pdf" download="Hope_CV.pdf" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <span className="relative inline-flex overflow-hidden rounded-full p-0.5 border border-gray-900 dark:border-white">
                  <span className="px-6 py-3 rounded-full relative">
                    <span className="relative text-black dark:text-white flex items-center">
                      <span>Download CV</span>
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </span>
                </span>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(0,0,0,0)", 
                  "0 0 0 20px rgba(0,0,0,0.1)", 
                  "0 0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900"
            />
            <motion.div 
              className="absolute inset-0 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/IMG.JPG"
                alt="Ifeanyi Hope"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection