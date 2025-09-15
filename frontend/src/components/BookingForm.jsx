import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format datetime for WhatsApp
    const dateTime = new Date(formData.preferredDateTime);
    const formattedDateTime = `${("0" + dateTime.getDate()).slice(-2)}-${("0" + (dateTime.getMonth()+1)).slice(-2)}-${dateTime.getFullYear()} ${("0"+dateTime.getHours()).slice(-2)}:${("0"+dateTime.getMinutes()).slice(-2)}`;

    // Construct WhatsApp message
    const message = `Hello, I want to book a service:\n
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Car Type: ${formData.carType}
Service: ${formData.service}
Preferred Date & Time: ${formattedDateTime}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number (replace with your business number)
    const whatsappNumber = "919999999999";

    // Open WhatsApp link
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // Optional: direct call instead of WhatsApp
    // window.location.href = `tel:${formData.phone}`;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Service</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone (WhatsApp)</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Car Type</label>
            <select name="carType" value={formData.carType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required>
              <option value="">Select Car Type</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Service</label>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required>
              <option value="">Select Service</option>
              <option value="Basic Exterior Wash">Basic Exterior Wash</option>
              <option value="Interior + Exterior Combo">Interior + Exterior Combo</option>
              <option value="Premium Detailing & Waxing">Premium Detailing & Waxing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preferred Date & Time</label>
            <input type="datetime-local" name="preferredDateTime" value={formData.preferredDateTime} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-black" required />
          </div>
          <button type="submit" className="btn-primary w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
