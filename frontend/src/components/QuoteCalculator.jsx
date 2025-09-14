import { useState } from 'react';

const QuoteCalculator = () => {
  const [carType, setCarType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [quote, setQuote] = useState('');

  const calculateQuote = () => {
    let price = 0;
    if (carType === 'Hatchback') {
      if (serviceType === 'Basic') price = 350;
      else if (serviceType === 'Combo') price = 700;
      else if (serviceType === 'Premium') price = 1200;
    } else if (carType === 'Sedan') {
      if (serviceType === 'Basic') price = 400;
      else if (serviceType === 'Combo') price = 750;
      else if (serviceType === 'Premium') price = 1300;
    } else if (carType === 'SUV') {
      if (serviceType === 'Basic') price = 450;
      else if (serviceType === 'Combo') price = 800;
      else if (serviceType === 'Premium') price = 1400;
    }
    setQuote(`Your ${carType} + ${serviceType} = ₹${price}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Know Your Price Instantly</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Car Type</label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-black"
            >
              <option value="" className="text-black">Select Car Type</option>
              <option value="Hatchback" className="text-black">Hatchback</option>
              <option value="Sedan" className="text-black">Sedan</option>
              <option value="SUV" className="text-black">SUV</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Service Type</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-black"
            >
              <option value="" className="text-black">Select Service</option>
              <option value="Basic" className="text-black">Basic Exterior Wash</option>
              <option value="Combo" className="text-black">Interior + Exterior Combo</option>
              <option value="Premium" className="text-black">Premium Detailing & Waxing</option>
            </select>
          </div>
          <button onClick={calculateQuote} className="btn-primary w-full mb-4 hover:bg-red-700">Calculate</button>
          {quote && <p className="text-center text-lg font-semibold text-primary mb-4">{quote}</p>}
          <a href="/booking" className="btn-secondary w-full text-center block hover:bg-gray-400">Book This Service</a>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
