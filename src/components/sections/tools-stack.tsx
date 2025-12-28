"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ToolStack = () => {
  const tools = [
    {
      id: 1,
      name: 'OpenAI',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/cYdqiIKvQCCyDLjWvD6VmD5Q0-11.png',
      alt: 'OpenAI Logo',
    },
    {
      id: 2,
      name: 'Midjourney',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/VgXT9IploSRwV8MAivm5oA1Rq7M-12.png',
      alt: 'Midjourney Logo',
    },
    {
      id: 3,
      name: 'Framer',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/MZysN06978sESBJJjwELC1RcXw-13.png',
      alt: 'Framer Logo',
    },
    {
      id: 4,
      name: 'Webflow',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/25mcdpj6GMk5TSq8ugRfSf6AkhQ-14.png',
      alt: 'Webflow Logo',
    },
    {
      id: 5,
      name: 'React',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/Rxi4zOFUA9BQ9K9SaCkbvons-16.png',
      alt: 'React Logo',
    },
    {
      id: 6,
      name: 'Luma',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/RQ98Dm6FO4EXLHvW4aFBKTjN9M-17.png',
      alt: 'Luma Logo',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="bg-secondary px-6 py-24 md:px-20 lg:py-40">
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative flex flex-col md:flex-row items-baseline mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-10 md:mb-0 md:w-1/4"
          >
            <span className="text-accent text-lg font-bold">+</span>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
              Stack
            </span>
          </motion.div>

          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-headline text-[#1a1a1a] mb-2 leading-[0.9]"
            >
              Smart Tools.
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-headline text-[#999999] leading-[0.9]"
            >
              Stunning Results.
            </motion.h2>
          </div>

          <div className="hidden md:flex absolute right-0 top-0">
            <div className="orange-pill h-8 w-8 !p-0 flex items-center justify-center font-bold">
              6
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#333333]/10 overflow-hidden rounded-[24px]"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              className="group relative bg-[#ffffff] h-[320px] md:h-[380px] flex items-center justify-center transition-colors duration-300 hover:bg-[#fafafa]"
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative w-24 h-24 md:w-32 md:h-32"
              >
                <Image
                  src={tool.icon}
                  alt={tool.alt}
                  fill
                  className="object-contain grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 96px, 128px"
                  priority={tool.id <= 3}
                />
              </motion.div>
              
              <div className="absolute inset-0 border border-transparent group-hover:border-[#1a1a1a]/5 pointer-events-none transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolStack;