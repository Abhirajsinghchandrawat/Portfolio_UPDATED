"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="bg-[#EFEEEA] pt-40 pb-40 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-12 gap-6 mb-24"
        >
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4 self-start flex items-center gap-2">
              <span className="text-[#FF5C00] font-bold">+</span>
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#666666]">
                Why Choose Me?
              </span>
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-6">
              <h2 className="text-[40px] md:text-[64px] lg:text-[72px] leading-[0.9] tracking-[-0.05em] text-[#1A1A1A] font-medium">
                Turning Data into <br />
                <span className="text-[#999999]">Strategic Impact</span>
              </h2>
            </motion.div>

          <motion.div variants={itemVariants} className="col-span-12 lg:col-span-2 flex justify-end items-start mt-4 lg:mt-0">
            <div className="bg-[#FF5C00] text-white rounded-full w-8 h-10 flex items-center justify-center text-[14px] font-bold">
              4
            </div>
          </motion.div>
        </motion.div>

        {/* Storytelling Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-[1000px]"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            <p className="text-[28px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight text-[#333333] font-normal">
              Data is the most honest storyteller we have. In a world of noise, I find the signals that matter. From uncovering hidden trends in user behavior to optimizing complex operational flows, my work is dedicated to turning abstract data into <span className="text-[#1A1A1A] font-medium italic">concrete success stories</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#D1D1D1]">
              <div className="space-y-4">
                <h4 className="font-mono text-[14px] font-bold uppercase tracking-widest text-[#FF5C00]">Precision</h4>
                <p className="text-[#666666] text-[18px] leading-relaxed">
                  I combine rigorous analytical techniques with a deep understanding of business goals to deliver results that don't just look good on a slide, but move the needle where it counts.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-mono text-[14px] font-bold uppercase tracking-widest text-[#FF5C00]">Vision</h4>
                <p className="text-[#666666] text-[18px] leading-relaxed">
                  By bridging the gap between raw data and strategic decision-making, I ensure that every insight translates into a competitive advantage. It's about more than just accuracy—it's about impact.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;