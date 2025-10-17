//src/app/components/StylePanel.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const StylePanel = ({ isOpen, onClose, originPosition }) => {
  const [mounted, setMounted] = useState(false);

  // Style states
  const [theme, setTheme] = useState("dark");
  const [shape, setShape] = useState("conservative");
  const [brandColor, setBrandColor] = useState("purple");
  const [accentColor, setAccentColor] = useState("pink");
  const [neutralColor, setNeutralColor] = useState("gray");
  const [solidStyle, setSolidStyle] = useState("color");
  const [effect, setEffect] = useState("flat");
  const [surface, setSurface] = useState("translucent");
  const [scaling, setScaling] = useState("100");
  const [transition, setTransition] = useState("all");

  const shapes = [
    { value: "conservative", label: "Conservative", radius: "rounded-md" },
    { value: "rounded", label: "Rounded", radius: "rounded-xl" },
    { value: "playful", label: "Playful", radius: "rounded-full" },
  ];

  const colors = {
    brand: [
      { name: "cyan", bg: "bg-cyan-500" },
      { name: "blue", bg: "bg-blue-500" },
      { name: "indigo", bg: "bg-indigo-500" },
      { name: "violet", bg: "bg-violet-500" },
      { name: "purple", bg: "bg-purple-500" },
      { name: "magenta", bg: "bg-fuchsia-500" },
      { name: "pink", bg: "bg-pink-500" },
      { name: "red", bg: "bg-red-500" },
      { name: "orange", bg: "bg-orange-500" },
      { name: "yellow", bg: "bg-yellow-500" },
      { name: "green", bg: "bg-green-500" },
      { name: "emerald", bg: "bg-emerald-500" },
    ],
    neutral: [
      { name: "neutral-1", bg: "bg-[#26262f]" },
      { name: "neutral-2", bg: "bg-[#1b2b20]" },
      { name: "neutral-3", bg: "bg-black" },
    ],
  };

  useEffect(() => {
    setMounted(true);

    // Load saved preferences with purple/pink defaults
    const saved = {
      theme: "dark",
      shape: "conservative",
      brandColor: "purple",
      accentColor: "pink",
      neutralColor: "gray",
      solidStyle: "color",
      effect: "flat",
      surface: "translucent",
      scaling: "100",
      transition: "all",
    };

    setTheme(saved.theme);
    setShape(saved.shape);
    setBrandColor(saved.brandColor);
    setAccentColor(saved.accentColor);
    setNeutralColor(saved.neutralColor);
    setSolidStyle(saved.solidStyle);
    setEffect(saved.effect);
    setSurface(saved.surface);
    setScaling(saved.scaling);
    setTransition(saved.transition);

    applyStyles(saved);
  }, []);

  const applyStyles = (styles) => {
    const root = document.documentElement;

    // Apply theme
    if (styles.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply custom properties
    root.style.setProperty("--design-shape", styles.shape);
    root.style.setProperty("--design-brand", styles.brandColor);
    root.style.setProperty("--design-accent", styles.accentColor);
    root.style.setProperty("--design-neutral", styles.neutralColor);
    root.style.setProperty("--design-solid", styles.solidStyle);
    root.style.setProperty("--design-effect", styles.effect);
    root.style.setProperty("--design-surface", styles.surface);
    root.style.setProperty(
      "--design-scaling",
      `${parseInt(styles.scaling) / 100}`
    );
    root.style.setProperty("--design-transition", styles.transition);

    // Apply border radius mapping
    const radiusMap = {
      conservative: "rounded-md",
      rounded: "rounded-xl",
      playful: "rounded-full",
    };

    const selectedRadius = radiusMap[styles.shape];

    // Set CSS custom property for border radius
    root.style.setProperty("--dynamic-radius", selectedRadius);

    // Add data attributes to body for CSS targeting
    document.body.setAttribute("data-shape", styles.shape);
    document.body.setAttribute("data-brand", styles.brandColor);
    document.body.setAttribute("data-accent", styles.accentColor);
  };

  const handleStyleChange = (key, value) => {
    const updates = {
      theme,
      shape,
      brandColor,
      accentColor,
      neutralColor,
      solidStyle,
      effect,
      surface,
      scaling,
      transition,
      [key]: value,
    };

    switch (key) {
      case "theme":
        setTheme(value);
        break;
      case "shape":
        setShape(value);
        break;
      case "brandColor":
        setBrandColor(value);
        break;
      case "accentColor":
        setAccentColor(value);
        break;
      case "neutralColor":
        setNeutralColor(value);
        break;
      case "solidStyle":
        setSolidStyle(value);
        break;
      case "effect":
        setEffect(value);
        break;
      case "surface":
        setSurface(value);
        break;
      case "scaling":
        setScaling(value);
        break;
      case "transition":
        setTransition(value);
        break;
    }

    applyStyles(updates);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/20"
          />

          {/* Panel Content */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              x:
                originPosition.x -
                (typeof window !== "undefined" ? window.innerWidth : 0) +
                40,
              y: originPosition.y - 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              x:
                originPosition.x -
                (typeof window !== "undefined" ? window.innerWidth : 0) +
                40,
              y: originPosition.y - 40,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.5,
            }}
            style={{
              transformOrigin: "top right",
            }}
            className={`fixed right-2 top-5 bottom-5 lg:w-[420px] w-[90vw] bg-zinc-900 text-white shadow-2xl z-[70] overflow-y-auto dynamic-rounded`}
          >
            {/* Header */}
            <div className="px-3 py-2 flex items-start justify-between">
              <div className="pl-3 pt-4">
                <h2 className="text-lg font-semibold mb-1">Customize</h2>
                <p className="text-sm text-gray-400 ">
                  Customize global design settings
                </p>
              </div>
              <button
                onClick={onClose}
                className={`flex items-center justify-center w-10 h-10 dynamic-rounded lg:dynamic-gradient lg:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105`}
              >
                <X className="block lg:hidden" />
                <HiOutlineSparkles className="w-5 h-5 text-white hidden lg:block" />
              </button>
            </div>

            {/* Content */}
            <div className="px-3 py-3 space-y-6">
              {/* Theme */}
              <div
                className={`dynamic-rounded overflow-hidden border-[1px] border-gray-500`}
              >
                <div className="px-6 py-3 flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <div className={`w-[80%] flex dynamic-rounded p-1`}>
                    <button
                      onClick={() => handleStyleChange("theme", "light")}
                      className={`w-full px-4 py-2 dynamic-rounded text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        theme === "light"
                          ? "bg-gray-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <HiOutlineSun className="w-6 h-6" />
                      Light
                    </button>
                    <button
                      onClick={() => handleStyleChange("theme", "dark")}
                      className={`w-full px-4 py-2 dynamic-rounded text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        theme === "dark"
                          ? "bg-gray-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <HiOutlineMoon className="w-4 h-4" />
                      Dark
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-800 px-6 py-3 flex items-center justify-between">
                  <span className="text-sm font-medium">Shape</span>
                  <div className="flex gap-2">
                    {shapes.map((s) => {
                      const radiusClass = s.radius;
                      return (
                        <button
                          key={s.value}
                          onClick={() => handleStyleChange("shape", s.value)}
                          className={`transition-all bg-gray-600 ${radiusClass} ${
                            shape === s.value
                              ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                              : ""
                          }`}
                        >
                          <div className={`w-9 h-9 ${radiusClass}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Color Section */}
              <div>
                <h3 className="text-lg font-semibold mb-1 pl-3">Color</h3>
                <p className="text-sm text-gray-400 pl-3">
                  Customize color schemes
                </p>

                <div
                  className={`dynamic-rounded overflow-hidden border-[1px] border-gray-500 mt-4`}
                >
                  {/* Brand Colors with Carousel */}
                  <div className="pl-6 pr-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium whitespace-nowrap">
                        Brand
                      </span>
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <Carousel
                          opts={{
                            align: "start",
                            slidesToScroll: 3,
                          }}
                          className="w-full flex "
                        >
                          <CarouselPrevious className="static translate-y-0 w-7 h-7 flex-shrink-0 bg-gray-600 border-0 text-white hover:bg-gray-700 hover:text-white disabled:opacity-30 my-auto" />
                          <CarouselContent className="ml-2 mr-2 pt-2">
                            {colors.brand.map((c) => (
                              <CarouselItem
                                key={c.name}
                                className="basis-auto pl-2"
                              >
                                <button
                                  onClick={() =>
                                    handleStyleChange("brandColor", c.name)
                                  }
                                  className={`relative w-9 h-9 flex-shrink-0 dynamic-rounded transition-all ${
                                    c.bg
                                  } ${
                                    brandColor === c.name
                                      ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                                      : "hover:scale-110"
                                  }`}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselNext className="static translate-y-0 w-7 h-7 flex-shrink-0 bg-gray-800 border-0 text-white hover:bg-gray-700 hover:text-white disabled:opacity-30 my-auto" />
                        </Carousel>
                      </div>
                    </div>
                  </div>

                  {/* Accent Colors with Carousel */}
                  <div className="border-t border-gray-800 pl-6 pr-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium whitespace-nowrap">
                        Accent
                      </span>
                      <div className="flex items-center gap-2 flex-1 min-w-0 ">
                        <Carousel
                          opts={{
                            align: "start",
                            slidesToScroll: 3,
                          }}
                          className="w-full flex"
                        >
                          <CarouselPrevious className="static translate-y-0 w-7 h-7 flex-shrink-0 bg-gray-600 border-0 text-white hover:bg-gray-700 hover:text-white disabled:opacity-30 my-auto" />
                          <CarouselContent className="ml-2 mr-2 pt-2">
                            {colors.brand.map((c) => (
                              <CarouselItem
                                key={c.name}
                                className="basis-auto pl-2"
                              >
                                <button
                                  onClick={() =>
                                    handleStyleChange("accentColor", c.name)
                                  }
                                  className={`relative w-9 h-9 flex-shrink-0 dynamic-rounded transition-all ${
                                    c.bg
                                  } ${
                                    accentColor === c.name
                                      ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                                      : "hover:scale-110"
                                  }`}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselNext className="static translate-y-0 w-7 h-7 flex-shrink-0 bg-gray-800 border-0 text-white hover:bg-gray-700 hover:text-white disabled:opacity-30 my-auto" />
                        </Carousel>
                      </div>
                    </div>
                  </div>

                  {/* Neutral Colors */}
                  <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-[60px]">
                      Neutral
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {colors.neutral.map((c) => (
                        <button
                          key={c.name}
                          onClick={() =>
                            handleStyleChange("neutralColor", c.name)
                          }
                          className={`relative w-9 h-9 dynamic-rounded transition-all  brightness-200 ${
                            c.bg
                          } ${
                            neutralColor === c.name
                              ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                              : "hover:scale-110"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StylePanel;