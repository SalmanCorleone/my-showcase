import { cubicBezier } from 'motion';
import { Variants } from 'motion/react';

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
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  },
};

const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  },
  out: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  },
};

const animationVariants = { textVariants, pulse, fadeInDown };

export default animationVariants;
