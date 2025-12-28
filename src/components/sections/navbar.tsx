"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Linkedin, Github, Phone, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', number: '1.0' },
    { label: 'Projects', href: '#projects', number: '2.0' },
    { label: 'Services', href: '#services', number: '3.0' },
    { label: 'Contact', href: '#contact', number: '4.0' },
  ];

    const dropdownItems = [
      { label: 'Download Resume', icon: <Download size={16} />, href: '/resume.pdf' },
      { label: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/abhirajsinghchandrawat/' },
      { label: 'GitHub', icon: <Github size={16} />, href: 'https://github.com/abhirajsingh' },
      { label: 'Book a Call', icon: <Phone size={16} />, href: '#contact' },
    ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] glass-nav px-8 py-6 flex items-center justify-between"
    >
      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
            className="group flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <span 
              className="text-[10px] font-semibold text-[#999999] tracking-widest transition-colors group-hover:text-white"
            >
              {link.number}
            </span>
            <span 
              className="text-[13px] font-medium text-white tracking-wide"
            >
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Grid Menu Button with Dropdown */}
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center"
        >
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center justify-center w-[84px] h-[36px] bg-[#0E0E0E] border border-[#1F1F1F] rounded-sm hover:bg-[#1F1F1F] transition-all duration-300 active:scale-95 ${isMenuOpen ? 'bg-[#1F1F1F] border-white/20' : ''}`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={18} className="text-white" />
            ) : (
              <div className="grid grid-cols-3 gap-[3px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-[2.5px] h-[2.5px] bg-white rounded-full opacity-90"
                  />
                ))}
              </div>
            )}
          </button>
        </motion.div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-[220px] bg-[#0E0E0E] border border-[#1F1F1F] rounded-lg shadow-2xl overflow-hidden py-2"
            >
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[13px] text-[#999999] hover:text-white hover:bg-[#1F1F1F] transition-all group"
                >
                  <span className="text-[#FF5C00] transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;