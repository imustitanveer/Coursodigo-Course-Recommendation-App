import { Sora } from 'next/font/google';
import { Poppins } from 'next/font/google';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const PoppinsFont = Poppins({ subsets: ['latin'], weight: '700' });

export default function WhyUs () {
    return (
        <>
        <h1 className={`text-4xl mb-6 ms-6 mt-4 ${PoppinsFont.className}`}>Why Choose Coursodigo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            <div className="flex flex-col p-6 bg-[#BC4749] rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                <h1 className={`text-2xl text-white mb-4 ${PoppinsFont.className}`}>Personalized</h1>
                <p className={`text-lg text-white ${SoraFont.className}`}>Your learning path is unique, and so are your course recommendations.</p>
            </div>
            <div className="flex flex-col p-6 bg-[#E76F51] rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                <h1 className={`text-2xl text-white mb-4 ${PoppinsFont.className}`}>Dynamic</h1>
                <p className={`text-lg text-white ${SoraFont.className}`}>The more you interact, the smarter our recommendations get.</p>
            </div>
            <div className="flex flex-col p-6 bg-[#F4A261] rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                <h1 className={`text-2xl text-white mb-4 ${PoppinsFont.className}`}>Convenient</h1>
                <p className={`text-lg text-white ${SoraFont.className}`}>Save time by getting only the most relevant course suggestions.</p>
            </div>
            <div className="flex flex-col p-6 bg-[#E9C46A] rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                <h1 className={`text-2xl text-white mb-4 ${PoppinsFont.className}`}>Data-driven</h1>
                <p className={`text-lg text-white ${SoraFont.className}`}>Powered by advanced AI to ensure you get the best learning resources.</p>
            </div>
        </div>
        </>
    );
}