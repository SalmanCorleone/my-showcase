import { PaletteType } from '@/utils/theme';

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
  iconColor?: PaletteType[keyof PaletteType];
}

const IconWithText = ({ icon, text, iconColor }: IconWithTextProps) => {
  return (
    <div key={text} className="flex flex-col items-center p-3 gap-2 rounded">
      <p className="text-2xl" style={{ color: iconColor }}>
        {icon}
      </p>
      <p className="text-sm text-center">{text}</p>
    </div>
  );
};

export default IconWithText;
