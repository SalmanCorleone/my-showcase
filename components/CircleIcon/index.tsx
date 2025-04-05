import { PaletteType } from '@/utils/theme';
import React from 'react';

interface CircleIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement<HTMLSpanElement>;
  bg: PaletteType[keyof PaletteType];
}

const CircleIcon = ({ icon, bg, ...rest }: CircleIconProps) => {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: bg }} {...rest}>
      {React.cloneElement(icon, { className: 'text-white text-2xl' })}
    </div>
  );
};

export default CircleIcon;
