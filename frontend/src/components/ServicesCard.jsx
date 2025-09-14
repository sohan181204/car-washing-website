import { Link } from 'react-router-dom';

const ServicesCard = () => {
  const services = [
    {
      name: 'Basic Exterior Wash',
      price: '₹300–₹400',
      description: 'Quick exterior cleaning for your car.'
    },
    {
      name: 'Interior + Exterior Combo',
      price: '₹600–₹800',
      description: 'Complete interior and exterior wash.'
    },
    {
      name: 'Premium Detailing & Waxing',
      price: '₹1200+',
      description: 'Full detailing with waxing for shine.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-black">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-bold mb-4">{service.price}</p>
              <Link to="/booking" className="btn-primary inline-block">Book Now</Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-secondary inline-block">View Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
