'use client';

import Link from 'next/link';
import { Outfit } from 'next/font/google';
import { Sora } from 'next/font/google';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import Logout from './components/Logout';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const OutfitFont = Outfit({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <div className="flex bg-[#E76F51]">
      <div className="flex justify-start gap-2 items-center p-4 w-1/2">
        <img src="/coursodigo.png" alt="Coursodigo" className="w-12 h-12" />
        <h1 className={`font-bold text-3xl text-white ${OutfitFont.className}`}>
          <Link href={isLoggedIn ? '/courses' : '/'}>Corsódigo</Link>
        </h1>
      </div>

      <div className="flex justify-end items-center p-4 w-1/2 gap-2">
        {isLoggedIn === null ? null : isLoggedIn ? (
          <Logout />
        ) : (
          <Link
            href="/signup"
            className={`bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white font-bold py-2 px-4 rounded ${SoraFont.className}`}
          >
            Login or Signup
          </Link>
        )}
      </div>
    </div>
  );
}