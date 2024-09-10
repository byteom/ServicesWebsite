import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative overflow-hidden">
      {/* Glassmorphism Background Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg -z-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Text */}
        <p className="font-poppins font-semibold text-lg">
          &copy; 2024 ServiceCo. All Rights Reserved.
        </p>

        {/* Social Media Icons with Animations */}
        <div className="flex space-x-6 text-lg">
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

      {/* Privacy Policy and Terms of Use Links */}
      <div className="mt-4 text-center text-sm text-gray-200">
        <a href="#privacy" className="hover:text-white transition">
          Privacy Policy
        </a>
        {' | '}
        <a href="#terms" className="hover:text-white transition">
          Terms of Use
        </a>
      </div>

      {/* Gradient Border at the Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;
