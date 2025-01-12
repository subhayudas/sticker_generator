import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Sticker Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop" alt="Sample sticker" className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" />
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&h=500&fit=crop" alt="Sample sticker" className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" />
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop" alt="Sample sticker" className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" />
          <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&h=500&fit=crop" alt="Sample sticker" className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;