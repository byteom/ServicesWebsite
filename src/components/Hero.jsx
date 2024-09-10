import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();

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
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-gradient-to-r from-purple-200 via-indigo-300 to-sky-300 text-gray-900">
        <div className="md:w-1/2 space-y-4 hero-text text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold">Professional Services</h1>
          <p className="text-lg md:text-xl font-roboto">We bring innovation and expertise to every project.</p>
        </div>
        <div className="flex justify-center md:w-1/2 space-x-6 mt-8 md:mt-0">
          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/webdevlopment_1.jpg"
              alt="Service 1"
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/webdevlopment_1.jpg"
              alt="Service 2"
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000} glareEnable={true}>
            <img
              src="./src/assets/images/App_1.jpg"
              alt="Service 3"
              className="w-44 h-44 md:w-64 md:h-64 rounded-lg shadow-lg hover:scale-110 transform transition duration-300 hero-image"
            />
          </Tilt>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-6 md:px-8 bg-white text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="work-step p-6 bg-gray-100 rounded-lg shadow-md transform-gpu hover:rotate-2 hover:scale-105 transition">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Step {i + 1}: Step Name</h3>
              <p className="text-base md:text-lg">Step description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Started Section with Parallax */}
      <section className="py-16 px-6 md:px-8 bg-gray-50 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed parallax-bg" style={{ backgroundImage: "url('./src/assets/images/background.jpg')" }}>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How We Started</h2>
          <p className="text-lg md:text-xl">
            Our journey began with a simple mission: to bring cutting-edge technology solutions to businesses of all sizes. 
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-8">Contact us today to discuss your project needs and get started.</p>
        <button
          onClick={handleGetInTouch}
          className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default Hero;
