'use client'

import Survey from '@/app/components/Survey' // Assuming your component is in /app/components
import Navbar from '../Navbar'

const SurveyPage = () => {
  const handleSurveySubmit = (responses: { [key: string]: string | string[] }) => {
    console.log("🧠 User Survey Response:", responses)
    // You could now:
    // → Generate a FAISS query
    // → Save to state / localStorage
    // → Redirect to a recommendations page
  }

  return (
    <>
    <Navbar />
    <main className="min-h-screen p-8 bg-white dark:bg-stone-900">
      <h1 className="text-2xl font-bold mb-6">Get Your Personalized Learning Plan</h1>
      <Survey onSubmit={handleSurveySubmit} />
    </main>
    </>
  )
}

export default SurveyPage