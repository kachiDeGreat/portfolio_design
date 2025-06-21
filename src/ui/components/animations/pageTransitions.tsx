import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

// Updated fade-only animation variants
export const pageVariants = {
  initial: {
    opacity: 0, // Start fully transparent
  },
  in: {
    opacity: 1, // Fade in to fully visible
  },
  out: {
    opacity: 0, // Fade out to transparent
  },
};

// Transition settings for smooth fade
export const pageTransition: Transition = {
  type: "tween",
  ease: "easeInOut", // Smoother easing for fades
  duration: 0.5, // Half-second transition
};

interface MotionDivProps {
  children: ReactNode;
}

export const MotionDiv = ({ children }: MotionDivProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
