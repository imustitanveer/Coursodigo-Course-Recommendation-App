export default function Footer() {
    return (
      <footer className="bg-[#E76F51] text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <img src="/Coursodigo.png" alt="Coursodigo Logo" className="h-12 mb-4" />
              <p className="text-lg font-medium text-white">
                Empowering learners with personalized course recommendations.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex justify-center md:justify-start flex-col items-center md:items-start">
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
                <img src="/X.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/LinkedIn.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 border-t pt-4 text-center text-white">
            <p>© 2025 Coursodigo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }