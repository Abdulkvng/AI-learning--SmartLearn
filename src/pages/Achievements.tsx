import { Award, BookOpen, Target, Trophy } from 'lucide-react';
import React from 'react';
import { AchievementBadge } from '../components/AchievementBadge';
import { PageHeader } from '../components/PageHeader';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "30-Day Streak",
      description: "Completed lessons for 30 consecutive days",
      date: "March 15, 2024"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Course Master",
      description: "Completed 5 full courses with excellent scores",
      date: "March 10, 2024"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Completed a course 2 weeks ahead of schedule",
      date: "March 5, 2024"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Contributor",
      description: "Helped 50 students in discussion forums",
      date: "February 28, 2024"
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Your Achievements"
        subtitle="Track your learning milestones and celebrate your progress"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementBadge key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};