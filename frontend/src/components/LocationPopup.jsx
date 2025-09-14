import { useState, useEffect } from "react";

const LocationPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const locations = [
    "Banjara Hills",
    "Hitech City",
    "Gachibowli",
    "Madhapur",
    "Jubilee Hills",
    "Secunderabad",
    "Kukatpally",
    "Ameerpet",
    "Miyapur",
  ];

  // Auto-close after 5 seconds with fade-out
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsOpen(false), 500); // match transition duration
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-xl transition-transform duration-500 transform scale-100">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          We Serve These Areas in Hyderabad
        </h2>
        <ul className="grid grid-cols-1 gap-2 mb-6">
          {locations.map((area, index) => (
            <li key={index} className="text-white font-medium">
              {area}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => setIsOpen(false), 500);
          }}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default LocationPopup;
