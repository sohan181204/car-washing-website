import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden" style={{ backgroundImage: "url('/fallback.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <video className="absolute inset-0 w-full h-full object-cover opacity-70 will-change-transform" autoPlay loop muted playsInline
        style={{ transform: `translateY(${offsetY * 0.5}px) scale(${1 + offsetY * 0.0005})`, transition: "transform 0.1s linear" }}>
        <source src="/hero-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-6 py-20 md:py-32 lg:py-40 flex flex-col items-start max-w-4xl" style={{ transform: `translateY(${offsetY * 0.2}px)`, opacity: 1 - offsetY * 0.002, transition: "transform 0.2s linear, opacity 0.2s linear" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000">
          Doorstep Car Wash – Dirty2Clean
        </h1>
        <div className="flex space-x-4 mb-8" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000">
          <a href="/booking" className="btn-primary hover:scale-105 transition-transform duration-300">Book Now</a>
          <a href="/quote" className="btn-secondary hover:scale-105 transition-transform duration-300">Get Instant Quote</a>
        </div>
        <div className="flex space-x-6 md:space-x-12" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer">🚗</span>
            <span>Doorstep Service</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer">🌿</span>
            <span>Eco-friendly Products</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-2 hover:scale-110 transition-transform duration-300 cursor-pointer">👨‍🔧</span>
            <span>Professional Staff</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
