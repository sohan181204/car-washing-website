import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollingBanner from "./ScrollingBanner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollingBanner />
      <nav className="bg-black text-white p-4 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/carwash_logo.jpg" alt="Dirty2Clean Logo" className="h-16 sm:h-20 w-auto mr-2" />
            <span className="text-base sm:text-base font-bold">Dirty2Clean</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <ul className={`${isOpen ? "flex flex-col" : "hidden"} md:flex md:flex-row md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-50`}>
            {["/", "/services", "/quote", "/plans", "/booking", "/gallery", "/reviews"].map((link, idx) => {
              const names = ["Home","Services","Quote","Plans","Booking","Gallery","Reviews"];
              return (
                <li key={idx}>
                  <Link to={link} className="relative hover:text-primary block transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsOpen(false)}>
                    {names[idx]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
