'use client'

import { useEffect, useState } from 'react'
import CourseCard from '@/app/components/CourseCard'
import Navbar from '../Navbar'

interface Course {
  title: string
  url: string
  image: string
  description: string
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:8000/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'beginner ai courses', top_k: 6 })
        })
        const data = await res.json()
        setCourses(data.results)
      } catch (err) {
        console.error('Error fetching courses:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <>
    <Navbar />
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Recommended Courses</h1>
      {loading ? (
        <div className="flex flex-col h-full items-center justify-center py-20 text-center text-gray-600">
            <img src="/loading.png" alt="Loading..." className="mb-4 h-80 w-80" />
            <p className="text-lg font-medium text-black dark:text-white">Please wait while Soko sniffs out the perfect courses for you...</p>
        </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
            ))}
        </div>
        )}
    </div>
    </>
  )
}