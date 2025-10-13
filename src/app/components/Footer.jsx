import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-3 py-2.5  flex justify-between">
        <span className="font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 lg:text-3xl text-2xl font-extrabold">
          H.I
        </span>
        <p className="text-slate-400 flex items-center">
          &copy; {new Date().getFullYear()} Hope Ifeanyi
        </p>
        <div className="flex">
          <Link
            href="https://github.com/hopeifeanyi1"
            className="block bg-gray-800/50 dynamic-rounded shadow-md hover:shadow-lg transition-shadow"
          >
            <Image src={GithubIcon} alt="Github Icon" width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hope-ifeanyi"
            className="block pl-2 bg-gray-800/50 dynamic-rounded shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={26}
              height={26}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
