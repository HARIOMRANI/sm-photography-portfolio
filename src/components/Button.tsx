import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-8 py-3 transition-all duration-300 ease-in-out font-mono text-sm tracking-[0.1em] uppercase",
          variant === 'primary' && "bg-gold text-pitchblack hover:hover-gold-glow",
          variant === 'ghost' && "bg-transparent border border-gold/50 text-gold hover:border-gold hover:text-gold hover:bg-gold/5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
