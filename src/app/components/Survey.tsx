// app/components/Survey.tsx
'use client'

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

interface QuestionOption {
  label: string;
  image?: string;
}

interface Question {
  id: string;
  question: string;
  type: 'single' | 'multi' | 'text';
  options?: QuestionOption[];
  max?: number;
}

interface SurveyResponses {
  [key: string]: string | string[];
}

interface SurveyProps {
  onSubmit: (responses: SurveyResponses) => void;
}

const questions: Question[] = [
  {
    id: 'topics',
    question: 'What would you like to learn about? (Select up to 2)',
    type: 'multi',
    options: [
      {label: 'Machine Learning', image: '/coding.png'},
      {label: 'Data Science', image: '/data-science.png'},
      {label: 'Software Development', image: '/app-development.png'},
      {label: 'Cybersecurity', image: '/hacker.png'},
      {label: 'Cloud & DevOps', image: '/cloud-server.png'},
      {label: 'UI/UX Design', image: '/ux.png'},
      {label: 'Project Management', image: '/project-manager.png'},
      {label: 'Business / Marketing', image: '/planning.png'},
      {label: 'Creative Skills', image: '/inspiration.png'},
      {label: "I'm not sure yet", image: '/question.png'}
    ],
    max: 2
  },
  {
    id: 'skillLevel',
    question: "What's your current skill level in this area?",
    type: 'single',
    options: [
      {label: 'Absolute beginner', image: '/newbie.png'},
      {label: 'Some experience', image: '/stairs.png'},
      {label: 'Intermediate', image: '/intermediate-level.png'},
      {label: 'Advanced', image: '/rating.png'}
    ]
  },
  {
    id: 'learningStyle',
    question: 'What type of learning experience do you prefer?',
    type: 'single',
    options: [
      {label: 'Hands-on / project-based', image: '/gear.png'},
      {label: 'Theory-focused / academic', image: '/education.png'},
      {label: 'Career-focused / certifications', image: '/certificate.png'},
      {label: 'Quick lessons / bite-sized', image: '/quick.png'}
    ]
  },
  {
    id: 'timePerWeek',
    question: 'How much time can you dedicate weekly?',
    type: 'single',
    options: [
      {label: 'Less than 2 hour', image: '/2-am.png'},
      {label: '2-5 hours', image: '/clock-with-white-face.png'},
      {label: '5-10 hours', image: '/schedule.png'},
      {label: '10+ hours', image: '/hourglass.png'}
    ]
  },
  {
    id: 'goal',
    question: "What's your learning goal?",
    type: 'text'
  }
];

const Survey: React.FC<SurveyProps> = ({ onSubmit }) => {
  const [responses, setResponses] = useState<SurveyResponses>({});
  const [step, setStep] = useState<number>(0);

  const handleSelect = (qid: string, option: string, isMulti = false) => {
    setResponses(prev => {
      if (isMulti) {
        const prevSelected = (prev[qid] as string[]) || [];
        const exists = prevSelected.includes(option);
        const updated = exists ? prevSelected.filter(o => o !== option) : [...prevSelected, option];
        return {
          ...prev,
          [qid]: updated.slice(0, questions.find(q => q.id === qid)?.max || 2)
        };
      }
      return { ...prev, [qid]: option };
    });
  };

  const handleTextChange = (qid: string, value: string) => {
    setResponses(prev => ({ ...prev, [qid]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    onSubmit(responses);
    localStorage.setItem('hasCompletedSurvey', 'true');
  };

  const currentQuestion = questions[step];

  return (
    <div className="p-6 mx-auto">
      <div className="mb-6">
        <h2 className={`text-xl font-semibold mb-2 text-black dark:text-white ${PoppinsFont.className}`}>{currentQuestion.question}</h2>
        {currentQuestion.type === 'text' ? (
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={responses[currentQuestion.id] as string || ''}
            onChange={e => handleTextChange(currentQuestion.id, e.target.value)}
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {currentQuestion.options?.map((option) => {
              const selected =
                (Array.isArray(responses[currentQuestion.id]) &&
                  (responses[currentQuestion.id] as string[]).includes(option.label)) ||
                responses[currentQuestion.id] === option.label;

              return (
                <button
                  key={option.label}
                  onClick={() =>
                    handleSelect(currentQuestion.id, option.label, currentQuestion.type === 'multi')
                  }
                  className={`w-auto h-auto flex flex-col items-center justify-center text-sm text-center p-2 border rounded-xl transition ${
                    selected ? 'bg-black text-white' : 'bg-white text-black border-black'
                  }`}
                >
                  {option.image && (
                    <img src={option.image} alt={option.label} className="w-12 h-12 mb-2 object-contain" />
                  )}
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className="py-2 px-4 disabled:opacity-50 group"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-black dark:text-white group-hover:text-[#E9C46A] group-hover:cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="6 2 18 12 6 22" transform="matrix(-1 0 0 1 24 0)" />
          </svg>
        </button>

        {step < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="py-2 px-4 group"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-black dark:text-white group-hover:text-[#E76F51] group-hover:cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17,12,5,21V3Z" />
            </svg>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-[#2A9D8F] text-white py-2 px-4 rounded-full hover:bg-[#2A9D8F]/90 hover:cursor-pointer"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Survey;