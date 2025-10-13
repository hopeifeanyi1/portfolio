"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { X } from "lucide-react";

const StylePanel = ({ isOpen, onClose, originPosition }) => {
  const [mounted, setMounted] = useState(false);

  // Style states
  const [theme, setTheme] = useState("dark");
  const [shape, setShape] = useState("conservative");
  const [brandColor, setBrandColor] = useState("cyan");
  const [accentColor, setAccentColor] = useState("cyan");
  const [neutralColor, setNeutralColor] = useState("gray");
  const [solidStyle, setSolidStyle] = useState("color");
  const [effect, setEffect] = useState("flat");
  const [surface, setSurface] = useState("translucent");
  const [scaling, setScaling] = useState("100");
  const [transition, setTransition] = useState("all");

  const panelRef = useRef(null);

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
      { name: "sand", bg: "bg-amber-200" },
      { name: "gray", bg: "bg-gray-500" },
      { name: "slate", bg: "bg-slate-500" },
    ],
  };

  useEffect(() => {
    setMounted(true);

    // Load saved preferences
    if (typeof window !== "undefined") {
      const saved = {
        theme: localStorage.getItem("theme") || "dark",
        shape: localStorage.getItem("design-shape") || "conservative",
        brandColor: localStorage.getItem("design-brand") || "cyan",
        accentColor: localStorage.getItem("design-accent") || "cyan",
        neutralColor: localStorage.getItem("design-neutral") || "gray",
        solidStyle: localStorage.getItem("design-solid") || "color",
        effect: localStorage.getItem("design-effect") || "flat",
        surface: localStorage.getItem("design-surface") || "translucent",
        scaling: localStorage.getItem("design-scaling") || "100",
        transition: localStorage.getItem("design-transition") || "all",
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
    }
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

    // Add data attribute to body for CSS targeting
    document.body.setAttribute("data-shape", styles.shape);
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

    if (typeof window !== "undefined") {
      const storageKey =
        key === "theme"
          ? "theme"
          : `design-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      localStorage.setItem(storageKey, value);
    }

    applyStyles(updates);
  };

  // Get current radius class
  const getCurrentRadiusClass = () => {
    return shapes.find((s) => s.value === shape)?.radius || "rounded-md";
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
            ref={panelRef}
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
            className={`fixed right-2 top-5 bottom-5 lg:w-[450px] w-[90vw] bg-gray-900 text-white shadow-2xl z-[70] overflow-y-auto dynamic-rounded`}
          >
            {/* Header */}
            <div className="px-3 py-2 flex items-start justify-between">
              <div className="pl-3 pt-4">
                <h2 className="text-lg font-semibold mb-1">Customize</h2>
                <p className="text-sm text-gray-400">
                  Customize global design settings
                </p>
              </div>
              <button
                onClick={onClose}
                className={`flex items-center justify-center w-10 h-10 dynamic-rounded lg:bg-gradient-to-r lg:from-purple-500 lg:to-pink-500 lg:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105`}
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
                    {shapes.map((s, idx) => {
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
              {/* <div>
                <h3 className="text-lg font-semibold mb-1 pl-3">Color</h3>
                <p className="text-sm text-gray-400 pl-3">
                  Customize color schemes
                </p>

                <div
                  className={`dynamic-rounded overflow-hidden border-[1px] border-gray-500 mt-4`}
                >
            
                  <div className="px-6 py-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-[60px]">
                      Brand
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {colors.brand.map((c) => (
                        <button
                          key={c.name}
                          onClick={() =>
                            handleStyleChange("brandColor", c.name)
                          }
                          className={`relative w-9 h-9 dynamic-rounded transition-all ${
                            c.bg
                          } ${
                            brandColor === c.name
                              ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                              : "hover:scale-110"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                 
                  <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-[60px]">
                      Accent
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {colors.brand.map((c) => (
                        <button
                          key={c.name}
                          onClick={() =>
                            handleStyleChange("accentColor", c.name)
                          }
                          className={`relative w-9 h-9 dynamic-rounded transition-all ${
                            c.bg
                          } ${
                            accentColor === c.name
                              ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                              : "hover:scale-110"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  
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
                          className={`relative w-9 h-9 dynamic-rounded transition-all ${
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
              </div> */}

              {/* Solid Style */}
              {/* <div>
                <h3 className="text-lg font-semibold mb-1">Solid style</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Customize the appearance of interactive elements
                </p>

                <div className={`dynamic-rounded overflow-hidden`}>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Style</span>
                    <div
                      className={`flex gap-2 bg-gray-800 dynamic-rounded p-1`}
                    >
                      {[
                        {
                          value: "color",
                          label: "Color",
                          color: "bg-cyan-500/30 border-cyan-500",
                        },
                        {
                          value: "inverse",
                          label: "Inverse",
                          color: "bg-cyan-500 border-cyan-500",
                        },
                        {
                          value: "contrast",
                          label: "Contrast",
                          color: "bg-white border-cyan-500",
                        },
                      ].map((s) => (
                        <button
                          key={s.value}
                          onClick={() =>
                            handleStyleChange("solidStyle", s.value)
                          }
                          className={`px-3 py-2 dynamic-rounded text-xs font-medium transition-all flex items-center gap-2 ${
                            solidStyle === s.value
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 dynamic-rounded border-2 ${s.color}`}
                          />
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Effect</span>
                    <div
                      className={`flex gap-2 bg-gray-800 dynamic-rounded p-1`}
                    >
                      {[
                        { value: "flat", label: "Flat" },
                        { value: "plastic", label: "Plastic" },
                      ].map((e) => (
                        <button
                          key={e.value}
                          onClick={() => handleStyleChange("effect", e.value)}
                          className={`px-3 py-2 dynamic-rounded text-xs font-medium transition-all flex items-center gap-2 ${
                            effect === e.value
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 dynamic-rounded bg-cyan-500/30 border-2 border-cyan-500 ${
                              e.value === "plastic" ? "shadow-inner" : ""
                            }`}
                          />
                          {e.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Advanced */}
              {/* <div>
                <h3 className="text-lg font-semibold mb-1">Advanced</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Customize advanced styling options
                </p>

                <div className={`dynamic-rounded overflow-hidden`}>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Surface</span>
                    <div
                      className={`flex gap-2 bg-gray-800 dynamic-rounded p-1`}
                    >
                      {["filled", "translucent"].map((s) => (
                        <button
                          key={s}
                          onClick={() => handleStyleChange("surface", s)}
                          className={`px-4 py-2 dynamic-rounded text-xs font-medium transition-all capitalize ${
                            surface === s
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Scaling</span>
                    <div
                      className={`flex gap-1 bg-gray-800 dynamic-rounded p-1`}
                    >
                      {["90", "95", "100", "105", "110"].map((s) => (
                        <button
                          key={s}
                          onClick={() => handleStyleChange("scaling", s)}
                          className={`px-3 py-2 dynamic-rounded text-xs font-medium transition-all ${
                            scaling === s
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-800 px-6 py-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Transition</span>
                    <div
                      className={`flex gap-2 bg-gray-800 dynamic-rounded p-1`}
                    >
                      {["all", "micro", "macro", "none"].map((t) => (
                        <button
                          key={t}
                          onClick={() => handleStyleChange("transition", t)}
                          className={`px-3 py-2 dynamic-rounded text-xs font-medium transition-all capitalize ${
                            transition === t
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StylePanel;
