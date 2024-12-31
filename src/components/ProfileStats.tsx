import { motion } from 'framer-motion';
import React from 'react';

interface StatItemProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-2xl shadow-sm"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  </motion.div>
);

export const ProfileStats: React.FC<{ stats: StatItemProps[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};