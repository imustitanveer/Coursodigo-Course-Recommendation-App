'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import Signup from '../components/Signup'
import { Sora } from 'next/font/google';
import { Poppins } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const Sora2Font = Sora({ subsets: ['latin'], weight: '700' });
const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signing up with:', { email, password })
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center p-6">
      <Signup />
    </div>
    </>
  )
}