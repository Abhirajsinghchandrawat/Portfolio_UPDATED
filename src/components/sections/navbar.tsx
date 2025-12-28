import React from 'react';

const Navbar = () => {
  const navLinks = [
    { label: 'Studio', href: '#studio', number: '1.0' },
    { label: 'Projects', href: '#projects', number: '2.0' },
    { label: 'Pricing', href: '#pricing', number: '3.0' },
    { label: 'Journal', href: '#journal', number: '4.0' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] glass-nav px-8 py-6 flex items-center justify-between">
      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <span 
              className="text-[10px] font-semibold text-text-secondary tracking-widest transition-colors group-hover:text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.number}
            </span>
            <span 
              className="text-[13px] font-medium text-white tracking-wide"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Grid Menu Button */}
      <div className="flex items-center">
        <button 
          className="flex items-center justify-center w-[84px] h-[36px] bg-[#0E0E0E] border border-[#1F1F1F] rounded-sm hover:bg-[#1F1F1F] transition-all duration-300 active:scale-95"
          aria-label="Menu"
        >
          <div className="grid grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={i} 
                className="w-[2.5px] h-[2.5px] bg-white rounded-full opacity-90"
              />
            ))}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;