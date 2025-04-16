'use client'

import { useEffect, useState } from 'react'
import CourseCard from '@/app/components/CourseCard'

interface Course {
  title: string
  url: string
  image: string
  description: string
}

export default function FeaturedCourses() {
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
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Recommended Courses</h1>
      {loading ? (
        // Empty cards with flashing animation
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 animate-pulse rounded-xl w-full h-80"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      )}
    </div>
  )
}