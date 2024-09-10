import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import BookingForm from './BookingForm';  // Import the Booking Form

// Function to generate a unique ID
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
  const [showNotification, setShowNotification] = useState(false);  // State for showing notification
  const isLoggedIn = localStorage.getItem('isSignedIn') === 'true';  

  const handleBuyNow = (service) => {
    if (!isLoggedIn) {
      setShowNotification(true);  // Show the notification when not logged in
      openSignInModal();  // Open the login modal if not signed in
    } else {
      setSelectedService(service);   // Set the selected service
      setIsBookingOpen(true);        // Open the booking modal
      setShowNotification(false);    // Hide the notification when logged in
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
    <section id="services" className="p-16 bg-gradient-to-r from-blue-100 to-blue-300 relative">
      {/* Notification Banner */}
      {showNotification && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-2 z-50">
          <p className="text-lg font-semibold">⚠️ You must log in to book a service.</p>
        </div>
      )}

      <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-up">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.8} scale={1.05}>
            <div
              data-aos="zoom-in"
              className="relative p-4 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 group"
              style={{ maxWidth: '300px', margin: '0 auto' }}  // Make cards a bit smaller
            >
              {/* Image with hover effect */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                
                <button
                  onClick={() => handleBuyNow(service)}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
                >
                  Buy Now
                </button>
              </div>
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
