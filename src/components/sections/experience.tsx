"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Powerplay (SaaS)',
    role: 'Consultant / Data Analyst Intern',
    duration: 'June 2025 – Present',
    location: 'Bangalore',
    description: [
      'Automated supply and PO tracking dashboards using SQL, Power BI, and Excel, improving efficiency by 45%.',
      'Built demand forecasting models using Python (Pandas, NumPy) achieving 85%+ accuracy.',
      'Developed issue-tracking dashboards using Superset and SQL, reducing recurring client issues by 80%.',
    ]
  },
  {
    company: 'Slash Mark IT Solutions',
    role: 'Data Analyst Intern',
    duration: 'Dec 2024 – May 2025',
    location: 'Vadodara',
    description: [
      'Conducted daily 4M and 5S audits, ensuring compliance with operational and safety standards.',
      'Designed Excel and PowerPoint dashboards, improving stakeholder visibility across 3 business units.',
      'Analyzed operational bottlenecks and delivered data-backed process improvement recommendations.',
    ]
  },
  {
    company: 'ByteXL',
    role: 'Summer Intern',
    duration: 'May 2024 – June 2024',
    location: 'Vadodara',
    description: [
      'Used Python, R, and SQL to automate reporting and generate insights for business-critical decisions.',
      'Independently led medium-complexity automation initiatives, improving operational efficiency.',
      'Gathered functional requirements and created user stories/wireframes for future-state system design.',
    ]
  },
  {
    company: 'Oasis Infobyte',
    role: 'Developer Intern',
    duration: 'Mar 2024 – Apr 2024',
    location: 'Vadodara',
    description: [
      'Performed functional testing to validate business requirements and improve workflows.',
      'Supported gap analysis between current and future states to identify inefficiencies.',
      'Assisted teams in aligning technical solutions with stakeholder expectations.',
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-black py-24 md:py-40 px-6 md:px-20">
      <div className="container mx-auto max-w-[1440px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-20"
        >
          <span className="text-[#FF5C00] text-[20px]">+</span>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-white">
            Experience
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-b border-[#333333] pb-12 flex flex-col md:flex-row justify-between gap-8"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <p className="text-[#FF5C00] font-medium mb-1">{exp.role}</p>
                <p className="text-[#999999] text-sm">{exp.duration} | {exp.location}</p>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-[#999999] text-lg leading-relaxed flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
