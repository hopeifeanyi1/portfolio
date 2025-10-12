"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GoHome } from "react-icons/go";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiStackPlusFill } from "react-icons/pi";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Experience",
    path: "/experience",
    icon: FaPeopleGroup,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: PiStackPlusFill,
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

      setIsDarkMode(initialDarkMode);

      if (initialDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowThemeDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setTheme = (theme) => {
    const newDarkMode = theme === "dark";
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", theme);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setShowThemeDropdown(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          {/* Home Button */}
          <Link
            href="/"
            className={`flex items-center justify-center px-4 h-10 rounded-full transition-all ${
              isActive("/")
                ? "bg-gray-100 dark:bg-gray-800"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <GoHome className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </Link>

          {/* Nav Links */}
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`flex items-center gap-2 px-4 h-10 rounded-full text-gray-700 dark:text-gray-200 transition-all whitespace-nowrap font-medium text-sm ${
                isActive(link.path)
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Theme Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-6 right-6 z-50 md:top-6 md:right-6 max-md:top-auto max-md:bottom-6"
        ref={dropdownRef}
      >
        <button
          onClick={() => setShowThemeDropdown(!showThemeDropdown)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all shadow-lg"
          aria-label="Toggle theme"
        >
          <HiOutlineSparkles className="w-5 h-5 text-white" />
        </button>

        <AnimatePresence>
          {showThemeDropdown && mounted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-14 right-0 w-40 rounded-xl bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden max-md:bottom-14 max-md:top-auto"
            >
              <button
                onClick={() => setTheme("light")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  !isDarkMode
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span className="text-lg">☀️</span>
                <span>Light Mode</span>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span className="text-lg">🌙</span>
                <span>Dark Mode</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default NavBar;