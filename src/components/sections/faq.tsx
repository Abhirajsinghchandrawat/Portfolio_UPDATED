"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes Arqos Studio different from traditional design agencies?",
    answer: "We blend human creativity with AI-enhanced workflows to deliver faster, smarter, and scalable design — without compromising quality or vision.",
  },
  {
    question: "Do you offer custom packages or just fixed pricing?",
    answer: "We offer both. While we have standardized packages for common needs, we also build custom roadmaps tailored to unique enterprise requirements and complex product ecosystems.",
  },
  {
    question: "Can I try your services before committing to a full project?",
    answer: "Yes, we often start with a design sprint or a paid discovery phase to ensure alignment and demonstrate our AI-powered capabilities before moving into long-term partnerships.",
  },
  {
    question: "Which industries do you work with?",
    answer: "We specialize in tech-forward industries including SaaS, Web3, AI startups, Fashion Tech, and E-commerce brands looking for a future-noir aesthetic edge.",
  },
  {
    question: "What industries do you work with?",
    answer: "Our focus is primarily on digital-native brands and companies looking to integrate AI into their brand experience and product interfaces.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Spacer - following the grid layout of the site */}
        <div className="hidden lg:block lg:col-span-6"></div>

        {/* FAQ Content Area */}
        <div className="lg:col-span-6 w-full space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "border border-[#1F1F1F] rounded-[1.5rem] overflow-hidden transition-all duration-300 ease-in-out bg-[#0E0E0E]",
                  isOpen ? "bg-[#0E0E0E]" : "bg-[#0E0E0E]"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className="text-[16px] md:text-[18px] font-medium text-white tracking-tight pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#8A8A8A] transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#8A8A8A] transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0">
                      <p className="text-[#8A8A8A] text-[15px] md:text-[16px] leading-relaxed max-w-[90%]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Plus Icon as used in the high level design system */}
      <div className="max-w-[1440px] mx-auto mt-24 flex justify-between items-center opacity-20">
         <div className="flex items-center space-x-2">
            <div className="w-8 h-[1px] bg-[#1F1F1F]"></div>
         </div>
      </div>
    </section>
  );
};

export default FAQAccordion;