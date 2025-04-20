'use client'
import React from 'react'
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { Sora } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });

const Logout = () => {
    const router = useRouter();
  return (
    <button 
    className={`bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 hover:cursor-pointer text-white font-bold py-2 px-4 rounded ${SoraFont.className}`} 
    onClick={async() => {
        await signOut();
        router.push('/')
        window.location.reload();
    }}>
        Logout
    </button>
  );
}

export default Logout