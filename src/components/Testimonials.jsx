const testimonials = [
    {
      quote: 'ServiceCo transformed our business with their expertise!',
      name: 'John Doe',
      company: 'Tech Solutions',
      image: '/images/client1.jpg',
    },
    {
      quote: 'The best service we ever had. Professional and dedicated.',
      name: 'Jane Smith',
      company: 'Marketing Guru',
      image: '/images/client2.jpg',
    },
    {
      quote: 'I would recommend ServiceCo to anyone looking for high-quality work.',
      name: 'Michael Johnson',
      company: 'Creative Minds',
      image: '/images/client3.jpg',
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="p-16 bg-gradient-to-r from-purple-300 to-pink-300">
        <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-up">What Our Clients Say</h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              data-aos="fade-right"
              className="p-8 bg-white shadow-lg rounded-lg relative"
            >
              <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  