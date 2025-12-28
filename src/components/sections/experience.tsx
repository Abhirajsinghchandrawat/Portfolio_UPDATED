"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Consultant / Data Analyst Intern",
    company: "Powerplay (SaaS)",
    location: "Bangalore",
    duration: "June 2025 – Present",
    contributions: [
      "Automated supply and PO tracking dashboards using SQL, Power BI, and Excel, improving reporting efficiency by 45%.",
      "Built demand forecasting models using Python (Pandas, NumPy) and Excel, achieving 85%+ accuracy.",
      "Developed issue-tracking dashboards using Superset and SQL, reducing recurring client issues by 80%.",
      "Collaborated with operations and product teams to translate business problems into analytical solutions."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Slash Mark IT Solutions",
    location: "Vadodara",
    duration: "Dec 2024 – May 2025",
    contributions: [
      "Conducted daily 4M and 5S audits, ensuring compliance with operational and safety standards.",
      "Designed Excel- and PowerPoint-based dashboards, improving stakeholder visibility across 3 business units.",
      "Analyzed operational bottlenecks and delivered data-backed process improvement recommendations.",
      "Balanced cost optimization with service quality, safety, and delivery metrics."
    ]
  },
  {
    role: "Summer Intern",
    company: "ByteXL",
    location: "Vadodara",
    duration: "May 2024 – June 2024",
    contributions: [
      "Used Python, R, and SQL to automate reporting and generate insights for business-critical decisions.",
      "Independently led medium-complexity automation initiatives, improving data accuracy.",
      "Gathered and documented functional requirements; created user stories and wireframes."
    ]
  },
  {
    role: "Developer Intern",
    company: "Oasis Infobyte",
    location: "Vadodara",
    duration: "Mar 2024 – Apr 2024",
    contributions: [
      "Performed functional testing to validate business requirements and improve workflows.",
      "Supported gap analysis between current and future states to identify inefficiencies.",
      "Assisted teams in aligning technical solutions with stakeholder expectations."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-black py-24 md:py-40 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-baseline mb-20"
        >
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <span className="text-[#FF5C00] text-lg font-bold">+</span>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-white/50">
              Experience
            </span>
          </div>
          <h2 className="text-[48px] md:text-[64px] font-medium tracking-tight text-white leading-none">
            Professional <span className="text-[#999999] italic">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-white/10 last:border-0"
            >
              <div className="flex flex-col">
                <span className="text-[#999999] font-mono text-sm mb-2">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF5C00] transition-colors">
                  {exp.role}
                </h3>
                <span className="text-white/60 text-lg font-medium">{exp.company}</span>
                <span className="text-white/40 text-sm mt-2">{exp.location}</span>
              </div>
              
              <ul className="flex flex-col gap-4">
                {exp.contributions.map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                    <span className="text-[#FF5C00] mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
