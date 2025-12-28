"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ServicesIntro = () => {
  return (
    <section 
      className="bg-black text-white py-[160px] md:py-[200px] overflow-hidden" 
      id="services"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1440px]">
        {/* Services Header Wrapper */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16 md:gap-0">
          
          {/* Left: Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/4"
          >
            <h5 className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#999999]">
              /SERVICES
            </h5>
          </motion.div>

          {/* Center: Main Headline */}
          <div className="md:w-1/2 flex flex-col">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="section-headline leading-[1.05] tracking-[-0.05em] font-medium text-[clamp(40px,6vw,84px)]"
              >
                <span className="block text-white">Advanced Data & Tech</span>
                <span className="block text-white">
                  Solutions, <span className="text-[#999999]">Powered</span>
                </span>
                <span className="block text-[#999999]">by AI.</span>
              </motion.h1>
          </div>

          {/* Right: Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/4 flex md:justify-end items-start md:pt-4"
          >
            <div className="bg-[#FF5C00] text-white rounded-full flex items-center justify-center w-[32px] h-[32px] font-bold text-[14px]">
              4
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;