import React from 'react';
import { Sparkles, Target, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const FeaturedSection: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Learning",
      description: "AI-powered system adapts to your learning style and pace"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Learn together with peers and get help when needed"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Engage with dynamic lessons and real-world projects"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};