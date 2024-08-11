"use client"
import React from 'react'
import Image from 'next/image'
import Button from './button'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
    

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left md:justify-self-start"
        >
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-snug font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                     Hello, I&apos;m{" "}
                </span>
                <br/>
                <TypeAnimation
                    sequence={[
                    'Ifeanyi Hope',
                    1000,
                    'A MERN stack Web Developer',
                    1000,
                    'A React-Native Developer',
                    1000,
                    'A Cyber Security Enthusiast',
                    1000,
                    'An Aspiring Software Engineer',
                    1000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                /> 
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">I&apos;m a Mobile and MERN stack web developer</p>
                <div>
                
                <Link
                href="/#contact"
                className="px-6 inline-block py-3 rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                >
                    Hire Me
                </Link>
                <Link
                href="https://docs.google.com/document/d/1LWVJ7ks2IhjsPu_2IzWmtXraDaD2rQPc/edit?usp=drive_link&ouid=108743916711759175387&rtpof=true&sd=true"
                className="px-1 inline-block py-1  rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
                >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Resume
                </span>
                </Link>
                </div>
                
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[480px] lg:h-[480px]  relative">
                <Image
                src="/images/IMG.JPG"
                alt="profile image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={280}
                />
                </div>
                </motion.div>
            
            
        </div>
    </section>
  )
}

export default HeroSection