//src/app/components/EmailSection.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import MailIcon from "../../../public/mail-icon.svg";
import { toast } from "sonner";

const EmailSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...", {
      description: "Please wait while we process your request",
    });
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      toast.dismiss(loadingToast);
      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you! I'll respond as soon as possible.",
          duration: 5000,
        });
        setFormData({ email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Please try again later.",
          duration: 6000,
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error", {
        description: "Please check your connection and try again.",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const socialIconVariants = {
    hover: { scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.3 } },
  };

  const buttonVariants = { hover: { scale: 1.03 }, tap: { scale: 0.97 } };

  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 lg:py-24 px-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="contact"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">
          Contact
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white">
          Get in touch
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <motion.div className="md:col-span-2 space-y-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hi, I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-4">
              Find me on
            </p>
            <div className="flex gap-3">
              <motion.div variants={socialIconVariants} whileHover="hover">
              <Link
                href="https://github.com/hopeifeanyi1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 dynamic-rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dynamic-hover-gradient hover:border-transparent hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaGithub size={18} />
              </Link>
            </motion.div>
            <motion.div variants={socialIconVariants} whileHover="hover">
              <Link
                href="https://www.linkedin.com/in/hope-ifeanyi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 dynamic-rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dynamic-hover-gradient hover:border-transparent hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaLinkedin size={18} />
              </Link>
            </motion.div>
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link
                  href="mailto:hopeifeanyi2@gmail.com"
                  className="flex items-center justify-center w-10 h-10 dynamic-rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dynamic-hover-gradient hover:border-transparent hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300"
                >
                  <Image src={MailIcon} alt="Email" width={18} height={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-3 bg-white dark:bg-gray-900/50 dynamic-rounded border border-gray-100 dark:border-gray-800 p-6 md:p-8"
          variants={itemVariants}
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500">
                Email Address
              </label>
              <input
                type="email" id="email" name="email" required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-all dark:text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500">
                Subject
              </label>
              <input
                type="text" id="subject" name="subject" required
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-all dark:text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500">
                Message
              </label>
              <textarea
                id="message" name="message" required
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 dynamic-rounded bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-all h-32 resize-none dark:text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover={!isSubmitting ? "hover" : {}}
              whileTap={!isSubmitting ? "tap" : {}}
              disabled={isSubmitting}
              className="w-full px-5 py-3 dynamic-gradient text-white font-medium dynamic-rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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