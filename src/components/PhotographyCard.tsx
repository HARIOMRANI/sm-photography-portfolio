import React from 'react';
import { cn } from './Button';

interface PhotographyCardProps {
  imageSrc: string;
  title: string;
  category?: string;
  className?: string;
}

export const PhotographyCard: React.FC<PhotographyCardProps> = ({ imageSrc, title, category, className }) => {
  return (
    <div className={cn("relative overflow-hidden group cursor-pointer bg-charcoal w-full h-[500px]", className)}>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      {/* 1px internal gold border on hover */}
      <div className="absolute inset-4 border border-transparent transition-colors duration-500 group-hover:border-gold/60 pointer-events-none z-10" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pitchblack/90 via-pitchblack/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 z-20">
        {category && <span className="text-gold font-mono text-xs tracking-widest uppercase mb-3">{category}</span>}
        <h3 className="text-white font-headline text-3xl font-medium">{title}</h3>
      </div>
    </div>
  );
};
