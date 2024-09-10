const Contact = () => {
  return (
    <section id="contact" className="p-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
      <h2 className="text-5xl font-poppins font-bold text-center" data-aos="fade-up">Contact Us</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg text-gray-800 dark:text-white dark:bg-gray-700 shadow-md"
        ></textarea>
        <button
          className="w-full p-4 bg-secondary text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
