import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackServices = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <section className="p-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <h2 className="text-5xl font-bold text-center text-white mb-8">Track Your Services</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {bookings.length > 0 ? (
            bookings.map((booking, idx) => (
              <div
                key={idx}
                className="relative bg-white shadow-lg p-6 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                {/* Service Information */}
                <div onClick={() => navigate(`/track-services/${booking.id}`)}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{booking.serviceName}</h3>
                  <p className="text-lg text-gray-600 mb-2"><strong>ID:</strong> {booking.id}</p>
                  <p className="text-lg text-gray-600 mb-2"><strong>Status:</strong> {booking.status}</p>
                  <p className="text-lg text-gray-600 mb-2"><strong>Booked On:</strong> {booking.date}</p>
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-6 right-6">
                  <button
                    onClick={() => navigate(`/track-services/${booking.id}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-lg">You have no bookings yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackServices;
