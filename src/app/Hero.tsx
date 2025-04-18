import Link from 'next/link'
import { Epilogue } from 'next/font/google';
import { Sora } from 'next/font/google';

const EpilogueFont = Epilogue({ subsets: ['latin'], weight: '400' });
const SoraFont = Sora({ subsets: ['latin'], weight: '400' });

export default function Hero () {
    return (
        <>
        <div className={`bg-[#E9C46A] h-auto grid grid-cols-1 md:grid-cols-2 p-10 ${EpilogueFont.className}`}>
            <div className="">
                <h1 className="text-4xl md:text-6xl font-bold text-black md:ms-20">The Best Place To Learn</h1>
                <h1 className="text-4xl md:text-5xl font-bold text-black md:ms-20 mb-5">Just For You</h1>
                <p className={`text-md text-black md:ms-20 mb-5 ${SoraFont.className}`}>Sign Up and take a quick survey to receive personalized course recommendations and improve over time.</p>
                <button className={`bg-[#E76F51] hover:bg-[#E76F51]/90 text-white py-2 px-4 rounded-full ms-20 ${SoraFont.className}`}>
                {' '}
                <Link href="/signup">Sign Up To Take The Survey</Link>
                </button>
            </div>
            <div className="mt-0 mx-auto hidden md:block">
                <img src="/HeroImage.png" alt="Coursodigo" className="w-80 h-80"></img>
            </div>
        </div>
        </>
    );
}