'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Sora } from 'next/font/google';
import { Poppins } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const Sora2Font = Sora({ subsets: ['latin'], weight: '700' });
const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Logging in with:', { email, password })
  }

  return (
    <>
    < Navbar />
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="mx-auto w-full md:w-1/3 p-6 md:p-20 rounded-xl space-y-4 bg-[#E76F51] text-white">
        <h2 className={`text-4xl font-semibold ${PoppinsFont.className}`}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`w-full p-2 pr-10 border rounded bg-white b-2 text-black ${SoraFont.className}`}
          required
        />
        <div className="relative w-full">
        <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`w-full p-2 pr-10 border rounded bg-white b-2 text-black ${SoraFont.className}`}
            required
        />
        <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer"
        >
            {showPassword ? <EyeSlashIcon className="w-5 h-5 text-stone-400" /> : <EyeIcon className="w-5 h-5 text-stone-400" />}
        </button>
        </div>
        <button type="submit" className={`w-full bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white py-2 rounded hover:cursor-pointer ${SoraFont.className}`}>
          Login
        </button>
        <p className={`text-sm ${SoraFont.className}`}>
          Don’t have an account?{' '}
          <Link href="/signup" className={`text-white font-bold hover:underline ${Sora2Font.className}`}>Sign up</Link>
        </p>
      </form>
    </div>
    </>
  )
}