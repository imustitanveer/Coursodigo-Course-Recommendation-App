'use client';

import Survey from '@/app/components/Survey';
import Navbar from '../Navbar';
import { Poppins } from 'next/font/google';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import { useRouter } from 'next/navigation';

const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

const SurveyPage = () => {
  const router = useRouter();

  const handleSurveySubmit = async (responses: { [key: string]: string | string[] }) => {
    // ✅ 1. Format structured string for FAISS
    const formatted = Object.entries(responses)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: ${value.join(', ')}`;
        }
        return `${key}: ${value}`;
      })
      .join('; ');

    // ✅ 2. Save it for later use
    localStorage.setItem('userSurveyQuery', formatted);

    // ✅ 3. Optional: Send to FAISS backend
    try {
      const res = await fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: formatted }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch course recommendations');
      }

      const data = await res.json();
      localStorage.setItem('courseRecommendations', JSON.stringify(data));
    } catch (err) {
      console.error('🛑 Error fetching recommendations:', err);
    }

    // ✅ 4. Redirect to /courses
    router.push('/courses');
  };

  return (
    <AuthenticatedRoute>
      <Navbar />
      <main className="min-h-screen p-8 bg-white dark:bg-stone-900">
        <h1 className={`text-4xl font-bold mb-6 ${PoppinsFont.className}`}>
          Get Your Personalized Learning Plan
        </h1>
        <Survey onSubmit={handleSurveySubmit} />
      </main>
    </AuthenticatedRoute>
  );
};

export default SurveyPage;