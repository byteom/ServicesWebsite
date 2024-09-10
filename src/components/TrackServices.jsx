import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackServices = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();  // Use navigate to redirect to booking details

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <section className="p-16">
      <h2 className="text-4xl font-bold text-center mb-8">Track Your Services</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookings.length > 0 ? (
            bookings.map((booking, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg p-6 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                onClick={() => navigate(`/track-services/${booking.id}`)}  // Redirect to booking details
              >
                <h3 className="text-2xl font-bold mb-2">{booking.serviceName}</h3>
                <p><strong>ID:</strong> {booking.id}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <p><strong>Booked On:</strong> {booking.date}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">You have no bookings yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackServices;
