import theme, { PaletteType } from '@/utils/theme';
import { motion, useAnimate } from 'framer-motion';
import { useCallback } from 'react';

interface IBounceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: PaletteType[keyof PaletteType];
}

const BounceButton = ({ bg, children, ...props }: IBounceButtonProps) => {
  const [buttonRef, animate] = useAnimate();

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      props.onClick?.(e);
      animate(
        buttonRef.current,
        {
          y: [4, -2],
        },
        {
          type: 'spring',
          duration: 0.2,
          stiffness: 200,
        },
      );
    },
    [animate, buttonRef, props],
  );

  return (
    <button className="cursor-pointer relative" {...props} onClick={onButtonClick}>
      <div className="w-full h-full absolute top-1 rounded-xl" style={{ background: bg ?? theme.palette.lightBlue }} />
      <motion.div
        ref={buttonRef}
        className="bg-white border rounded-xl px-4 py-2 relative"
        // style={{ zIndex: 2 }}
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', duration: 0.2 }}
      >
        <span>{children}</span>
      </motion.div>
    </button>
  );
};

export default BounceButton;
