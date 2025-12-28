"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[800px] md:h-[1080px] bg-black overflow-hidden flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24"
    >
      {/* Moving Text Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="flex whitespace-nowrap"
        >
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span 
                key={i}
                className="text-[150px] md:text-[350px] lg:text-[500px] font-black uppercase tracking-[-0.05em] text-transparent stroke-text leading-none select-none px-10"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
              >
                PORTFOLIO
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
          <div className="relative w-full max-w-[904px] h-[760px] translate-y-[-5%]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/gAOqQ7ashqfpKB5NgxNSCeq2ncc-1.webp"
              alt="Abhiraj Singh Chandrawat - Data Analyst"
              fill
              className="object-contain"
              priority
            />
          </div>
      </motion.div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
            <h1 className="hero-title text-white tracking-[-0.05em] uppercase m-0 leading-[0.85]">
              Abhiraj Singh <br className="hidden md:block" /> Chandrawat
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start md:items-end gap-10 md:text-right max-w-[320px]"
          >
            <p className="text-[#999999] text-[18px] md:text-[20px] leading-[1.3] font-light">
              Consultant & Data Analyst. Navigating ambiguity with data-driven precision.
            </p>
          
            <div className="flex items-center justify-center">
              <a href="#about">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#FF5C00] flex items-center justify-center shadow-lg animate-bounce cursor-pointer"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </motion.div>
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;