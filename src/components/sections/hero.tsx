"use client";

import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * 
 * Clones the Arqos® Studio hero section with:
 * - High-contrast profile image of a person with tech eyewear.
 * - Oversized metallic-textured "STUDIO" ticker in the background.
 * - "AI-Driven Studio®" headline.
 * - Scroll indicator and subheadline.
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[800px] md:h-[1080px] bg-black overflow-hidden flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24"
    >
      {/* 1. Behind everything: The metallic text ticker "STUDIO" */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none z-0">
        <div className="flex whitespace-nowrap overflow-hidden">
          {/* We animate this for a ticker effect as per design instructions */}
          <div className="flex animate-infinite-scroll gap-10 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative w-[800px] md:w-[1440px] h-[200px] md:h-[400px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/t6x4O3L4nPLO98SgFEaoOlGt4-2.webp"
                  alt="STUDIO Backdrop"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Layer: High-contrast profile image */}

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-[904px] h-[760px] translate-y-[-5%]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/gAOqQ7ashqfpKB5NgxNSCeq2ncc-1.webp"
            alt="Arqos Studio Model"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 3. Foreground Layer: Headlines and UI */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="hero-title text-white tracking-[-0.05em] uppercase m-0 leading-[0.85]">
            AI-Driven <br className="hidden md:block" /> Studio®
          </h1>
        </div>

        <div className="flex flex-col items-start md:items-end gap-10 md:text-right max-w-[320px]">
          <p className="text-[#999999] text-[18px] md:text-[20px] leading-[1.3] font-light">
            It’s not just a studio. It’s a design intelligence lab.
          </p>
          
          {/* Orange Scroll Indicator */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#FF5C00] flex items-center justify-center shadow-lg animate-bounce cursor-pointer">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .hero-title {
          font-size: clamp(60px, 12vw, 180px);
          font-family: var(--font-display);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;