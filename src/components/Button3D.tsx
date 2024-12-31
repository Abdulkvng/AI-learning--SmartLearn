import { motion } from 'framer-motion';
import React from 'react';

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button3D: React.FC<Button3DProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, translateY: -5 }}
      whileTap={{ scale: 0.95, translateY: 0 }}
      className={`
        relative px-8 py-4 rounded-xl font-semibold text-white
        bg-blue-400 
        before:absolute before:inset-0 
        before:bg-blue-300
        before:rounded-xl
        before:translate-y-1.5
        before:transition-transform
        before:z-[-1]
        hover:before:translate-y-2
        active:before:translate-y-0.5
        transition-all
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};