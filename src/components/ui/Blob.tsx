import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface BlobProps {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
}

export const Blob: React.FC<BlobProps> = ({ 
  className, 
  color = "bg-primary/20", 
  delay = 0,
  duration = 10
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className={cn(
        "absolute blur-3xl blob-radius pointer-events-none",
        color,
        className
      )}
    />
  );
};
