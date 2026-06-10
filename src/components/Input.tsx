import React from 'react';
import { cn } from './Button';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full relative group">
        {label && <label className="font-mono text-xs tracking-widest text-[#e5e2e1]/70 uppercase group-focus-within:text-gold transition-colors">{label}</label>}
        <input
          ref={ref}
          className={cn(
            "w-full bg-transparent border-b border-charcoal py-3 px-0 text-white font-body text-lg focus:outline-none focus:border-gold transition-colors duration-300",
            className
          )}
          {...props}
        />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold opacity-0 group-focus-within:opacity-100 group-focus-within:box-glow-gold transition-opacity duration-300 pointer-events-none" />
      </div>
    );
  }
);
Input.displayName = 'Input';
