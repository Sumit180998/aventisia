// components/ui/button.tsx
import React from 'react';
import { cn } from '../lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  disabled?: boolean;
};

const buttonVariants = {
  primary: 'bg-[#4F46E5] text-white hover:bg-[#4338CA]',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  ghost: 'text-gray-700 hover:bg-gray-100',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all',
        buttonVariants[variant],
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
