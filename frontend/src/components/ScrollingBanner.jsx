const ScrollingBanner = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
        `
      }} />
      <div className="w-full bg-red-600 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap px-4">
          10% off on first booking • 10% off on first booking • 10% off on first booking • 10% off on first booking • 10% off on first booking • 10% off on first booking • 10% off on first booking • 10% off on first booking
        </div>
      </div>
    </>
  );
};

export default ScrollingBanner;
