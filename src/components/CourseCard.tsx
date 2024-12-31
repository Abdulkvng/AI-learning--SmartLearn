import { Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from './Button';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  progress?: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  duration,
  students,
  progress,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {students.toLocaleString()} students
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-blue-500 h-2 rounded-full"
            />
          </div>
        )}
        
        <Button variant="primary" className="w-full bg-blue-500 hover:bg-blue-600">
          {progress !== undefined ? 'Continue Learning' : 'Start Course'}
        </Button>
      </div>
    </motion.div>
  );
};