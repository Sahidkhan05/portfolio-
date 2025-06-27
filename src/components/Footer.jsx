import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left - Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sahid Khan. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Sahidkhan05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahid-khan-5a95921aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sahidkhan1614@gmail.com"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer