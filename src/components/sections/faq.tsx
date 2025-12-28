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
    question: "What specific data analysis services do you provide?",
    answer: "I specialize in end-to-end data solutions, including exploratory data analysis, predictive modeling, dashboard development (Power BI/Tableau), and business process optimization through quantitative insights.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "I adhere to strict data governance standards, ensuring all analysis is performed in secure environments with anonymized data where necessary, following industry best practices for data integrity.",
  },
  {
    question: "Can you work with large-scale datasets or real-time data?",
    answer: "Yes, I have experience working with massive datasets using SQL, Python, and cloud-based data warehouses. I also implement real-time monitoring solutions for dynamic business environments.",
  },
  {
    question: "What industries do you have experience in?",
    answer: "My expertise spans across Finance, E-commerce, Supply Chain, and HR Analytics, providing tailored insights that drive efficiency and growth in tech-forward sectors.",
  },
  {
    question: "How do we get started on a project together?",
    answer: "We typically start with a discovery call to understand your data challenges and objectives, followed by a detailed roadmap outlining the analysis phases and expected outcomes.",
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