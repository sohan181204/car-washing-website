const Gallery = () => {
  const images = [
    '/gallery/bf1.jpg',
    '/gallery/bf2.jpg',
    '/gallery/bf3.jpg',
    '/gallery/bf4.jpg',
    // Add more images
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Gallery & Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={img}
                alt={`Car wash ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
