"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content:(
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Typescript</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>Next.js</li>
      </ul>
    )    
  },
  {
    title: "Education",
    id: "education",
    content:(
      <ul className='list-disc pl-2'>
        <li>Babcock University, Software Engineering</li>
        <li>Microsoft Learn</li>
        <li>Udemy</li>
        <li>Code with Mosh</li>
        <li>Cousera</li>
      </ul>
    )    
  },
  {
    title: "Certification",
    id: "certifications",
    content:(
      <div className='list-disc pl-2'>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/3B11AE95D51C7AD?sharingId=B4D7060416A0FE6B' className='hover:text-slate-400'>
                <Image
                src="/ai900.png"
                alt="cert"
                className="w-5/6 h-auto mx-auto"
                width={200}
                height={200}/>          
                <p className='text-sm text-center pt-3'>Microsoft Certified: Azure AI Fundamentals</p>
              </a>
            </CarouselItem>
            <CarouselItem>
              <a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/F96AC56F66AF7953?sharingId=B4D7060416A0FE6B' className='hover:text-slate-400'>
                <Image
                  src="/dp900.png"
                  alt="cert"
                  className="w-5/6 h-auto mx-auto"
                  width={200}
                  height={200}/>
                <p className='text-sm text-center pt-3'>Microsoft Certified: Azure Data Fundamentals</p>
              </a>
            </CarouselItem>
            <CarouselItem>
              <a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/D93D7739FAD1104?sharingId=B4D7060416A0FE6B' className='hover:text-slate-400'>
                <Image
                  src="/az900.png"
                  alt="cert"
                  className="w-5/6 h-auto mx-auto"
                  width={200}
                  height={200}/>
                <p className='text-sm text-center pt-3'>Microsoft Certified: Azure Fundamentals</p>
              </a>
            </CarouselItem>
            <CarouselItem><p className='text-center '>Cyber Security and Ethical Hacking</p></CarouselItem>
            <CarouselItem><p className='text-center'>Full-Stack Web Design and Development</p></CarouselItem>
            <CarouselItem><p className='text-center'>HTML, CSS, Javascript for Web Developers</p></CarouselItem>
            </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>    
      </div>
    )    
  },
] 

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    });
  };

  return (
    <section className="" id="about">
        <div className=" items-center py-8 px-4  sm:py-16 xl:px-16">
            
            <div className='mt-4 md:mt-0 text-white text-left flex flex-col h-full '>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                <p className="md:text-xl text-[14px]">As a passionate software engineering student at Babcock University, I’m eager to apply my skills across web, mobile, and cybersecurity. I’ve gained experience with technologies like React, TypeScript, Node.js, MongoDB, and React Native, and I’m driven to keep pushing my knowledge and building innovative solutions.
                </p>
                <div className="flex flex-row justify-start mt-8 text-white">
                    <TabButton
                      selectTab={() => handleTabChange("skills")}
                      active={tab === "skills"}
                    >
                      {" "}
                      Skills{" "}
                    </TabButton>
                    <TabButton
                      selectTab={() => handleTabChange("education")}
                      active={tab === "education"}
                    >
                      {" "}
                      Education{" "}
                    </TabButton>
                    <TabButton                   
                      selectTab={() => handleTabChange("certifications")}
                      active={tab === "certifications"}
                    >
                      {" "}
                      Certifications{" "}
                    </TabButton>
                  </div>
                  <div className='mt-8 md:text-lg'>
                     {TAB_DATA.find((e) => e.id === tab).content}                    
                  </div>
                  
            </div>
        </div>
    </section>
  )
}

export default AboutSection