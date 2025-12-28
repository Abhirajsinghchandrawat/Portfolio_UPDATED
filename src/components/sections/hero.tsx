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
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex whitespace-nowrap"
            >
              <motion.div
                animate={{ x: [0, "-50%"] }}
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
                  {[...Array(6)].map((_, i) => (
                    <span 
                      key={i}
                          className="text-[180px] md:text-[380px] lg:text-[480px] font-black uppercase tracking-[-0.05em] text-transparent leading-none select-none px-24"
                            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}


                      >
                      PORTFOLIO
                    </span>
                  ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square z-10 pointer-events-none"
          >
            <div className="relative w-full h-full opacity-80">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Gemini_Generated_Image_bf98cgbf98cgbf98-1766929311254.png?width=8000&height=8000&resize=contain"
                alt="Abhiraj Singh Chandrawat - Data Analyst"
                fill
                className="object-contain"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
                }}
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
          Data Analyst | Business Analyst | AI & Automation Enthusiast
        </p>
            
                <div className="flex flex-col items-start md:items-end gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a 
                      href="/resume.pdf" 
                      download
                      className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF5C00] text-white rounded-full font-bold text-xl transition-all hover:bg-[#FF7A33] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,92,0,0.4)] hover:shadow-[0_0_50px_rgba(255,92,0,0.6)] border border-[#FF7A33]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Resume
                    </a>
                  </motion.div>

                <a href="#about">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shadow-lg animate-bounce cursor-pointer"
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