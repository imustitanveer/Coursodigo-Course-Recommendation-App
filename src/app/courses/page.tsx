'use client';

import { useEffect, useState } from 'react';
import CourseCard from '@/app/components/CourseCard';
import Navbar from '../Navbar';
import AuthenticatedRoute from '../components/AuthenticatedRoute';

const apiUrl = process.env.NEXT_PUBLIC_FAISS_API_URL || 'http://localhost:8000';

interface Course {
  title: string;
  url: string;
  image: string;
  description: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const savedQuery = localStorage.getItem('userSurveyQuery');
    if (savedQuery) {
      setQuery(savedQuery);
    } else {
      // ❌ No survey taken — prevent default query
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!query) return;

      try {
        const res = await fetch('${apiUrl}/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, top_k: 15 }), // ✅ increase result count
        });
        const data = await res.json();
        setCourses(data.results || []);
      } catch (err) {
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [query]);

  return (
    <AuthenticatedRoute>
      <Navbar />
      <div className="min-h-screen px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Recommended Courses</h1>

        {loading ? (
          <div className="flex flex-col h-full items-center justify-center py-20 text-center text-gray-600">
            <img src="/loading.png" alt="Loading..." className="mb-4 h-80 w-80" />
            <p className="text-lg font-medium text-black dark:text-white">
              Please wait while Soko sniffs out the perfect courses for you...
            </p>
          </div>
        ) : query && courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-200">
            No courses found. Please complete the survey first.
          </p>
        )}
      </div>
    </AuthenticatedRoute>
  );
}