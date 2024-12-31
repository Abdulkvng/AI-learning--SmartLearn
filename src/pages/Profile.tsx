import { BookOpen, GraduationCap, Trophy, Clock } from 'lucide-react';
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProfileStats } from '../components/ProfileStats';

export const Profile: React.FC = () => {
  const stats = [
    {
      label: "Courses Completed",
      value: 12,
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      label: "Hours Learned",
      value: 186,
      icon: <Clock className="w-6 h-6" />
    },
    {
      label: "Achievements",
      value: 24,
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Your Profile"
        subtitle="Track your progress and manage your learning journey"
      />

      <ProfileStats stats={stats} />

      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            "Completed Introduction to AI course",
            "Earned Quick Learner badge",
            "Started Web Development Masterclass",
            "Achieved 30-day learning streak"
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-600 p-3 rounded-lg hover:bg-blue-50"
            >
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};