import React from 'react';

const ServicesIntro = () => {
  return (
    <section 
      className="bg-black text-white py-[160px] md:py-[200px] overflow-hidden" 
      id="services"
      style={{
        backgroundColor: '#000000',
      }}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1440px]">
        {/* Services Header Wrapper */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16 md:gap-0">
          
          {/* Left: Label */}
          <div className="md:w-1/4">
            <h5 
              className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#999999]"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                lineHeight: '1.2'
              }}
            >
              /SERVICES
            </h5>
          </div>

          {/* Center: Main Headline */}
          <div className="md:w-1/2 flex flex-col">
            <h1 
              className="section-headline leading-[1.05] tracking-[-0.05em] font-medium"
              style={{
                fontSize: 'clamp(40px, 6vw, 84px)',
                fontWeight: 500,
                letterSpacing: '-0.05em',
                lineHeight: 1.1,
                maxWidth: '800px'
              }}
            >
              <span className="block text-white">Future-ready design</span>
              <span className="block text-white">
                services, <span className="text-[#999999]">Enhanced</span>
              </span>
              <span className="block text-[#999999]">by AI.</span>
            </h1>
          </div>

          {/* Right: Indicator */}
          <div className="md:w-1/4 flex md:justify-end items-start md:pt-4">
            <div 
              className="bg-[#FF5C00] text-white rounded-full flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FF5C00',
              }}
            >
              <span 
                className="font-bold text-[14px]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '14px',
                  fontWeight: 700
                }}
              >
                4
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;