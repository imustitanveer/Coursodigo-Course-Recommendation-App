import { Sora } from 'next/font/google';
import { Outfit } from 'next/font/google';
import Image from 'next/image';

const SoraFont = Sora({ subsets: ['latin'], weight: '400' });
const Outfit1Font = Outfit({ subsets: ['latin'], weight: '400' });
const OutfitFont = Outfit({ subsets: ['latin'], weight: '700' });

export default function Footer() {
    return (
      <footer className="bg-[#E76F51] text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <Image src="/Coursodigo.png" alt="Coursodigo Logo" className="h-12 mb-4" />
              <p className={`text-xl font-semibold text-white ${OutfitFont.className}`}>Coursódigo</p>
              <p className={`text-md font-medium text-white ${SoraFont.className}`}>
                Empowering learners with personalized course recommendations.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className={`flex justify-center md:justify-start flex-col items-center md:items-start ${SoraFont.className}`}>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-[#F4A261]">About Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#F4A261]">Privacy Policy</a></li>
                <li><a href="/contact" className="hover:text-[#F4A261]">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/X.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/LinkedIn.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 border-t pt-4 text-center text-white">
            <p className={`${Outfit1Font.className}`}>© 2025 Coursódigo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }