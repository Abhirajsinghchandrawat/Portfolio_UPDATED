'use client';

import React from 'react';
import { Plus } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-[#000000] text-white py-[80px] md:py-[120px] lg:py-[160px] px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Typography & Discovery Link */}
          <div className="flex flex-col justify-between">
            <div className="max-w-[560px]">
              <h2 className="section-headline mb-6">
                Let&apos;s Talk.
                <span className="text-[#999999] block font-normal mt-2 leading-[1.2]">
                  we&apos;re here to design, build & scale with you.
                </span>
              </h2>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#333333] hover:bg-white hover:text-black transition-all duration-300 ease-in-out group"
              >
                <Plus className="w-4 h-4 text-[#ff5c00] group-hover:text-black" />
                <span className="small-caps text-[14px]">Book a Discovery Call</span>
              </a>
            </div>

            {/* Response Time Indicator (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 mt-24">
              <div className="orange-pill w-[42px] h-[42px] !p-0 !text-[14px]">
                24
              </div>
              <p className="text-[#999999] text-[16px] font-medium tracking-tight">
                We respond within 24 hours — usually faster.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="flex flex-col gap-10">
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <div className="group relative">
                <label className="small-caps mb-3 block text-[#999999] group-focus-within:text-white transition-colors">
                  Enter Name
                </label>
                <input 
                  type="text" 
                  placeholder="Jane Smith"
                  className="w-full bg-transparent border-b border-[#333333] py-4 focus:outline-none focus:border-white transition-colors placeholder:text-[#333333] text-[18px]"
                />
              </div>

              <div className="group relative">
                <label className="small-caps mb-3 block text-[#999999] group-focus-within:text-white transition-colors">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="jane@framer.com"
                  className="w-full bg-transparent border-b border-[#333333] py-4 focus:outline-none focus:border-white transition-colors placeholder:text-[#333333] text-[18px]"
                />
              </div>

              <div className="group relative">
                <label className="small-caps mb-3 block text-[#999999] group-focus-within:text-white transition-colors">
                  Message
                </label>
                <textarea 
                  rows={1}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-[#333333] py-4 focus:outline-none focus:border-white transition-colors placeholder:text-[#333333] text-[18px] resize-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-white text-black rounded-full py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#efeeea] transition-all duration-300"
                >
                  Submit
                </button>
                <p className="text-[12px] text-[#333333] mt-6 text-center leading-relaxed font-mono">
                  By submitting, you agree to our <a href="#" className="underline hover:text-[#999999]">Terms</a> and <a href="#" className="underline hover:text-[#999999]">Privacy Policy</a>.
                </p>
              </div>
            </form>
          </div>

          {/* Response Time Indicator (Mobile Only) */}
          <div className="flex lg:hidden items-center gap-4 mt-8">
            <div className="orange-pill w-[42px] h-[42px] !p-0 !text-[14px]">
              24
            </div>
            <p className="text-[#999999] text-[14px] font-medium tracking-tight">
              We respond within 24 hours — usually faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;