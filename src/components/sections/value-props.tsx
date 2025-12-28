import React from 'react';
import Image from 'next/image';

const ValuePropsSection = () => {
  return (
    <section className="bg-[#F3F1ED] py-[120px] md:py-[160px] px-6 md:px-[64px] font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-20 items-start">
            <div className="col-span-12 md:col-span-3 flex items-center gap-2">
              <span className="text-[#FF5C00] text-xl font-light">+</span>
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#000000]/60">Why Choose Me?</span>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-[48px] md:text-[64px] leading-[1.1] font-medium tracking-tight text-[#1a1a1a]">
                Clarity, Speed, and <br />
                Intelligence — <br />
                <span className="text-[#000000]/40">My Way</span>
              </h2>
            </div>

          <div className="col-span-12 md:col-span-3 flex justify-end">
             <div className="w-[32px] h-[48px] bg-[#FF5C00] rounded-full flex items-center justify-center text-white text-[12px] font-bold">
               4
             </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* Top Left Card: Narrative Image */}
          <div className="col-span-12 md:col-span-4 min-h-[480px] relative rounded-[24px] overflow-hidden bg-black text-white p-10 flex flex-col justify-between">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/Vf3ocdJ7WB4QedImQUp8pRChE-3.jpg"
              alt="Infinite Iteration"
              fill
              className="object-cover opacity-60"
            />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-[#FF5C00] text-lg">+</span>
              <span className="text-[16px] font-medium">Infinite Iteration</span>
            </div>
            <div className="relative z-10">
              <p className="text-[16px] leading-[1.5] text-white/80 max-w-[280px]">
                With our AI pipelines, we explore hundreds of design directions before your morning coffee. You get faster drafts, higher clarity, and no bottlenecks.
              </p>
            </div>
          </div>

          {/* Top Right Card: Metric 0% */}
          <div className="col-span-12 md:col-span-8 min-h-[480px] bg-white rounded-[24px] p-10 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#FF5C00] text-lg">+</span>
              <span className="text-[16px] font-medium text-[#1a1a1a]">Augmented Intelligence</span>
            </div>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
              <p className="text-[16px] leading-[1.5] text-[#000000]/60 max-w-[280px] order-2 md:order-1">
                Designers don&apos;t compete with AI — they collaborate. We enhance ideation, iterations, and insights with AI-assisted workflows to save 60–80% of time.
              </p>
              <div className="text-[120px] md:text-[160px] font-light leading-none tracking-tighter text-[#1a1a1a] order-1 md:order-2">
                0%
              </div>
            </div>
          </div>

          {/* Bottom Left Card: Metric 22% */}
          <div className="col-span-12 md:col-span-8 min-h-[480px] bg-white rounded-[24px] p-10 flex flex-col justify-between">
             <div className="flex items-center gap-2">
              <span className="text-[#FF5C00] text-lg">+</span>
              <span className="text-[16px] font-medium text-[#1a1a1a]">Brand-Consistent, Every Time</span>
            </div>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
              <p className="text-[16px] leading-[1.5] text-[#000000]/60 max-w-[280px] order-2 md:order-1">
                From design systems to creative assets, our AI keeps your brand consistent across every screen, pixel, and platform.
              </p>
              <div className="text-[120px] md:text-[160px] font-light leading-none tracking-tighter text-[#1a1a1a] order-1 md:order-2">
                22%
              </div>
            </div>
          </div>

          {/* Bottom Right Card: Metric 2X */}
          <div className="col-span-12 md:col-span-4 min-h-[480px] bg-[#1a1a1a] rounded-[24px] p-10 flex flex-col justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="text-[#FF5C00] text-lg">+</span>
              <span className="text-[16px] font-medium">Launch 2x Faster</span>
            </div>
            <div className="flex flex-col items-center flex-grow justify-center py-6">
               <div className="text-[120px] md:text-[140px] font-light leading-none tracking-tighter">
                2X
              </div>
            </div>
            <div>
              <p className="text-[14px] leading-[1.5] text-white/50 text-center mx-auto max-w-[240px]">
                Our AI-accelerated sprint model shortens your timeline from months to weeks — while keeping feedback loops human and empathetic.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;