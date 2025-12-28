import React from 'react';
import { Plus } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="bg-black text-white py-[120px] md:py-[160px] px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Info */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] mb-12">
              Let&apos;s Talk.<br />
              <span className="text-[#8A8A8A]">we&apos;re here to design, build & scale with you.</span>
            </h2>

            <div className="flex flex-col gap-10">
              <a 
                href="#" 
                className="inline-flex items-center gap-3 w-fit px-6 py-4 rounded-full border border-[#1F1F1F] hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Plus className="w-4 h-4 text-[#FF5C00] group-hover:text-black" />
                <span className="text-[14px] font-semibold tracking-wide uppercase">Book a Discovery Call</span>
              </a>

              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white">24</span>
                </div>
                <p className="text-[#8A8A8A] text-[16px]">
                  We respond within 24 hours — usually faster.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <form className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 group">
                <label className="text-[12px] font-semibold text-[#8A8A8A] uppercase tracking-[0.1em]">
                  Enter Name
                </label>
                <input 
                  type="text" 
                  placeholder="Jane Smith"
                  className="bg-transparent border-b border-[#1F1F1F] py-4 text-[18px] outline-none focus:border-white transition-colors placeholder:text-[#333]"
                />
              </div>

              <div className="flex flex-col gap-3 group">
                <label className="text-[12px] font-semibold text-[#8A8A8A] uppercase tracking-[0.1em]">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="jane@framer.com"
                  className="bg-transparent border-b border-[#1F1F1F] py-4 text-[18px] outline-none focus:border-white transition-colors placeholder:text-[#333]"
                />
              </div>

              <div className="flex flex-col gap-3 group">
                <label className="text-[12px] font-semibold text-[#8A8A8A] uppercase tracking-[0.1em]">
                  Message
                </label>
                <textarea 
                  rows={1}
                  placeholder="Your Message"
                  className="bg-transparent border-b border-[#1F1F1F] py-4 text-[18px] outline-none focus:border-white transition-colors placeholder:text-[#333] resize-none"
                />
              </div>

              <div className="mt-4">
                <button 
                  type="submit"
                  className="w-full bg-white text-black py-6 rounded-[12px] text-[16px] font-bold tracking-tight hover:bg-[#FF5C00] hover:text-white transition-all duration-500 uppercase"
                >
                  Submit
                </button>
                <p className="text-[12px] text-[#8A8A8A] mt-6 leading-relaxed">
                  By submitting, you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Agency Contact Details (Optional from Design Instruction context) */}
        <div className="mt-[120px] pt-[60px] border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="flex items-center gap-3">
              <Plus className="w-4 h-4 text-[#FF5C00]" />
              <span className="text-[18px] font-medium tracking-tight whitespace-nowrap">(333)34554355</span>
           </div>
           
           <div className="flex flex-col items-start md:items-center">
              <span className="text-[20px] text-[#8A8A8A] mb-1">Let&apos;s Talk</span>
              <a href="mailto:hello@arqos.studio" className="text-[24px] md:text-[32px] font-medium hover:text-[#FF5C00] transition-colors">
                hello@arqos.studio
              </a>
           </div>

           <div className="hidden lg:block w-[100px]"></div>
        </div>
      </div>
    </section>
  );
}