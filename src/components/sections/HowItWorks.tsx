import React from 'react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Upload Photo</h3>
            <p className="text-gray-600">Choose any photo you want to turn into a sticker</p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2"></div>
          </div>
          <div className="text-center relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Remove Background</h3>
            <p className="text-gray-600">Our AI automatically removes the background</p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2"></div>
          </div>
          <div className="text-center relative">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Add Text</h3>
            <p className="text-gray-600">Customize with fun text and emojis</p>
            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2"></div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Download & Share</h3>
            <p className="text-gray-600">Get your sticker and share it anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;