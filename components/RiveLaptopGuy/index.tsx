'use client';
import { useRive } from '@rive-app/react-canvas-lite';
import { AnimationScope, motion, useAnimate } from 'framer-motion';
import { stagger } from 'motion';
import { useEffect } from 'react';
import animationVariants, { EASE_SMOOTH } from '@/utils/animationVariants';
import theme from '@/utils/theme';

export default function RiveLaptopGuy() {
  const { RiveComponent } = useRive({
    src: './rive/laptop_guy.riv',
    stateMachines: 'State Machine',
    autoplay: true,
  });

  useEffect(() => {}, []);

  const [textRef1, animate1] = useAnimate();
  const [textRef2, animate2] = useAnimate();

  const getChar = (str: string) => {
    return str.split('').map((char, index) => (
      <motion.span
        key={`char_${index}`}
        custom={index}
        variants={animationVariants.textVariants}
        initial={'initial'}
        animate={'enter'}
      >
        {char}
      </motion.span>
    ));
  };

  const onMouseInteraction = (ref: AnimationScope<HTMLDivElement>, type: 'enter' | 'exit') => {
    if (!ref?.current) return;
    const animFunc = ref.current === textRef1.current ? animate1 : animate2;
    animFunc(
      'div .top-div span',
      { y: type === 'enter' ? [-40, 0] : [0, -40] },
      { duration: 0.3, delay: stagger(0.02), ease: EASE_SMOOTH },
    );
    animFunc(
      'div .bottom-div span',
      { y: type === 'enter' ? [-40, 0] : [0, -40] },
      { duration: 0.3, delay: stagger(0.02), ease: EASE_SMOOTH },
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[80vh]">
      {/* Left section */}
      <div className="flex items-center flex-1 py-6 px-6 md:justify-center">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-xl">Hey there!</h2>
          <h1 className="text-4xl">I&apos;m Salman 😇</h1>
          <h2 className="text-xl">A software engineer</h2>
          <h2 className="text-xl">with a passion for</h2>

          <div
            className="overflow-hidden h-10 cursor-pointer text-4xl"
            style={{ color: theme.palette.orange }}
            ref={textRef2}
            onMouseEnter={() => onMouseInteraction(textRef2, 'enter')}
            onMouseLeave={() => onMouseInteraction(textRef2, 'exit')}
          >
            <div className="flex top-div">{getChar('Interactive')}</div>
            <div className="flex bottom-div">{getChar('Animations')}</div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex justify-center md:justify-end px-4 md:px-6 items-center">
        <div className="md:w-[80vh] md:h-[80vh] lg:w-[70vh] lg:h-[70vh] w-[40vh] h-[40vh]">
          <RiveComponent className="w-full h-full cursor-none" />
        </div>
      </div>
    </div>
  );
}
