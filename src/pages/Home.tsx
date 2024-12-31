import { ArrowRight, BookOpen, Trophy } from 'lucide-react';
import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FeaturedSection } from '../components/FeaturedSection';
import { LearningPathSection } from '../components/LearningPathSection';

export const Home: React.FC = () => {
  const courses = [
    {
      title: "Introduction to AI",
      description: "Learn the fundamentals of Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      progress: 65
    },
    {
      title: "Web Development Masterclass",
      description: "Master modern web development techniques",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      progress: 32
    },
    {
      title: "Data Science Essentials",
      description: "Explore the world of data analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      progress: 89
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center mb-12 bg-blue-50 py-16 rounded-3xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Welcome to Your Learning Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          SmartLearn adapts to your unique learning style, helping you master new skills 
          at your own pace with personalized courses and real-time feedback.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600">
            Start Learning
          </Button>
          <Button variant="secondary" className="bg-white">
            Take a Tour
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Why Choose SmartLearn?</h2>
        <FeaturedSection />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Continue Learning"
          description="Pick up where you left off in Introduction to AI"
          progress={65}
        >
          <Button className="w-full">
            Resume Course <ArrowRight className="ml-2 inline-block" />
          </Button>
        </Card>

        <Card
          title="Weekly Achievement"
          description="You're on a 5-day learning streak!"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
              <span className="text-lg font-medium">5 Days</span>
            </div>
            <Button variant="secondary">View All</Button>
          </div>
        </Card>
      </section>

      <section>
        <LearningPathSection />
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recommended Courses</h2>
          <Button variant="secondary">
            View All <BookOpen className="ml-2 inline-block" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
              progress={course.progress}
            >
              <Button variant="secondary" className="w-full">
                Continue Learning
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};