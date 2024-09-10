import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden text-white bg-gray-900 p-6 md:p-12">
      {/* Glassmorphism Background Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg -z-10"></div>

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500"></div>

      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Column 1: Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-sm md:text-base">Stay updated with our latest news and services.</p>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full bg-white/20 backdrop-blur-lg text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transform transition-all shadow-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline hover:text-yellow-300 transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:underline hover:text-yellow-300 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-yellow-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media Icons */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">Follow Us</h3>
          <div className="flex space-x-6 justify-center md:justify-start text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 transition-all transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 hover:shadow-lg hover:shadow-pink-400/50 transition-all transform hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 hover:shadow-lg hover:shadow-blue-700/50 transition-all transform hover:scale-125"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-125"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Privacy and Terms */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <a href="#privacy" className="hover:text-white transition">
          Privacy Policy
        </a>
        {' | '}
        <a href="#terms" className="hover:text-white transition">
          Terms of Use
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-purple-500 p-3 rounded-full shadow-lg text-white hover:bg-pink-500 hover:scale-110 transition-all"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
