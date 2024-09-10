import { useState } from 'react';

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true); // Show popup on form submit
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Close popup
  };

  return (
    <section id="contact" className="p-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
      <h2 className="text-5xl font-poppins font-bold text-center" data-aos="fade-up">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-4 bg-secondary text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600">We will connect with you soon.</p>
            <button
              onClick={handleClosePopup}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
