import { cubicBezier } from 'motion';

import { Variants } from 'motion/react';

export const EASE_SMOOTH = cubicBezier(0.76, 0, 0.24, 1);

const textVariants: Variants = {
  initial: {
    y: 0,
  },
  enter: (idx: number) => ({
    y: [0, -40],
    transition: {
      duration: 0.3,
      delay: 0.02 * idx,
      ease: EASE_SMOOTH,
    },
  }),
  exit: (idx: number) => ({
    y: [0, 40],
    transition: {
      duration: 0.3,
      delay: 0.02 * idx,
      ease: EASE_SMOOTH,
    },
  }),
};

const pulse: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  pulse: {
    scale: [1, 3],
    opacity: [1, 0],
    transition: {
      duration: 0.5,
      ease: EASE_SMOOTH,
    },
  },
  goBack: {
    scale: 1,
    opacity: 0,
    transition: {
      duration: 0.1,
      // ease: EASE_SMOOTH,
    },
  },
};

const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: [0, 1],
    y: [10, 0],
    transition: {
      duration: 0.5,
      ease: EASE_SMOOTH,
    },
  },
  out: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      ease: EASE_SMOOTH,
    },
  },
};

const animationVariants = { textVariants, pulse, fadeInDown };

export default animationVariants;
