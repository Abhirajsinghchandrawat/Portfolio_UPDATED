import React from 'react';
import Image from 'next/image';

/**
 * ToolsStack Component
 * 
 * Clones the "Smart Tools" grid section from Arqos® Studio website.
 * Features a high-contrast layout with clean white cards and glass-morphism style tech icons.
 */

const tools = [
  {
    id: 1,
    name: "ChatGPT",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/DPFxhYPW0XbprHvSPPiofAyEs-7.png",
  },
  {
    id: 2,
    name: "Midjourney",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/cYdqiIKvQCCyDLjWvD6VmD5Q0-11.png",
  },
  {
    id: 3,
    name: "Framer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/VgXT9IploSRwV8MAivm5oA1Rq7M-12.png",
  },
  {
    id: 4,
    name: "Claude",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/MZysN06978sESBJJjwELC1RcXw-13.png",
  },
  {
    id: 5,
    name: "Linear",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/25mcdpj6GMk5TSq8ugRfSf6AkhQ-14.png",
  },
  {
    id: 6,
    name: "Relume",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/VgXT9IploSRwV8MAivm5oA1Rq7M-12.png", // Fallback to Framer as Relume looks similar in style
  }
];

export default function ToolsStack() {
  return (
    <section className="bg-[#f3f1ed] py-[120px] md:py-[160px] relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 max-w-[1440px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 md:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5c00] text-lg font-medium">+</span>
            <span className="text-[12px] font-semibold text-[#8a8a8a] tracking-[0.1em] uppercase">Stack</span>
          </div>

          <div className="md:ml-[-20%]">
            <h2 className="text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-[-0.03em] text-[#000000]">
              Smart Tools.
              <br />
              <span className="text-[#8a8a8a]">Stunning Results.</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center justify-center bg-[#ff5c00] text-white w-8 h-10 rounded-full text-[14px] font-bold">
            6
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#e5e3de] border border-[#e5e3de]">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-white flex items-center justify-center p-12 min-h-[300px] transition-colors duration-300 hover:bg-[#fafafa] relative group overflow-hidden"
            >
              {/* Glass-morphism Icon Wrapper */}
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                {/* Subtle shadow anchor */}
                <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75"></div>
                
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={120}
                  height={120}
                  className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                  priority={tool.id <= 3}
                />
              </div>
              
              {/* Top border decoration for the grid effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[#ff5c00]/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator */}
        <div className="flex md:hidden justify-center mt-8">
          <div className="flex items-center justify-center bg-[#ff5c00] text-white w-8 h-10 rounded-full text-[14px] font-bold">
            6
          </div>
        </div>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grainy-overlay"></div>
    </section>
  );
}