//src/app/components/EmailSection.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";
import { toast } from "sonner";

const EmailSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      description: "Please wait while we process your request"
    });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.ok) {
        // Success toast
        toast.success("Message sent successfully!", {
          description: "Thank you! I'll respond as soon as possible.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({ email: "", subject: "", message: "" });
      } else {
        // Error toast with specific message from server
        toast.error("Failed to send message", {
          description: data.message || "Please try again later.",
          duration: 6000,
        });
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Network error toast
      toast.error("Network error", {
        description: "Please check your connection and try again.",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.1, 
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 }
  };

  const inputVariants = {
    focus: { 
      borderColor: "#000",
      boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)" 
    },
    blur: { 
      borderColor: "#e5e7eb",
      boxShadow: "none" 
    }
  };

  return (
    <motion.section 
      className="max-w-6xl mx-auto py-12 lg:py-20 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="contact"
    >
      <motion.div 
        variants={itemVariants}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Get In Touch</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div 
          className="md:col-span-2 space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-3">Let&apos;s Connect</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex space-x-5"
          >
            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link href="https://github.com/hopeifeanyi1" className="block p-2 bg-gray-800/50 dynamic-rounded shadow-md hover:shadow-lg transition-shadow">
                <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link href="https://www.linkedin.com/in/hope-ifeanyi" className="block p-2 bg-gray-800/50 dynamic-rounded shadow-md hover:shadow-lg transition-shadow">
                <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link href="mailto:hopeifeanyi2@gmail.com" className="block p-2 bg-gray-800/50 dynamic-rounded shadow-md hover:shadow-lg transition-shadow">
                <Image src={MailIcon} alt="Mail Icon" width={24} height={24} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-3 bg-white dark:bg-gray-800/50 dynamic-rounded shadow-xl p-6 md:p-8"
          variants={itemVariants}
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <motion.div
              variants={inputVariants}
              animate={focused === "email" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focused === "subject" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focused === "message" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none transition-all h-32 resize-none dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover={!isSubmitting ? "hover" : {}}
              whileTap={!isSubmitting ? "tap" : {}}
              disabled={isSubmitting}
              className="w-full px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium dynamic-rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmailSection;