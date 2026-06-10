import React from 'react';
import { cn } from './Button';

interface GlassChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const GlassChip: React.FC<GlassChipProps> = ({ label, active, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "glass-panel px-6 py-2 rounded-none transition-all duration-300 font-mono text-xs tracking-[0.1em] uppercase",
        active ? "border-gold text-gold bg-charcoal/50" : "text-[#e5e2e1] hover:border-gold/50 hover:text-gold",
        className
      )}
    >
      {label}
    </button>
  );
};
