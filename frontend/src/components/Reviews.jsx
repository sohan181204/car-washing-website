const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Dirty2Clean</h3>
          <p>Professional doorstep car wash services in Hyderabad.</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/booking" className="hover:text-primary">Booking</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Contact Info</h4>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📧 yourbusiness@email.com</p>
          <p>📍 Hyderabad & Nearby</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2023 Dirty2Clean. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
