import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.hero-text',
          start: 'top center',
        },
      }
    );

    // Image animation with 3D rotation
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, rotateY: 15, scale: 0.8 },
      {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.hero-image',
          start: 'top center',
        },
      }
    );

    // "How We Work" cards animation
    gsap.utils.toArray('.work-step').forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 100, rotateY: 10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: index * 0.3,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax effect on the "How We Started" section
    gsap.to('.parallax-bg', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
      },
    });
  }, []);

  // Function to handle "Get in Touch" button click
  const handleGetInTouch = () => {
    navigate('/contact');  // Navigate to the contact page
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex justify-between items-center p-12 bg-gradient-to-r from-purple-200 via-indigo-300 to-sky-300 text-gray-900">
        <div className="w-1/2 space-y-4 hero-text">
          <h1 className="text-6xl font-poppins font-bold">Professional Services</h1>
          <p className="text-xl font-roboto">We bring innovation and expertise to every project.</p>
        </div>
        <div className="w-1/2 flex space-x-6 overflow-hidden">
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/webdevlopment_1.jpg"
              alt="Service 1"
              className="w-64 h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/webdevlopment_1.jpg"
              alt="Service 2"
              className="w-64 h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/App_1.jpg"
              alt="Service 3"
              className="w-64 h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-8 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Step 1: Discovery</h3>
            <p className="text-lg">We start by understanding your needs, challenges, and goals.</p>
          </div>
          {/* Step 2 */}
          <div className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Step 2: Planning</h3>
            <p className="text-lg">Next, we create a customized strategy tailored to your project.</p>
          </div>
          {/* Step 3 */}
          <div className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Step 3: Development</h3>
            <p className="text-lg">Our team brings the strategy to life through expert development.</p>
          </div>
          {/* Step 4 */}
          <div className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Step 4: Testing</h3>
            <p className="text-lg">We rigorously test to ensure quality and performance.</p>
          </div>
          {/* Step 5 */}
          <div className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Step 5: Launch & Support</h3>
            <p className="text-lg">We launch the product and offer ongoing support and maintenance.</p>
          </div>
        </div>
      </section>

      {/* How We Started Section with Parallax */}
      <section className="py-16 px-8 bg-gray-50 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed parallax-bg" style={{ backgroundImage: "url('./src/assets/images/background.jpg')" }}>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold mb-12">How We Started</h2>
          <p className="text-lg">
            Our journey began with a simple mission: to bring cutting-edge technology solutions to businesses of all sizes. Over the years, we have evolved into a full-service digital agency, delivering exceptional services in web development, app development, and more.
          </p>
          <p className="text-lg">
            From humble beginnings to working with global clients, our commitment to innovation, quality, and customer satisfaction has remained steadfast. We are proud of where we started and even more excited about where we’re going.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-8">Contact us today to discuss your project needs and get started.</p>
        <button
          onClick={handleGetInTouch}  // Navigate on click
          className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default Hero;
