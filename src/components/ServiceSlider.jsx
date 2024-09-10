import { FaLaptopCode, FaMobileAlt, FaPalette, FaCloud, FaGlobe, FaUniversity, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const ServiceSlider = () => {
  // List of services with icons and unique colors
  const services = [
    { name: 'Web Development', icon: <FaLaptopCode />, color: 'bg-blue-500' },
    { name: 'Mobile Development', icon: <FaMobileAlt />, color: 'bg-green-500' },
    { name: 'UI/UX Design', icon: <FaPalette />, color: 'bg-pink-500' },
    { name: 'SEO Optimization', icon: <FaGlobe />, color: 'bg-yellow-500' },
    { name: 'Cloud Services', icon: <FaCloud />, color: 'bg-indigo-500' },
    { name: 'LPU Portal Assistance', icon: <FaUniversity />, color: 'bg-purple-500' },
    { name: 'Assignment Help', icon: <FaBook />, color: 'bg-red-500' },
    { name: 'Exam Preparation', icon: <FaChalkboardTeacher />, color: 'bg-orange-500' },
  ];

  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Infinite Scrolling Container */}
      <div className="flex animate-scroll items-center space-x-8">
        {/* Duplicate the services twice for seamless scrolling */}
        {services.concat(services).map((service, index) => (
          <div
            key={index}
            className={`inline-block px-6 py-2 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${service.color}`}
            style={{ width: '200px', height: '70px' }}  // Further reduced height
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="text-xl">{service.icon}</div>
              <div>{service.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
