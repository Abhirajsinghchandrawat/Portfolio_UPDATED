"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Redshift®',
    category: 'Automobile / EV',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/f2e0PAwp9naaeyTmfmwi2epn0-4.webp',
  },
  {
    title: 'TrendLoop',
    category: 'E-commerce',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/j2pBSFuof3BXauwdGqy3HWWEc-5.webp',
  },
  {
    title: 'Lüma Skin',
    category: 'Skincare / Beauty Tech',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/LsCC4tPk9tYC0Bdi5ZlHsbcek4-6.webp',
  },
  {
    title: 'Fabrica',
    category: 'Fashion Tech',
    year: '2024',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/SNY17MQPOkF9RIR6qu8BRqnzJ0-8.webp',
  },
];

export default function ProjectsHighlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="bg-[#EFEEEA] pt-40 pb-20 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start mb-20 relative"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#FF5C00] text-[20px]">+</span>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
              Projects
            </span>
          </div>
          
          <div className="mt-8 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <h2 className="text-[48px] md:text-[64px] lg:text-[84px] leading-[0.9] font-medium tracking-[-0.05em] text-[#1A1A1A]">
              Al-crafted<br />
              <span className="text-[#999999]">design</span> highlights
            </h2>
          </div>

          <div className="hidden md:flex items-center justify-center w-8 h-10 bg-[#FF5C00] rounded-full text-white font-bold text-[14px]">
            6
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] md:aspect-[3/2.2] overflow-hidden bg-[#141414] mb-6 relative rounded-[12px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                  <motion.h3 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="text-white text-[32px] md:text-[42px] font-medium tracking-tight drop-shadow-lg"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex justify-between items-center py-4 border-t border-[#DEDDDA]">
                <div className="flex items-center gap-3">
                  <span className="text-[#FF5C00] text-[16px]">+</span>
                  <span className="text-[#1A1A1A] font-sans text-[14px] md:text-[16px] font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="text-[#666666] font-sans text-[14px]">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}