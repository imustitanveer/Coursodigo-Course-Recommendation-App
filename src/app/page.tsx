import Navbar from "./Navbar";
import Hero from './Hero';
import Overview from "./Overview";
import WhyUs from "./WhyUs";
import FeaturedCourses from "./FeaturedCourses";
import Footer from "./Footer";
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
    < Navbar />
    < Hero />
    < Overview />
    < WhyUs />
    < FeaturedCourses />
    <div className="flex justify-center">
      <button className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white text-xl py-2 px-6 hover:ccursor-pointer rounded-full">
        {' '}
        <Link href="/signup">Sign Up To Take The Survey</Link>
      </button>
    </div>
    < Footer />
    </>
  );
}
