"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'

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
        <li>Bootsrap</li>
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
      <ul className='list-disc pl-2'>
        <li>Cyber Security and Ethical Hacking</li>
        <li>Full-Stack Web Design and Development</li>      
        <li>HTML, CSS, Javascript for Web Developers</li> 
        <li><a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/3B11AE95D51C7AD?sharingId=B4D7060416A0FE6B'>Microsoft Certified: Azure AI Fundamentals</a></li>     
        <li><a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/F96AC56F66AF7953?sharingId=B4D7060416A0FE6B'>Microsoft Certified: Azure Data Fundamentals</a></li>            
        <li><a href='https://learn.microsoft.com/api/credentials/share/en-us/HopeIFEANYI/D93D7739FAD1104?sharingId=B4D7060416A0FE6B'>Microsoft Certified: Azure Fundamentals</a></li>      
      </ul>
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
            
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                <p className="text-base md:text-xl">As a 3rd year software engineering student at Babcock University, I have a diverse range of interests that spans beyond software development, I am keen to leverage my skills and knowledge in areas like web development, mobile development and cybersecurity. I have gained valuable experience in web development technologies like HTML, CSS, Tailwind CSS, BootStrap, JavaScript, React, Typescript, mongodb, Node, Express and Next js and also mobile development technologies like React-Native and expo.
                </p>
                <div className="flex flex-row justify-start mt-8">
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