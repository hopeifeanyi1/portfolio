"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TAB_DATA = [
  {
    title: "Tech Stack",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "TypeScript",
          "Next js",
          "React",
          "Three js",
          "React Native",
          "Tailwind",
          "Nest js",
          "Express",
          "Firebase",
          "PostgreSQL",
          "MongoDB",
          "Node js",
        ].map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-3 dynamic-rounded bg-gray-50 dark:bg-gray-800/50"
          >
            <span className="h-2 w-2 dynamic-rounded dynamic-gradient mr-3"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        {[
          "Babcock University, Software Engineering",
          "Microsoft Learn",
          "Udemy",
          "Code with Mosh",
          "Coursera",
        ].map((edu, index) => (
          <div
            key={index}
            className="flex items-center p-3 dynamic-rounded bg-gray-50 dark:bg-gray-800/50"
          >
            <span className="h-2 w-2 dynamic-rounded dynamic-gradient mr-3"></span>
            <span>{edu}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent className="md:w-auto w-[97vw]" opts={{ align: "start" }}>
            <CarouselItem className="md:basis-1/2">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/3B11AE95D51C7AD?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image
                    src="/ai900.png"
                    alt="Microsoft Certified: Azure AI Fundamentals"
                    className="mx-auto"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm font-medium mt-4">
                    Microsoft Certified: Azure AI Fundamentals
                  </p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/F96AC56F66AF7953?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image
                    src="/dp900.png"
                    alt="Microsoft Certified: Azure Data Fundamentals"
                    className="mx-auto"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm font-medium mt-4">
                    Microsoft Certified: Azure Data Fundamentals
                  </p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/D93D7739FAD1104?sharingId=B4D7060416A0FE6B"
                className="hover:opacity-90 block"
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center">
                  <Image
                    src="/az900.png"
                    alt="Microsoft Certified: Azure Fundamentals"
                    className="mx-auto"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm font-medium mt-4">
                    Microsoft Certified: Azure Fundamentals
                  </p>
                </div>
              </a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">
                  Cyber Security and Ethical Hacking
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">
                  Full-Stack Web Design and Development
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 dynamic-rounded text-center flex items-center justify-center min-h-48">
                <p className="font-medium">
                  HTML, CSS, Javascript for Web Developers
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-gray-100 dark:bg-gray-800 border-none" />
            <CarouselNext className="static translate-y-0 bg-gray-100 dark:bg-gray-800 border-none" />
          </div>
        </Carousel>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-14 max-w-6xl mx-auto px-1">
      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=""
        >
          <p className="text-gray-600 dark:text-gray-300 text-[16px] leading-relaxed mb-8">
            I&apos;m a full-stack software engineer with 4 years of frontend and
            2 years of backend experience. I&apos;m passionate about solving
            real-world problems through high-performance, scalable systems.
            Deeply product and process-driven, I focus on delivering reliable
            solutions with exceptional performance at scale. I specialize in
            React.js, Next.js, TypeScript, and Nest.js, with a strong emphasis
            on performance optimization, system reliability, and scalable
            architecture. As a 3-time hackathon winner, I bring both speed and
            quality to every project I build.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
