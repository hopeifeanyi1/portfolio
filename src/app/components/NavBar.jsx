"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiStackPlusFill } from "react-icons/pi";
import StylePanel from "./StylePanel";

const navLinks = [
  {
    title: 'Experience',
    path: '/experience',
    icon: FaPeopleGroup,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: PiStackPlusFill,
  },
]

const NavBar = () => {
  const [mounted, setMounted] = useState(false)
  const [isStylePanelOpen, setIsStylePanelOpen] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOpenPanel = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
    setIsStylePanelOpen(true)
  }

  const isActive = (path) => pathname === path

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 dynamic-rounded bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          {/* Home Button */}
          <Link
            href="/"
            className={`flex items-center justify-center px-4 h-10 dynamic-rounded transition-all hover:bg-gray-100 dark:hover:bg-gray-800 ${
              isActive("/")
                ? "bg-gray-100 dark:bg-gray-800"
                : ""
            }`}
          >
            <GoHome className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </Link>

          {/* Nav Links */}
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`flex items-center gap-2 px-4 h-10 dynamic-rounded text-gray-700 dark:text-gray-200 transition-all whitespace-nowrap font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isActive(link.path)
                  ? "bg-gray-100 dark:bg-gray-800"
                  : ""
              }`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Style Panel Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-6 right-6 z-50 md:top-6 md:right-6 max-md:top-auto max-md:bottom-6"
      >
        <button
          ref={buttonRef}
          onClick={handleOpenPanel}
          className="flex items-center justify-center w-10 h-10 dynamic-rounded dynamic-gradient text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
          aria-label="Open style panel"
        >
          <HiOutlineSparkles className="w-5 h-5 text-white" />
        </button>
      </motion.div>

      {/* Style Panel */}
      {mounted && (
        <StylePanel
          isOpen={isStylePanelOpen}
          onClose={() => setIsStylePanelOpen(false)}
          originPosition={buttonPosition}
        />
      )}
    </>
  )
}

export default NavBar