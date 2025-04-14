'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

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
      <form onSubmit={handleSignup} className="mx-auto w-1/3 p-20 rounded-xl space-y-4 bg-[#E76F51]">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <div className="relative w-full">
        <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 pr-10 border rounded"
            required
        />
        <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer"
        >
            {showPassword ? <EyeSlashIcon className="w-5 h-5 text-white" /> : <EyeIcon className="w-5 h-5 text-white" />}
        </button>
        </div>
        <button type="submit" className="w-full bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white py-2 rounded hover:cursor-pointer">
          Sign Up
        </button>
        <p className="text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-white font-bold hover:underline">Login</Link>
        </p>
      </form>
    </div>
    </>
  )
}