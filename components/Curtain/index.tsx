'use client';
import { wait } from '@/utils';
import { EASE_SMOOTH } from '@/utils/animationVariants';
import theme from '@/utils/theme';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Curtain = () => {
  const [welcomeRef, animate] = useAnimate();

  useEffect(() => {
    const welcomeAnim = async () => {
      await animate(welcomeRef.current, { y: [12, 0], opacity: [0, 1] }, { duration: 0.3, ease: EASE_SMOOTH });
      await wait(600);
      await animate(welcomeRef.current, { y: [0, -12], opacity: [1, 0] }, { duration: 0.3, ease: EASE_SMOOTH });
    };

    welcomeAnim();
  }, [animate, welcomeRef]);

  return (
    <div className="flex w-screen h-screen pointer-events-none absolute z-60">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <motion.div
            key={`curtain_section_${idx}`}
            className="flex-1 origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [1, 0], opacity: [1, 0] }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 1.5 + 0.1 * idx }}
            style={{ background: theme.palette.lightGrey }}
          />
        ))}

      <div className="flex w-screen h-screen pointer-events-none absolute items-center justify-center">
        <motion.div
          ref={welcomeRef}
          // initial={{ y: 12, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.3, ease: EASE_SMOOTH }}
        >
          <p className="text-5xl">Welcome!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Curtain;
