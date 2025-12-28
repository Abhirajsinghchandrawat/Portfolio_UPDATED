import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black overflow-hidden pt-20 pb-10">
      {/* Container for the footer content */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-12 md:space-y-0 pb-20">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-accent text-xl">+</span>
              <a 
                href="tel:33334554355" 
                className="text-white hover:text-accent transition-colors duration-300 font-sans text-sm md:text-base tracking-tight"
              >
                (333)34554355
              </a>
            </div>
            <div className="flex flex-col">
                <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono mb-2">Let's Talk</span>
                <a 
                  href="mailto:abhirajsinghchandrawat@gmail.com" 
                  className="text-white hover:text-accent transition-colors duration-300 text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter"
                >
                  abhirajsinghchandrawat@gmail.com
                </a>
              </div>
            </div>

          {/* Right Side: Links Grid */}
          <div className="flex flex-row space-x-12 md:space-x-24 lg:space-x-32">
            {/* Navigation */}
            <div className="flex flex-col space-y-4">
              <h6 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Navigation</h6>
              <ul className="flex flex-col space-y-2">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Services', href: '#services' },
                  { name: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="group flex items-center text-white/80 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {item.name}
                      <ArrowUpRight className="ml-1 w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-4">
              <h6 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Social Media</h6>
              <ul className="flex flex-col space-y-2">
                {[
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abhirajsinghchandrawat/' },
                  { name: 'GitHub', href: 'https://github.com/abhirajsingh' },
                  { name: 'Twitter', href: 'https://twitter.com' },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-white/80 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {item.name}
                      <ArrowUpRight className="ml-1 w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center py-8 border-t border-white/5 space-y-4 md:space-y-0 md:space-x-6 text-[10px] uppercase font-mono tracking-widest text-muted-foreground">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="hidden md:inline">•</span>
          <a href="/terms" className="hover:text-white transition-colors">Term of Service</a>
          <span className="hidden md:inline">•</span>
          <span className="cursor-default">Created by Future.Things</span>
        </div>
      </div>

      {/* Background Large Branded Graphic Section */}
      <div className="relative w-full flex justify-center mt-[-100px] pointer-events-none select-none">
        {/* The large "Arqos" text background with blur effect as per design instruction */}
        <div className="relative w-full h-[300px] md:h-[600px] flex justify-center items-end overflow-hidden">
          {/* Using a text element for Arqos to match the oversized typography aspect */}
          <h2 className="text-[25vw] leading-[0.8] font-bold text-[#1a1a1a]/30 tracking-tighter transform translate-y-1/4">
            Arqos®
          </h2>
          
          {/* Blur Overlay - smoky effect mentioned in components_styles */}
          <div 
            className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"
            style={{ 
              backdropFilter: 'blur(40px)', 
              maskImage: 'linear-gradient(to top, black, transparent)' 
            }}
          />
        </div>
      </div>

      {/* Logo Asset Fallback / Enhancement */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center opacity-40 mix-blend-screen filter blur-[60px] pointer-events-none">
         <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/C6MefHZjn1GFq3zmR884wfY7c-21.webp"
            alt="Arqos Footer Graphic"
            width={1200}
            height={600}
            className="object-contain"
            priority
         />
      </div>

      {/* Floating Action Button (Optional Re-creation of "Made in Framer" style element if needed for pixel-perfect site feel) */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end space-y-2">
         {/* Utility buttons as seen in screenshot */}
      </div>
    </footer>
  );
};

export default Footer;