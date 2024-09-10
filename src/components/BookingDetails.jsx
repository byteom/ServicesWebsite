import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // Framer Motion for animations

const BookingDetails = () => {
  const { id } = useParams();  // Get the booking ID from the URL
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  // Fetch booking details from localStorage
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const foundBooking = storedBookings.find((b) => b.id === id);

    if (foundBooking) {
      setBooking(foundBooking);
    } else {
      console.log("Booking not found for ID:", id);  // Debug message
    }
  }, [id]);

  // Function to update booking status
  const updateStatus = (newStatus) => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = storedBookings.map((b) => {
      if (b.id === id) {
        return {
          ...b,
          status: newStatus,
          history: [...b.history, newStatus],
        };
      }
      return b;
    });
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setBooking((prev) => ({
      ...prev,
      status: newStatus,
      history: [...prev.history, newStatus],
    }));
  };

  // Status-to-percentage mapping for progress bar
  const statusProgress = {
    "Booked": 20,
    "Accepted": 50,
    "Started Working": 80,
    "Completed": 100,
  };

  if (!booking) {
    return <p className="text-center text-gray-500">Booking not found.</p>;
  }

  return (
    <motion.section 
      className="p-16 relative overflow-hidden" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 opacity-20 transform -skew-y-3"></div>

      <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Booking Details
      </h2>
      
      <div className="container mx-auto z-10 relative">
        <motion.div
          className="bg-white shadow-2xl p-10 rounded-3xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Service Info */}
          <motion.h3 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Service: {booking.serviceName}
          </motion.h3>
          <motion.p 
            className="text-lg mb-4" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
          >
            <strong>ID:</strong> {booking.id}
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <strong>Name:</strong> {booking.name}
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5 }}
          >
            <strong>Email:</strong> {booking.email}
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.6 }}
          >
            <strong>Phone:</strong> {booking.phone}
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.7 }}
          >
            <strong>Current Status:</strong> {booking.status}
          </motion.p>

          {/* Progress Bar */}
          <div className="relative pt-4">
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
              <div 
                style={{ width: `${statusProgress[booking.status]}%` }} 
                className={`flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${statusProgress[booking.status]}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          <h4 className="text-2xl mt-6 mb-4 font-semibold">Status Path:</h4>
          <ul className="list-disc ml-6">
            {booking.history.map((status, index) => (
              <motion.li 
                key={index} 
                className="text-gray-700"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 80 }}
              >
                {status}
              </motion.li>
            ))}
          </ul>

          {/* Status update buttons with advanced hover effects */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 relative overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => updateStatus('Accepted')}
              disabled={booking.status !== 'Booked'}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Accept Service</span>
              <motion.div
                className="absolute inset-0 bg-blue-700 opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.button>

            <motion.button
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 relative overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => updateStatus('Started Working')}
              disabled={booking.status !== 'Accepted'}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Working</span>
              <motion.div
                className="absolute inset-0 bg-green-700 opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.button>

            <motion.button
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 relative overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => updateStatus('Completed')}
              disabled={booking.status !== 'Started Working'}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Mark as Completed</span>
              <motion.div
                className="absolute inset-0 bg-purple-700 opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.button>

            <motion.button
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 relative overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => navigate('/track-services')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Back to All Services</span>
              <motion.div
                className="absolute inset-0 bg-red-700 opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookingDetails;
