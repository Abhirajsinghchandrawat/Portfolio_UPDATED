"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * About Section for Arqos® Studio
 * Features a sticky video on the left and scrolling narrative text on the right.
 * Transitions between "Empowered by AI. Driven by Human Vision" and the mission statement.
 */
const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the entire about section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Opacity transitions for the two text blocks
  // First block fades out as second block fades in
  const firstTextBlockOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const secondTextBlockOpacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);

  // Video container vertical movement / subtle scaling if needed (kept fixed per design)
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={containerRef}
      id="studio"
      className="relative bg-black w-full"
      style={{ height: "300vh" }} // Sufficient height for the scroll experience
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        {/* Left Side: Sticky Media Container */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center p-16">
          <motion.div 
            className="relative w-full aspect-[4/5] max-w-[600px] overflow-hidden rounded-[12px] bg-[#141414]"
            style={{ scale: videoScale }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              src="https://framerusercontent.com/assets/FAqis5wUIipMQJc704i6yp6AbAE.mp4"
            />
          </motion.div>
        </div>

        {/* Right Side: Narrative Content */}
        <div className="w-full lg:w-1/2 h-full relative flex flex-col justify-center px-10 md:px-20 lg:pr-32 lg:pl-0">
          
          {/* First Phase: Tagline */}
          <motion.div 
            style={{ opacity: firstTextBlockOpacity }}
            className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:pr-32 lg:pl-0 pointer-events-none"
          >
             <div className="flex items-center gap-12 mb-8">
                <span className="font-display text-[16px] text-white font-medium tracking-tight">Arqos®</span>
                <span className="font-display text-[16px] text-white font-medium tracking-tight">©2025</span>
             </div>
             
             <div className="w-[60px] h-[1px] bg-[#333333] mb-12" />

               <h2 className="section-headline text-white leading-[1.05]">
                  <span className="text-[#999999] opacity-50 block mb-2">//</span>
                  <span className="block italic">Driven</span> 
                  <span className="block">by Data.</span>
                  <span className="block italic mt-4">Empowered</span> 
                  <span className="block">by Analytics.</span>
               </h2>
            </motion.div>

            {/* Second Phase: Mission Statement */}
            <motion.div 
              style={{ opacity: secondTextBlockOpacity }}
              className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:pr-32 lg:pl-0 pointer-events-none"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-accent text-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="small-caps text-white">About Me</span>
              </div>

              <h2 className="section-headline text-white leading-[1.1] max-w-[600px]">
                I specialize in transforming raw data into actionable insights — <span className="text-[#999999]">optimizing business efficiency through quantitative analysis.</span>
              </h2>
            </motion.div>

        </div>
      </div>

      {/* Mobile-only view fallback (non-sticky/simpler stack if responsive needs differ) */}
      {/* Note: The design instructions specify cloning the sticky effect perfectly */}
      
      {/* Progress Indicator Dots (Optional decorative elements from screenshots) */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pointer-events-none">
         <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20"></div>
         <div className="orange-pill !w-8 !h-8 !p-0 font-mono">4</div>
         <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20"></div>
      </div>
    </section>
  );
};

export default AboutSection;