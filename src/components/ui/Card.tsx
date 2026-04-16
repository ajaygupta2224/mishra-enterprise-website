import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/src/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 1, hoverEffect = true, children, ...props }, ref) => {
    const radii = {
      1: "rounded-[2rem] rounded-tl-[4rem]",
      2: "rounded-[2rem] rounded-br-[4rem]",
      3: "rounded-[3rem] rounded-tr-[5rem] rounded-bl-[4rem]",
      4: "rounded-[2.5rem] rounded-tr-[4rem]",
      5: "rounded-[2rem] rounded-bl-[5rem]",
      6: "rounded-[3rem] rounded-br-[6rem]",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, rotate: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "bg-white/80 border border-border/50 shadow-soft p-8 relative overflow-hidden",
          radii[variant],
          className
        )}
        {...props}
      >
        {/* Subtle noise texture for the card specifically */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
