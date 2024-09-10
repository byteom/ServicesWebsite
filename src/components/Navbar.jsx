import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignInModal from '../modals/SignInModal';
import SignUpModal from '../modals/SignUpModal';
import { FaBars, FaTimes } from 'react-icons/fa';  // Icons for Hamburger Menu

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // For toggling mobile menu

  // Handle dark mode persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  // Simulate successful sign in
  const handleSuccessfulSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem('isSignedIn', 'true'); // Persist login state
    setIsSignInOpen(false); // Close the Sign In modal on success
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setShowProfileDropdown(false); // Close profile dropdown on sign out
    localStorage.removeItem('isSignedIn'); // Clear login state from localStorage
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="p-4 shadow-lg sticky top-0 z-50 bg-white/30 dark:bg-gray-900/50 backdrop-blur-lg transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="font-poppins text-2xl font-bold text-primary dark:text-blue-300">
            <Link to="/">ServiceCo</Link> {/* Home Link */}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle navigation">
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-primary dark:text-blue-300" />  // Close icon
              ) : (
                <FaBars className="text-2xl text-primary dark:text-blue-300" />  // Hamburger icon
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-roboto">
            <Link to="/" className="hover:text-primary dark:hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary dark:hover:text-blue-300 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-primary dark:hover:text-blue-300 transition-colors">Contact Us</Link>
            <Link to="/track-services" className="hover:text-primary dark:hover:text-blue-300 transition-colors">Track Services</Link>
            <Link to="/testimonials" className="hover:text-primary dark:hover:text-blue-300 transition-colors">Testimonials</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                {/* Sign In Button */}
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition"
                  aria-label="Sign In"
                >
                  Sign In
                </button>

                {/* Sign Up Button */}
                <button
                  onClick={() => setIsSignUpOpen(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  aria-label="Sign Up"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  aria-label="Profile"
                >
                  <img
                    src="https://via.placeholder.com/40" // Placeholder for user profile image
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Profile</span>
                </button>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-primary text-white p-2 rounded-full dark:bg-gray-600 transition-colors duration-300"
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? '🌞' : '🌜'}
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when Hamburger is clicked) */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 text-lg font-roboto text-center">
            <Link to="/" onClick={toggleMobileMenu} className="hover:text-primary dark:hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/services" onClick={toggleMobileMenu} className="hover:text-primary dark:hover:text-blue-300 transition-colors">Services</Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-primary dark:hover:text-blue-300 transition-colors">Contact Us</Link>
            <Link to="/track-services" onClick={toggleMobileMenu} className="hover:text-primary dark:hover:text-blue-300 transition-colors">Track Services</Link>
            <Link to="/testimonials" onClick={toggleMobileMenu} className="hover:text-primary dark:hover:text-blue-300 transition-colors">Testimonials</Link>

            {/* Sign In/Sign Out options in mobile view */}
            {!isSignedIn ? (
              <>
                <button
                  onClick={() => {
                    setIsSignInOpen(true);
                    toggleMobileMenu();
                  }}
                  className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition"
                  aria-label="Sign In"
                >
                  Sign In
                </button>

                <button
                  onClick={() => {
                    setIsSignUpOpen(true);
                    toggleMobileMenu();
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  aria-label="Sign Up"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Sign In Modal */}
      {isSignInOpen && <SignInModal setIsSignInOpen={setIsSignInOpen} onSuccessfulSignIn={handleSuccessfulSignIn} />}

      {/* Sign Up Modal */}
      {isSignUpOpen && <SignUpModal setIsSignUpOpen={setIsSignUpOpen} />}
    </>
  );
};

export default Navbar;
