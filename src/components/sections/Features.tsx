import React from 'react';
import { Wand2, Sparkles, Share2 } from 'lucide-react';

function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Magic Background Removal</h3>
            <p className="text-gray-600">Instantly remove backgrounds from your photos with our AI-powered technology</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Text Effects</h3>
            <p className="text-gray-600">Add and customize text with different styles, colors, and positions</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Sharing</h3>
            <p className="text-gray-600">Download and share your stickers instantly on any platform</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;