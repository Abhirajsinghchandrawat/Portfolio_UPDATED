import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[1080px] bg-black overflow-hidden flex flex-col justify-end px-16 pb-32"
      style={{
        backgroundColor: '#000000',
      }}
    >
      {/* Metallic "STUDIO" Background Ticker Area */}
      <div className="absolute top-[124px] left-0 w-full z-0 pointer-events-none opacity-50">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-slower">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0 px-4">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/t6x4O3L4nPLO98SgFEaoOlGt4-2.webp" 
                  alt="Studio Metallic" 
                  className="h-[246px] w-auto object-contain"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee-slower" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0 px-4">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/t6x4O3L4nPLO98SgFEaoOlGt4-2.webp" 
                  alt="" 
                  className="h-[246px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Central Portrait Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-[904px] h-[760px] top-[-40px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/gAOqQ7ashqfpKB5NgxNSCeq2ncc-1.webp"
            alt="Arqos Studio Model"
            width={904}
            height={760}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 flex justify-between items-end w-full max-w-[1792px] mx-auto">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-white font-medium tracking-tight"
            style={{ 
              fontSize: '72px', 
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-display)' 
            }}
          >
            AI-Driven Studio®
          </h1>
        </div>

        <div className="flex gap-48 items-center">
          <p 
            className="max-w-[280px] text-[#8a8a8a] leading-[1.4]"
            style={{ 
              fontSize: '20px', 
              fontWeight: '400',
              fontFamily: 'var(--font-sans)',
              textAlign: 'right'
            }}
          >
            It’s not just a studio. It’s a design intelligence lab.
          </p>

          {/* Scroll Indicator */}
          <div className="flex-shrink-0">
            <div className="w-[34px] h-[52px] bg-[#ff5c00] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="animate-bounce"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grainy Texture Overlay */}
      <div className="grainy-overlay absolute inset-0 pointer-events-none z-[5]" />

      <style jsx global>{`
        @keyframes marquee-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-slower {
          animation: marquee-slower 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;