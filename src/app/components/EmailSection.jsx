"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
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

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      setFormData({ email: "", subject: "", message: "" });
    } else {
      console.error("Error sending message.");
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
      className="max-w-6xl mx-auto py-24 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="contact"
    >
      <motion.div 
        variants={itemVariants}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Get In Touch</h2>
        <div className="h-1 w-12 bg-black mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div 
          className="md:col-span-2 space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-3">Let&apos;s Connect</h3>
            <p className="text-gray-700 mb-6">
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
              <Link href="https://github.com/hopeifeanyi1" className="block p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link href="https://www.linkedin.com/in/hope-ifeanyi" className="block p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Link href="mailto:hopeifeanyi2@gmail.com" className="block p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Image src={MailIcon} alt="Mail Icon" width={24} height={24} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-3 bg-white rounded-2xl shadow-xl p-6 md:p-8"
          variants={itemVariants}
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <motion.div
              variants={inputVariants}
              animate={focused === "email" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none transition-all"
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focused === "subject" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
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
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none transition-all"
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              animate={focused === "message" ? "focus" : "blur"}
              className="space-y-2"
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none transition-all h-32 resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full px-5 py-3 bg-black text-white font-medium rounded-lg transition-all"
            >
              {emailSubmitted ? "Message Sent!" : "Send Message"}
            </motion.button>
            
            {emailSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 flex items-center justify-center text-sm text-green-600"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Thank you! I&apos;ll respond as soon as possible.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmailSection;