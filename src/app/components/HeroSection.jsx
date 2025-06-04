"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDownIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='py-16 lg:py-32'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-7 flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                'Ifeanyi Hope',
                1000,
                'A Fullstack Web Developer',
                1000,
                'An Aspiring Software Engineer',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-black dark:text-white"
              repeat={Infinity}
            /> 
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            I&apos;m a web developer specializing in creating elegant, efficient, and user-centered digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Hire Me
            </Link>
            
            <Link
              href="/hope.pdf"
              download="Hope_CV.pdf"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              Download CV <ArrowDownIcon size={16} />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 place-self-center"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-white dark:bg-black overflow-hidden border-4 border-gray-100 dark:border-gray-800">
              <Image
                src="/images/IMG.JPG"
                alt="Ifeanyi Hope"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;