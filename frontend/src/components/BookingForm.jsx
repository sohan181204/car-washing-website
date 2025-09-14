import { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    carType: '',
    service: '',
    preferredDateTime: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking submitted successfully!');
    } catch (error) {
      alert('Error submitting booking');
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Service</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone (WhatsApp)</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Car Type</label>
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            >
              <option value="" className="text-black">Select Car Type</option>
              <option value="Hatchback" className="text-black">Hatchback</option>
              <option value="Sedan" className="text-black">Sedan</option>
              <option value="SUV" className="text-black">SUV</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            >
              <option value="" className="text-black">Select Service</option>
              <option value="Basic" className="text-black">Basic Exterior Wash</option>
              <option value="Combo" className="text-black">Interior + Exterior Combo</option>
              <option value="Premium" className="text-black">Premium Detailing & Waxing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preferred Date & Time</label>
            <input
              type="datetime-local"
              name="preferredDateTime"
              value={formData.preferredDateTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
