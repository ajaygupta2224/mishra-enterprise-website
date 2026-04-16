import * as React from "react";
import { cn } from "@/src/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark" | "gold";
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 40, 
  showText = true,
  variant = "gold"
}) => {
  const colors = {
    light: "text-white",
    dark: "text-foreground",
    gold: "text-gold",
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div 
        style={{ width: size, height: size }} 
        className={cn("relative flex-shrink-0", colors[variant])}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E6AD" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6D3B" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Circle / Emblem */}
          <circle cx="50" cy="50" r="48" stroke="url(#goldGradient)" strokeWidth="2" filter="url(#glow)" />
          <path d="M10 70C10 70 30 85 50 85C70 85 90 70 90 70" stroke="url(#goldGradient)" strokeWidth="2" fill="none" />
          
          {/* Turf Base (Green area) */}
          <path 
            d="M15 70C15 70 30 80 50 80C70 80 85 70 85 70L80 55C80 55 65 65 50 65C35 65 20 55 20 55L15 70Z" 
            fill="#5D7052" 
            className="opacity-40"
          />

          {/* Cricket Stumps */}
          <g stroke="url(#goldGradient)" strokeWidth="1.5" filter="url(#glow)">
            <line x1="25" y1="35" x2="25" y2="65" />
            <line x1="30" y1="35" x2="30" y2="65" />
            <line x1="35" y1="35" x2="35" y2="65" />
            <line x1="24" y1="35" x2="36" y2="35" strokeWidth="1" />
          </g>

          {/* Goal Post */}
          <path 
            d="M60 65V40H85V65" 
            stroke="url(#goldGradient)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#glow)"
          />
          <path d="M60 40L70 30H90V55L85 65" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.5" />

          {/* Football / Soccer Ball */}
          <circle cx="50" cy="55" r="10" stroke="url(#goldGradient)" strokeWidth="1.5" fill="white" fillOpacity="0.1" filter="url(#glow)" />
          <path d="M50 45L53 49M50 45L47 49M50 65L53 61M50 65L47 61M40 55L44 53M40 55L44 57M60 55L56 53M60 55L56 57" stroke="url(#goldGradient)" strokeWidth="1" />

          {/* Turf Roll */}
          <ellipse cx="30" cy="75" rx="8" ry="4" stroke="url(#goldGradient)" strokeWidth="1.5" filter="url(#glow)" />
          <path d="M38 75L55 82" stroke="url(#goldGradient)" strokeWidth="1.5" />

          {/* Pipes (MS Fabrication) */}
          <g stroke="url(#goldGradient)" strokeWidth="1" filter="url(#glow)">
            <circle cx="70" cy="75" r="2" />
            <circle cx="75" cy="75" r="2" />
            <circle cx="80" cy="75" r="2" />
            <circle cx="72.5" cy="71.5" r="2" />
            <circle cx="77.5" cy="71.5" r="2" />
            <circle cx="75" cy="68" r="2" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn(
            "font-serif font-bold tracking-wider text-xl uppercase",
            variant === "gold" ? "text-gold" : colors[variant]
          )}>
            Mishra
          </span>
          <span className={cn(
            "font-sans font-bold tracking-[0.2em] text-[0.6rem] uppercase opacity-80",
            variant === "gold" ? "text-gold" : colors[variant]
          )}>
            Enterprises
          </span>
        </div>
      )}
    </div>
  );
};
