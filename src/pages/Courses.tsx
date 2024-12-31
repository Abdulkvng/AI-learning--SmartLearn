import { BookOpen, Clock, Search } from 'lucide-react';
import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { PageHeader } from '../components/PageHeader';

export const Courses: React.FC = () => {
  const courses = [
    {
      title: "Machine Learning Fundamentals",
      description: "Master the basics of ML algorithms and implementations",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      duration: "8 weeks",
      students: 1234,
      progress: 45
    },
    {
      title: "Advanced JavaScript Patterns",
      description: "Learn modern JavaScript design patterns and best practices",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      duration: "6 weeks",
      students: 856
    },
    {
      title: "Cloud Architecture",
      description: "Design scalable and resilient cloud solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      duration: "10 weeks",
      students: 2341
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Explore Courses"
        subtitle="Discover new skills and advance your career with our expert-led courses"
      />

      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full px-6 py-4 pl-12 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};