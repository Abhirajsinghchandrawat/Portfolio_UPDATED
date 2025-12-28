import React from "react";

/**
 * ServicesHeader Component
 * 
 * Clones the services introduction section based on pixel-perfect requirements.
 * Headline: "Future-ready design services, Enhanced by AI."
 * Label: "/SERVICES"
 * Service Count indicator: "4"
 */
const ServicesHeader: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-black pt-[100px] pb-[40px] md:pt-[120px] md:pb-[60px] lg:pt-[160px] lg:pb-[80px]"
      id="services"
    >
      <div className="container mx-auto px-8 md:px-16 max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-start justify-between relative">
          
          {/* Left Side: Technical Label */}
          <div className="mb-8 md:mb-0 md:w-[15%]">
            <h5 className="text-[12px] font-semibold tracking-[0.1em] text-[#8A8A8A] uppercase">
              /SERVICES
            </h5>
          </div>

            {/* Center: Large Headline */}
            <div className="md:w-[70%] lg:w-[65%]">
              <h1 className="text-[42px] leading-[1.1] md:text-[62px] lg:text-[72px] font-medium tracking-[-0.03em] text-white">
                <span className="block">Advanced Data & Tech</span>
                <span className="block italic md:not-italic">
                  Solutions, <span className="text-white">Powered</span>
                </span>
                <span className="block">by AI.</span>
              </h1>
            </div>

          {/* Right Side: Spacer/Service Count Badge */}
          <div className="hidden md:flex md:w-[15%] justify-end pt-4">
            <div className="flex items-center justify-center w-[28px] h-[34px] bg-[#FF5C00] rounded-[100px]">
              <span className="text-[12px] font-bold text-white tracking-widest leading-none">
                4
              </span>
            </div>
          </div>

          {/* Mobile Service Count Badge */}
          <div className="flex md:hidden mt-8">
            <div className="flex items-center justify-center w-[28px] h-[34px] bg-[#FF5C00] rounded-[100px]">
              <span className="text-[12px] font-bold text-white tracking-widest leading-none">
                4
              </span>
            </div>
          </div>
        </div>

        {/* Optional: Subtle divider or spacing line if visible in high-level design context */}
        <div className="w-full h-[1px] bg-[#1F1F1F] mt-16 md:mt-24 opacity-50" />
      </div>
    </section>
  );
};

export default ServicesHeader;