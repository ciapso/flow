// src/app/common/components/Button.tsx
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-200 text-black hover:bg-gray-300';

  return (
    <button className={clsx(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
