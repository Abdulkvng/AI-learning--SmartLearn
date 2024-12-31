import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PathStepProps {
  number: number;
  title: string;
  description: string;
}

const PathStep: React.FC<PathStepProps> = ({ number, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start space-x-4"
  >
    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
      {number}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export const LearningPathSection: React.FC = () => {
  const steps = [
    {
      title: "Assessment",
      description: "Take a quick assessment to determine your current skill level"
    },
    {
      title: "Custom Path",
      description: "Get a personalized learning path based on your goals"
    },
    {
      title: "Learn & Practice",
      description: "Complete interactive lessons and hands-on projects"
    },
    {
      title: "Track Progress",
      description: "Monitor your progress and earn certificates"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Your Learning Journey</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <PathStep 
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      <div className="mt-8 text-blue-500 flex items-center cursor-pointer hover:underline">
        Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </div>
  );
};