import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/carwash_logo.jpg"
            alt="Dirty2Clean Logo"
            className="h-16 sm:h-20 w-auto mr-2"
          />
          <span className="text-base sm:text-base font-bold">Dirty2Clean</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-50`}
        >
          <li>
            <Link
              to="/"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/quote"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Quote
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
