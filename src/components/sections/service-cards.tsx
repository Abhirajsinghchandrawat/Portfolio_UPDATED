"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  plusCount?: number;
  videoSrc?: string;
  children?: React.ReactNode;
  markerPos?: { top?: string; bottom?: string; left?: string; right?: string };
}

const ServiceCard = ({
  number,
  title,
  description,
  tags,
  plusCount,
  videoSrc,
  children,
  markerPos,
}: ServiceCardProps) => {
  return (
    <div className="relative w-full border-t border-[#333333] pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden flex flex-col md:flex-row gap-12 group">
      {/* Numerical Marker Pill */}
      {markerPos && (
        <div
          className="absolute z-10 hidden lg:flex items-center justify-center bg-[#ff5c00] text-white text-[11px] font-bold rounded-full w-[26px] h-[34px]"
          style={{ ...markerPos }}
        >
          {number}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 z-10 px-6 md:px-10 lg:pl-32">
        <div className="max-w-[800px]">
          <h2 className="text-[48px] md:text-[64px] lg:text-[84px] font-medium tracking-[-0.05em] leading-[1.1] mb-12">
            {title}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-[18px] md:text-[20px] text-[#999999] leading-[1.6] mb-8 max-w-[480px]">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#141414] text-[#999999] border border-[#333333] px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                {plusCount && (
                  <span className="bg-[#141414] text-[#999999] border border-[#333333] px-3 py-2 rounded-full text-[11px] font-bold inline-flex items-center gap-1">
                    {plusCount} <Plus size={10} strokeWidth={3} />
                  </span>
                )}
              </div>
            </div>

            {/* Accordion/Extra Content Slot */}
            {children && <div className="flex-1 w-full max-w-[500px]">{children}</div>}
          </div>
        </div>
      </div>

      {/* Background Video Decoration (Right Side) */}
      {videoSrc && (
        <div className="relative md:absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[45%] h-[300px] md:h-[60%] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
           <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your primary area of expertise?",
      a: "I specialize in Data Analytics, Python programming, and building automated dashboards using SQL, Power BI, and Tableau.",
    },
    {
      q: "Have you worked with real-world business data?",
      a: "Yes, during my tenure at Powerplay (SaaS), I automated supply and PO tracking dashboards, improving reporting efficiency by 45%.",
    },
    {
      q: "What certifications do you hold?",
      a: "I am an Oracle Certified Analytics Cloud 2025 Professional and a participant in the McKinsey Accelerate Program (2025 Cohort).",
    },
    {
      q: "Are you familiar with Agile and Project Management?",
      a: "Absolutely. I have experience in requirement gathering, creating BRDs, and working within Agile frameworks to deliver data-backed solutions.",
    },
  ];

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-[#141414] border border-[#333333] rounded-[12px] overflow-hidden transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="text-[14px] font-medium text-white leading-tight">
              {faq.q}
            </span>
            {openIndex === i ? (
              <X size={18} className="text-[#999999] flex-shrink-0" />
            ) : (
              <Plus size={18} className="text-[#999999] flex-shrink-0" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[13px] text-[#999999] leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ServiceCards() {
  return (
    <section className="bg-black text-white w-full border-b border-[#333333]" id="services-detailed">
      {/* 
        Numerical markers on the left/right are positioned relative to the container 
        based on the original design screenshots 
      */}
      
      {/* Data Analytics & Programming */}
      <ServiceCard
        number="1"
        title="Data Analytics & Programming"
        description="Transforming complex datasets into actionable insights using SQL, Python, and R. Expert in Data Lifecycle Management and Quantitative Analysis."
        tags={["SQL", "PYTHON", "DATA VISUALIZATION", "AGENTIC AI", "TABLEAU"]}
        plusCount={2}
        markerPos={{ top: "100px", left: "64px" }}
      />

      {/* Productivity & Collaboration */}
      <ServiceCard
        number="2"
        title="Productivity & Collaboration"
        description="Streamlining business processes using Agile methodologies, Alteryx, and effective Stakeholder Management."
        tags={["AGILE", "ALTERYX", "PROJECT MANAGEMENT", "BRDS"]}
        plusCount={3}
        markerPos={{ top: "100px", left: "64px" }}
      />

      {/* Business & Problem-Solving with Accordion */}
      <ServiceCard
        number="3"
        title="Business & Problem-Solving"
        description="Conducting market research and gap analysis to identify inefficiencies and recommend data-backed solutions."
        tags={["BUSINESS ANALYSIS", "MARKET RESEARCH", "INDUSTRY INSIGHTS", "GAP ANALYSIS"]}
        plusCount={2}
        markerPos={{ top: "100px", left: "64px" }}
        videoSrc="https://framerusercontent.com/assets/YGCRLOYUT2hM3utfP2hTzMt2k6Y.mp4"
      >
        <FAQAccordion />
      </ServiceCard>

      {/* Numerical marker "5" left side */}
      <div className="relative h-0">
         <div className="absolute left-16 top-0 z-10 hidden lg:flex items-center justify-center bg-[#ff5c00] text-white text-[11px] font-bold rounded-full w-[26px] h-[34px]">
          5
        </div>
      </div>

      {/* Brand Identity */}
      <ServiceCard
        number="1"
        title="Brand Identity"
        description="AI-powered iterations + Human-led intuition = Impactful brand DNA."
        tags={["LOGO", "VISUAL", "STRATEGY", "TYPOGRAPHY", "BRAND GUIDELINES"]}
        plusCount={4}
        videoSrc="https://framerusercontent.com/assets/0CBJSOpWddSTBZFdv4bYgmyVAog.mp4"
        markerPos={{ top: "100px", left: "64px" }}
      />

      {/* Numerical marker "3" right side floating at bottom of stack */}
      <div className="relative h-0">
         <div className="absolute right-16 bottom-[100px] z-10 hidden lg:flex items-center justify-center bg-[#ff5c00] text-white text-[11px] font-bold rounded-full w-[26px] h-[34px]">
          3
        </div>
      </div>

    </section>
  );
}