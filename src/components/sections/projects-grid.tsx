import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    title: 'Redshift®',
    category: 'Automobile / EV',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/SNY17MQPOkF9RIR6qu8BRqnzJ0-8.webp',
    alt: 'Redshift automotive project visualization'
  },
  {
    title: 'TrendLoop',
    category: 'E-commerce',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/6MwSsXfwoEkkxTGKWehYhSUDi2A-9.webp',
    alt: 'TrendLoop e-commerce surf product design'
  },
  {
    title: 'Lüma Skin',
    category: 'Skincare / Beauty Tech',
    year: '2025',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/745V4K7BWcG3fjRepbREKQexYs-10.jpg',
    alt: 'Lüma Skin beauty tech packaging'
  },
  {
    title: 'Fabrica',
    category: 'Fashion Tech',
    year: '2024',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/09f0a84a-4c96-475d-be87-7924d61c1644-arqos-framer-ai/assets/images/rFhoo2LPGRQ4TuIko8FrotyZo-15.jpg',
    alt: 'Fabrica fashion tech photography'
  }
];

const ProjectsGrid: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="bg-[#f3f1ed] py-[120px] md:py-[160px] px-8 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32 relative">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <Plus className="w-3 h-3 text-[#ff5c00]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#8a8a8a]">
              Projects
            </span>
          </div>

          <div className="md:ml-24">
            <h2 className="text-[48px] md:text-[72px] font-medium leading-[1.1] text-black tracking-[-0.03em]">
              AI-crafted <br />
              <span className="text-[#8a8a8a]">design </span>
              highlights
            </h2>
          </div>

          <div className="absolute top-0 right-0 hidden md:block">
            <div className="bg-[#ff5c00] text-white w-9 h-9 flex items-center justify-center rounded-full text-[12px] font-bold">
              6
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-[24px] bg-white">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Visual Label Overlay (Simulated from screenshot) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h3 className="text-white text-[24px] md:text-[32px] font-medium tracking-tight mix-blend-difference drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Title and Metadata */}
              <div className="mt-6 flex justify-between items-center px-4 md:px-6 py-4 bg-white rounded-[16px] border border-[#1f1f1f]/5">
                <div className="flex items-center gap-3">
                  <Plus className="w-3 h-3 text-[#ff5c00]" />
                  <span className="text-[14px] md:text-[16px] font-medium text-black">
                    {project.category}
                  </span>
                </div>
                <span className="text-[12px] font-medium text-[#8a8a8a]">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;