import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import BookingForm from './BookingForm';  // Import the Booking Form

// Function to generate a unique ID (you can use any other method if needed)
const generateUniqueId = () => {
  return `id-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
};

// Updated services with descriptions
const services = [
  { 
    name: 'Web Development', 
    description: 'Build responsive and dynamic websites with modern technologies.',
    image: './src/assets/images/webdevlopment _1.jpg' 
  },
  { 
    name: 'Mobile Development', 
    description: 'Create high-performance mobile applications for Android and iOS.',
    image: './src/assets/images/App_1.jpg' 
  },
  { 
    name: 'UI/UX Design', 
    description: 'Design intuitive user interfaces and experiences that users love.',
    image: '/images/ui-ux.jpg' 
  },
];

const Services = ({ openSignInModal }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isSignedIn') === 'true';  

  const handleBuyNow = (service) => {
    if (!isLoggedIn) {
      openSignInModal();  // Open the login modal if not signed in
    } else {
      setSelectedService(service);   // Set the selected service
      setIsBookingOpen(true);        // Open the booking modal
    }
  };

  const handleBookingSubmit = (name, email, phone) => {
    const uniqueId = generateUniqueId();
    const newBooking = {
      id: uniqueId,
      serviceName: selectedService.name,
      name,
      email,
      phone,
      date: new Date().toLocaleString(),
      status: 'Booked',  // Initial status
      history: ['Booked'],  // History of status changes
    };

    // Save the booking in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

    setIsBookingOpen(false);  // Close the booking modal
    alert(`Service booked successfully! Your booking ID is ${uniqueId}`);
  };

  return (
    <section id="services" className="p-16 bg-gradient-to-r from-blue-100 to-blue-300">
      <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-up">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.8} scale={1.05}>
            <div
              data-aos="zoom-in"
              className="relative p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button
                onClick={() => handleBuyNow(service)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Buy Now
              </button>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Booking Form Modal */}
      {isBookingOpen && selectedService && (
        <BookingForm
          service={selectedService}   
          closeForm={() => setIsBookingOpen(false)}   
          handleSubmit={handleBookingSubmit}   
        />
      )}
    </section>
  );
};

export default Services;
