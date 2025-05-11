"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Effect to check system preferences and set initial theme
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Check for stored preference or use system preference
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialDarkMode = savedTheme 
        ? savedTheme === 'dark'
        : prefersDark;
      
      setIsDarkMode(initialDarkMode);
      
      // Apply the theme to document
      if (initialDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Apply to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 left-0 right-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800"
    >
      <div className="flex container max-w-7xl h-16 flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={"/"}
          className="text-2xl font-bold dark:text-white text-black"
        >
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            H.I
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            aria-label="Toggle theme"
          >
            {mounted && isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {navbarOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
          
          <div className="hidden md:flex md:items-center space-x-6">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>
        </div>
      </div>
      
      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-gray-100 dark:border-gray-800"
        >
          <div className="flex flex-col space-y-4 p-4 bg-white dark:bg-black">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index} 
                href={link.path} 
                title={link.title} 
                onClick={() => setNavbarOpen(false)}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;