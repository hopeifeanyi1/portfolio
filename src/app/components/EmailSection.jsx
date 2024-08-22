"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className='grid md:grid-cols-2 my-0 md:my-12 py-24 gap-4 relative' id="contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
            <div className='socials flex flex-row gap-2'>
              <Link href="https://github.com/hopeifeanyi1">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/hope-ifeanyi">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
              <Link href="mailto:hopeifeanyi2@gmail.com" >
                <Image src={MailIcon} alt="Mail Icon" className="pt-1" />
              </Link>
            </div>
        </div>
        <div>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='email'  className='text-white block 1text-sm font-medium mb-2'>Your email</label>
              <input type="email" id='email' required placeholder='example@gmail.com' className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5' />
            </div>
            <div  className='mb-6'>
              <label htmlFor='subject'  className='text-white block text-sm font-medium mb-2'>Subject</label>
              <input type="text" id='subject' required placeholder='Just saying hi' className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5' />
            </div>
            <div className='mb-6'>
              <label htmlFor='message'  className='text-white block text-sm font-medium mb-2'>Message</label>
              <textarea 
                name='message'
                id = 'messsage'
                required
                placeholder='Hello, I am interested in your work. I would like to know more about your projects.'
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg w-full p-2.5 h-[15vh]'
              />  
            </div>
            <button
            type="submit"
            className='bg-purple-500 hover:bg-purple-600 text-white font-medium  py-2.5 px-5 rounded-lg focus:outline-none w-full'>
              Send Message
            </button>
            {
              emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully</p>
              )
            }
          </form>
        </div>
    </section>
  )
}

export default EmailSection