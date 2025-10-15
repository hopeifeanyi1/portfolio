"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  const socialIconVariants = {
    hover: { 
      scale: 1.1, 
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.3 }
    }
  };

  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-4 lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="order-1 lg:order-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 lg:w-57 lg:h-57 lg:mr-20">
            <div className="absolute inset-0 rounded-full dynamic-blur-gradient blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-white dark:bg-black overflow-hidden border-4 border-gray-100 dark:border-gray-800">
              <Image
                src="/images/IMG.jpeg"
                alt="Ifeanyi Hope"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="mb-3">
            <span className="text-transparent bg-clip-text dynamic-text-gradient text-2xl lg:text-3xl font-extrabold block mb-1">
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Ifeanyi Hope",
                10000,
              ]}
              wrapper="span"
              speed={1}
              className="text-black font-[950] text-3xl lg:text-[40px] dark:text-white leading-tight tracking-wide block [text-shadow:0.3px_0.3px_0_black,_-0.3px_-0.3px_0_black,_0.3px_-0.3px_0_black,_-0.3px_0.3px_0_black] dark:[text-shadow:0.3px_0.3px_0_white,_-0.3px_-0.3px_0_white,_0.3px_-0.3px_0_white,_-0.3px_0.3px_0_white]"
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl mb-4 font-medium">
            Software Engineer
          </p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 mb-4 justify-center lg:justify-start"
          >
            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link 
                href="https://github.com/hopeifeanyi1" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 dynamic-rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dynamic-hover-gradient hover:border-transparent hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaGithub size={18} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link 
                href="https://www.linkedin.com/in/hope-ifeanyi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 dynamic-rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dynamic-hover-gradient hover:border-transparent hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaLinkedin size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={handleHireMeClick}
              className="px-6 py-2.5 dynamic-rounded dynamic-gradient text-white font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </button>

            <Link
              href="/hope.pdf"
              download="Hope_CV.pdf"
              className="px-6 py-2.5 dynamic-rounded border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              Download CV <ArrowDown size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;