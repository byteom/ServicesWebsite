import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

  if (!booking) {
    return <p className="text-center text-gray-500">Booking not found.</p>;
  }

  return (
    <section className="p-16">
      <h2 className="text-4xl font-bold text-center mb-8">Booking Details</h2>
      <div className="container mx-auto">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Service: {booking.serviceName}</h3>
          <p><strong>ID:</strong> {booking.id}</p>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <p><strong>Phone:</strong> {booking.phone}</p>
          <p><strong>Current Status:</strong> {booking.status}</p>

          <h4 className="text-xl mt-4">Status Path:</h4>
          <ul className="list-disc ml-6">
            {booking.history.map((status, index) => (
              <li key={index} className="text-gray-700">{status}</li>
            ))}
          </ul>

          {/* Status update buttons */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => updateStatus('Accepted')}
            disabled={booking.status !== 'Booked'}
          >
            Accept Service
          </button>
          <button
            className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => updateStatus('Started Working')}
            disabled={booking.status !== 'Accepted'}
          >
            Start Working
          </button>
          <button
            className="mt-4 ml-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            onClick={() => updateStatus('Completed')}
            disabled={booking.status !== 'Started Working'}
          >
            Mark as Completed
          </button>

          <button
            className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => navigate('/track-services')}
          >
            Back to All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingDetails;
