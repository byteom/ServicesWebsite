import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile'; // Profile component
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import ServiceSlider from './components/ServiceSlider';
import NotificationBar from './components/NotificationBar';
import TrackServices from './components/TrackServices'; // Import the Track Services component
import BookingDetails from './components/BookingDetails'; // Import Booking Details for specific routes

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        {/* Notification Bar and Navbar displayed on all routes */}
        <NotificationBar />
        <Navbar />
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
          <Route path="/slider" element={<ServiceSlider />} />
          <Route path="/track-services" element={<TrackServices />} /> {/* Track Services route */}
          <Route path="/track-services/:id" element={<BookingDetails />} /> {/* Booking Details route */}
        </Routes>
        {/* Footer and ScrollToTop component */}
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
