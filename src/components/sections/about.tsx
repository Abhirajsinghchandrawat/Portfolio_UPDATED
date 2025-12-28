import React from 'react';

const AboutUsSection = () => {
  return (
    <section 
      className="relative w-full bg-[#000000] overflow-hidden" 
      id="about-us"
      style={{ minHeight: '160vh' }} // Increased height to allow for sticky scroll feel
    >
      <div className="container mx-auto px-8 md:px-16 flex flex-col pt-[120px] md:pt-[160px]">
        {/* Sticky Scroll Container */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Media & Sticky Content */}
          <div className="md:col-span-6 sticky top-[160px] h-[300px] md:h-[500px] w-full z-10">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#0e0e0e]">
              <video 
                src="https://framerusercontent.com/assets/FAqis5wUIipMQJc704i6yp6AbAE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale opacity-80"
              />
              {/* Grainy Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')]" />
            </div>
          </div>

          {/* Right Column: Flowing Text content */}
          <div className="md:col-span-6 flex flex-col space-y-[100px] md:space-y-[160px] pb-[160px]">
            
            {/* First Text Block: Tagline */}
            <div className="flex flex-col space-y-12">
              <div className="flex items-center space-x-12">
                <span className="text-white font-medium text-[20px] tracking-tight">Arqos®</span>
                <span className="text-[#8a8a8a] font-medium text-[20px] tracking-tight">©2025</span>
              </div>
              
              <div className="w-[80px] h-[1px] bg-[#1f1f1f]" />
              
              <h2 className="text-white text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-[-0.03em]">
                <span className="text-[#8a8a8a] block mb-2">// Empowered by AI.</span>
                Driven by Human Vision.
              </h2>
            </div>

            {/* Second Text Block: Intro */}
            <div className="flex flex-col space-y-12">
              <div className="flex items-center space-x-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0V14M0 7H14" stroke="#FF5C00" strokeWidth="2"/>
                </svg>
                <span className="text-[#8a8a8a] text-[12px] font-semibold tracking-[0.15em]">ABOUT US</span>
              </div>
              
              <h2 className="text-white text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-[-0.03em]">
                We specialize in delivering digital products — 
                <span className="text-[#8a8a8a]"> intelligently optimized through AI.</span>
              </h2>
            </div>
            
          </div>
        </div>
      </div>

      {/* Background Subtle Gradient Mask */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutUsSection;