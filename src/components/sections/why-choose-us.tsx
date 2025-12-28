import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#EFEEEA] pt-40 pb-40 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 lg:col-span-4 self-start flex items-center gap-2">
            <span className="text-[#FF5C00] font-bold">+</span>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#666666]">
              Why Choose Arqos?
            </span>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-[40px] md:text-[64px] lg:text-[72px] leading-[0.9] tracking-[-0.05em] text-[#1A1A1A] font-medium">
              Clarity, Speed, and Intelligence — <br />
              <span className="text-[#999999]">Arqos Way</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-2 flex justify-end items-start mt-4 lg:mt-0">
            <div className="bg-[#FF5C00] text-white rounded-full w-8 h-10 flex items-center justify-center text-[14px] font-bold">
              4
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Infinite Iteration Card */}
          <div className="md:col-span-4 h-[440px] bg-black rounded-[24px] overflow-hidden relative group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/Vf3ocdJ7WB4QedImQUp8pRChE-3.jpg"
                alt="Infinite Iteration"
                fill
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#FF5C00] font-bold">+</span>
                <span className="text-white text-[12px] font-bold uppercase tracking-widest font-mono">Infinite Iteration</span>
              </div>
              <p className="text-[#999999] text-[18px] leading-relaxed max-w-[280px]">
                With our AI pipelines, we explore hundreds of design directions before your morning coffee. You get faster drafts, higher clarity, and no bottlenecks.
              </p>
            </div>
          </div>

          {/* Augmented Intelligence Card */}
          <div className="md:col-span-8 h-[440px] bg-white rounded-[24px] p-10 flex flex-col justify-between border border-transparent shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#FF5C00] font-bold">+</span>
              <span className="text-[#1A1A1A] text-[12px] font-bold uppercase tracking-widest font-mono">Augmented Intelligence</span>
            </div>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
               <p className="text-[#666666] text-[18px] leading-relaxed max-w-[320px] mb-2">
                Designers don't compete with AI — they collaborate. We enhance ideation, iterations, and insights with AI-assisted workflows to save 60-80% of time.
              </p>
              <div className="text-[120px] md:text-[160px] lg:text-[180px] font-medium leading-[0.8] tracking-tighter text-[#1A1A1A]">
                0%
              </div>
            </div>
          </div>

          {/* Brand Consistent Card */}
          <div className="md:col-span-7 h-[380px] bg-white rounded-[24px] p-10 flex flex-col justify-between border border-transparent shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#FF5C00] font-bold">+</span>
              <span className="text-[#1A1A1A] text-[12px] font-bold uppercase tracking-widest font-mono">Brand-Consistent, Every Time</span>
            </div>
            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
              <p className="text-[#666666] text-[18px] leading-relaxed max-w-[320px] mb-2">
                From design systems to creative assets, our AI keeps your brand consistent across every screen, pixel, and platform.
              </p>
              <div className="text-[100px] md:text-[140px] font-medium leading-[0.8] tracking-tighter text-[#1A1A1A]">
                14%
              </div>
            </div>
          </div>

          {/* Launch Faster Card */}
          <div className="md:col-span-5 h-[380px] bg-[#333333] rounded-[24px] p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[#FF5C00] font-bold">+</span>
                <span className="text-white text-[12px] font-bold uppercase tracking-widest font-mono">Launch 2x Faster</span>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-[100px] md:text-[140px] font-medium leading-[0.8] tracking-tighter text-white mb-6">
                2x
              </div>
              <p className="text-[#999999] text-[15px] text-center leading-relaxed max-w-[300px]">
                Our AI-accelerated sprint model shortens your timeline from months to weeks — while keeping feedback loops human and empathetic.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;