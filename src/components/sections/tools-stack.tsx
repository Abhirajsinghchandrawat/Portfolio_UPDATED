"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ToolStack = () => {
  const tools = [
    {
      id: 1,
      name: 'ChatGPT',
      icon: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg',
      alt: 'ChatGPT Logo',
    },
    {
      id: 2,
      name: 'Claude',
      icon: 'https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg',
      alt: 'Claude Logo',
    },
    {
      id: 3,
      name: 'Jira',
      icon: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg',
      alt: 'Jira Logo',
    },
    {
      id: 4,
      name: 'Confluence',
      icon: 'https://www.vectorlogo.zone/logos/atlassian_confluence/atlassian_confluence-icon.svg',
      alt: 'Confluence Logo',
    },
    {
      id: 5,
      name: 'SQL',
      icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg',
      alt: 'SQL Logo',
    },
    {
      id: 6,
      name: 'Python',
      icon: 'https://www.svgrepo.com/show/452091/python.svg',
      alt: 'Python Logo',
    },
    {
      id: 7,
      name: 'Power BI',
      icon: 'https://www.svgrepo.com/show/354202/power-bi.svg',
      alt: 'Power BI Logo',
    },
    {
      id: 8,
      name: 'Tableau',
      icon: 'https://www.svgrepo.com/show/354425/tableau-icon.svg',
      alt: 'Tableau Logo',
    },
    {
      id: 9,
      name: 'Mixpanel',
      icon: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg',
      alt: 'Mixpanel Logo',
    },
      {
        id: 10,
        name: 'Apache Superset',
        icon: 'https://www.vectorlogo.zone/logos/apache_superset/apache_superset-icon.svg',
        alt: 'Apache Superset Logo',
      },
    {
      id: 11,
      name: 'Web Dev',
      icon: 'https://www.svgrepo.com/show/349419/javascript.svg',
      alt: 'Web Dev Logo',
    },
    {
      id: 12,
      name: 'Excel',
      icon: 'https://www.svgrepo.com/show/373589/excel.svg',
      alt: 'Excel Logo',
    },
    {
      id: 13,
      name: 'n8n',
      icon: 'https://www.vectorlogo.zone/logos/n8n/n8n-icon.svg',
      alt: 'n8n Logo',
    },
    {
      id: 14,
      name: 'Zapier',
      icon: 'https://www.svgrepo.com/show/354596/zapier-icon.svg',
      alt: 'Zapier Logo',
    },
    {
      id: 15,
      name: 'Make.com',
      icon: 'https://www.vectorlogo.zone/logos/make/make-icon.svg',
      alt: 'Make Logo',
    },
    {
      id: 16,
      name: 'Snowflake',
      icon: 'https://www.svgrepo.com/show/354366/snowflake-icon.svg',
      alt: 'Snowflake Logo',
    },
    {
      id: 17,
      name: 'Alteryx',
      icon: 'https://www.vectorlogo.zone/logos/alteryx/alteryx-icon.svg',
      alt: 'Alteryx Logo',
    },
    {
      id: 18,
      name: 'R',
      icon: 'https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg',
      alt: 'R Logo',
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
    <section id="tools" className="bg-secondary px-6 py-24 md:px-20 lg:py-40">
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
                          18
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
                    className="object-contain transition-all duration-500 group-hover:scale-110"
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