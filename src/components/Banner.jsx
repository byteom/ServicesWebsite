import { useEffect } from 'react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';

const Banner = () => {
  // GSAP animation on load
  useEffect(() => {
    gsap.fromTo(
      '.banner-content',
      { opacity: 0, y: -50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="h-64 bg-sky-500 flex items-center justify-center text-white relative overflow-hidden">
      {/* Background animation effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 opacity-75 blur-2xl"></div>

      {/* 3D Tilt Effect */}
      <Tilt>
        <div className="banner-content p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-3xl transform hover:scale-105 transition-all duration-300">
          <h1 className="text-5xl font-poppins font-bold">Welcome to ServiceCo</h1>
          <p className="text-lg font-roboto mt-4">Your Trusted Partner in Quality Services</p>
        </div>
      </Tilt>
    </section>
  );
};

export default Banner;
