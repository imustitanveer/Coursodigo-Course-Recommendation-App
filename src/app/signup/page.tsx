'use client'

import Navbar from '../Navbar'
import Signup from '../components/Signup'

export default function SignupPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center p-6">
      <Signup />
    </div>
    </>
  )
}