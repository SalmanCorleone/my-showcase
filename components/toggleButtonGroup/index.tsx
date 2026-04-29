import React from 'react';

interface ToggleButtonGroupProps {
  options: {
    value: string;
    icon: React.ReactNode;
    title: string;
  }[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ToggleButtonGroup = ({ options, activeValue, onChange, className = '' }: ToggleButtonGroupProps) => {
  return (
    <div className={`flex gap-1 bg-white/10 cursor-pointer ${className}`}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-2 py-1 rounded cursor-pointer border border-gray-300 ${
            activeValue === opt.value ? 'font-medium bg-lime text-white' : 'bg-white text-gray-600 hover:text-black'
          } ${!opt.icon ? 'text-sm capitalize' : 'p-1.5'}`}
          title={opt.title}
        >
          {opt.icon || opt.value}
        </button>
      ))}
    </div>
  );
};
