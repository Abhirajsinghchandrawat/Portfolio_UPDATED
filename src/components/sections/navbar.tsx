"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { label: 'Studio', href: '#studio', number: '1.0' },
    { label: 'Projects', href: '#projects', number: '2.0' },
    { label: 'Pricing', href: '#pricing', number: '3.0' },
    { label: 'Journal', href: '#journal', number: '4.0' },
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

      {/* Grid Menu Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center"
      >
        <button 
          className="flex items-center justify-center w-[84px] h-[36px] bg-[#0E0E0E] border border-[#1F1F1F] rounded-sm hover:bg-[#1F1F1F] transition-all duration-300 active:scale-95"
          aria-label="Menu"
        >
          <div className="grid grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={i} 
                className="w-[2.5px] h-[2.5px] bg-white rounded-full opacity-90"
              />
            ))}
          </div>
        </button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;