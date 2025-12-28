import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white pt-24 pb-12 overflow-hidden flex flex-col items-center grainy-overlay">
      {/* Upper Footer Content */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-40">
        
        {/* Left Section: Contact Info */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="text-accent-orange text-lg">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <span className="text-sm font-medium tracking-tight">(333)34554355</span>
          </div>
        </div>

        {/* Center Section: Main CTA */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <p className="text-[#8A8A8A] text-2xl font-normal leading-tight">Let&apos;s Talk</p>
          <a 
            href="mailto:hello@arqos.studio" 
            className="text-4xl md:text-5xl font-medium tracking-tight hover:text-accent-orange transition-colors duration-300"
          >
            hello@arqos.studio
          </a>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-label text-[12px]">Navigation</p>
          <ul className="flex flex-col gap-3">
            {['Home', 'Studio', 'Project', 'Pricing', 'Journal'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="group flex items-center gap-1 text-[16px] text-white hover:text-accent-orange transition-colors duration-200">
                  {item}
                  <ArrowUpRight className="w-3 h-3 translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Far Right Section: Social Media */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-label text-[12px]">Social Media</p>
          <ul className="flex flex-col gap-3">
            {['Twitter', 'Linkedin', 'Instagram'].map((social) => (
              <li key={social}>
                <a href="#" className="group flex items-center gap-1 text-[16px] text-white hover:text-accent-orange transition-colors duration-200">
                  {social}
                  <ArrowUpRight className="w-3 h-3 translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive Blurred Typography Background */}
      <div className="relative w-full flex justify-center items-center pointer-events-none select-none h-[300px] md:h-[500px]">
        {/* The blurred shadow effect layer */}
        <div 
          className="absolute inset-0 flex items-center justify-center translate-y-20 opacity-40 blur-[40px] md:blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)'
          }}
        ></div>
        
        {/* The main logo text */}
        <h2 
          className="text-[20vw] md:text-[25vw] font-bold tracking-tighter leading-none text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
            backgroundClip: 'text',
          }}
        >
          Arqos
        </h2>

        {/* Fog/Mist effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[300px] bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
      </div>

      {/* Bottom Legal Section */}
      <div className="container relative z-30 pt-12 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-white cursor-pointer transition-colors">
            PRIVACY POLICY
          </p>
          <span className="w-1 h-1 bg-[#1F1F1F] rounded-full hidden md:block"></span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-white cursor-pointer transition-colors">
            TERM OF SERVICE
          </p>
          <span className="w-1 h-1 bg-[#1F1F1F] rounded-full hidden md:block"></span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8A8A]">
            CREATED BY FUTURE.THINGS
          </p>
        </div>

        {/* Sticky Buttons Replacement for bottom right absolute layout if needed */}
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2">
            <button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-neutral-200 transition-colors">
              Use For Free <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-neutral-200 transition-colors">
            <span className="w-3 h-3 bg-black rounded-sm"></span> Made in Framer
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;