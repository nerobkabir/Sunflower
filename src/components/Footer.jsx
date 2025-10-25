import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 SkillSwap. All rights reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-center">
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500 transition-colors duration-200"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-sky-400 transition-colors duration-200"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors duration-200"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-blue-700 transition-colors duration-200"><FaLinkedinIn size={18} /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
