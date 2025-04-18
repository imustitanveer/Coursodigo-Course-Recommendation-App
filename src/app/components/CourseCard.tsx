'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google';
import { Poppins } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const Sora2Font = Sora({ subsets: ['latin'], weight: '700' });
const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

interface CourseCardProps {
  title: string
  url: string
  image: string
  description: string
}

const CourseCard: React.FC<CourseCardProps> = ({ title, url, image, description }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div
        onClick={() => setExpanded(true)}
        className="cursor-pointer border backdrop-blur-2xl rounded-xl shadow-md transition-all duration-300 overflow-hidden w-full max-w-md mx-auto"
      >
        <Image
          src={image || '/images/default-course.jpg'}
          alt={title}
          width={480}
          height={270}
          className="object-cover w-full h-auto"
        />
        <div className="p-4 space-y-2">
          <h3 className={`text-lg font-semibold line-clamp-2 ${PoppinsFont.className}`}>{title}</h3>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg max-w-2xl w-full p-6 overflow-hidden max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >

            <Image
              src={image || '/images/default-course.jpg'}
              alt={title}
              width={640}
              height={360}
              className="object-cover w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
            <div className="h-64 overflow-y-auto pr-2">
              <p className={`text-gray-700 dark:text-white/80 text-sm leading-relaxed whitespace-pre-line ${SoraFont.className}`}>
                {description}
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-black dark:text-white hover:underline text-sm font-md font-semibold mt-4 ${Sora2Font.className}`}
            >
              View Course
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" />
                <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" />
                <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default CourseCard