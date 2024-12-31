import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variant === 'primary' 
          ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
        px-6 py-3 rounded-xl font-medium transition-colors
        shadow-sm hover:shadow-md
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};