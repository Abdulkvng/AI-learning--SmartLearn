import { motion } from 'framer-motion';
import React from 'react';

interface AchievementBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  icon,
  title,
  description,
  date,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
          <p className="text-sm text-blue-500 mt-2">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};