import React from 'react';

interface HeroProps {
  onScrollToGenerator: () => void;
}

function Hero({ onScrollToGenerator }: HeroProps) {
  return (
    <section className="py-12 md:py-20 px-4 text-center bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Transform Your Photos into 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Magical Stickers</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Create stunning stickers with automatic background removal and customizable text. Perfect for social media, messaging, or personal use!
        </p>
        <button
          onClick={onScrollToGenerator}
          className="px-6 md:px-8 py-3 md:py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all"
        >
          Create Your Sticker Now
        </button>
      </div>
    </section>
  );
}

export default Hero;