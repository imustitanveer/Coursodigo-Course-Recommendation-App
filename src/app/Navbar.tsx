import Link from 'next/link'
import { Outfit } from 'next/font/google';
import { Sora } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });

const OutfitFont = Outfit({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
    return (
        <>
        <div className="flex bg-[#E76F51]">
            <div className="flex justify-start gap-2 items-center p-4 w-1/2">
                <img src="/coursodigo.png" alt="Coursodigo" className="w-12 h-12" />
                <h1 className={`font-bold text-3xl text-white ${OutfitFont.className}`}>
                    {' '}
                    <Link href="/">Corsódigo</Link>
                </h1>
            </div>
            <div className="flex justify-end items-center p-4 w-1/2 gap-2">
                <button className={`bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white font-bold py-2 px-4 rounded ${SoraFont.className}`}>
                {' '}
                <Link href="/login">Login</Link>
                </button>
                <button className={`bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white font-bold py-2 px-4 rounded ${SoraFont.className}`}>
                {' '}
                <Link href="/signup">Signup</Link>
                </button>
            </div>
        </div>
        </>
    )
}