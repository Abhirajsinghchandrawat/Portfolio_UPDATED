import React from "react";
import { Plus } from "lucide-react";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  additionalTagsCount?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  number,
  title,
  description,
  tags,
  additionalTagsCount,
}) => {
  return (
    <div className="relative w-full py-[120px] border-t border-[#1F1F1F] first:border-t-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Number Indicators (Floating Side Labels) */}
      <div className="absolute left-[8%] top-[120px] hidden lg:block">
        <div className="w-8 h-8 rounded-full bg-[#FF5C00] flex items-center justify-center text-[11px] font-bold text-white">
          {number}
        </div>
      </div>
      <div className="absolute right-[8%] bottom-[120px] hidden lg:block">
        <div className="w-8 h-8 rounded-full bg-[#FF5C00] flex items-center justify-center text-[11px] font-bold text-white">
          {number}
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[800px] w-full px-8 text-center flex flex-col items-center">
        <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tight mb-8 leading-[1.1]">
          {title}
        </h2>
        
        <p className="text-[#8A8A8A] text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[600px]">
          {description}
        </p>

        {/* Tags Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-5 py-2 rounded-full border border-[#1F1F1F] bg-[#0E0E0E] text-[11px] font-semibold uppercase tracking-wider text-white"
            >
              {tag}
            </div>
          ))}
          {additionalTagsCount && (
            <div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#0E0E0E] text-[11px] font-semibold uppercase tracking-wider text-white flex items-center gap-1">
              +{additionalTagsCount}
              <Plus size={10} strokeWidth={3} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceDetails: React.FC = () => {
  const services = [
    {
      number: "4",
      title: "AI-Custom Automations",
      description: "Train your brand guidelines into our tools to generate content, UI mocks, assets, and even microcopy in minutes.",
      tags: ["AI Design Automation", "Workflow Automation", "API-Driven Design", "GPT-Powered Design"],
      additionalTagsCount: 2,
    },
    {
      number: "3",
      title: "Web Design & Dev.",
      description: "Rapid prototyping with AI-generated layouts and component libraries. Built using Webflow, Framer, React, or custom stacks.",
      tags: ["AI-Enhanced UI", "Smart Web", "AI-Prototyping", "Framer Website"],
      additionalTagsCount: 3,
    },
    {
      number: "2",
      title: "AI Product Design",
      description: "We combine design thinking and AI assistance to accelerate UX flows and wireframes with user-tested precision.",
      tags: ["Web Apps", "Mobile Interfaces", "SaaS", "Lovable Product"],
      additionalTagsCount: 2,
    },
    {
      number: "1",
      title: "Brand Identity",
      description: "AI-powered iterations + Human-led intuition = Impactful brand DNA.",
      tags: ["Logo", "Visual", "Strategy", "Typography", "Brand Guidelines"],
      additionalTagsCount: 4,
    },
  ];

  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
            tags={service.tags}
            additionalTagsCount={service.additionalTagsCount}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;