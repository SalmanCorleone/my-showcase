import { cubicBezier } from "motion";
import { Variants } from "motion/react";

const textVariants: Variants = {
  initial: {
    y: 0,
  },
  enter: (idx: number) => ({
    y: [0, -40],
    transition: {
      duration: 0.3,
      delay: 0.02 * idx,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  }),
  exit: (idx: number) => ({
    y: [0, 40],
    transition: {
      duration: 0.3,
      delay: 0.02 * idx,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  }),
};

export default textVariants;
