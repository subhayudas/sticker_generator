import React from 'react';
import { Sticker } from 'lucide-react';

interface NavbarProps {
  onScrollToGenerator: () => void;
}

function Navbar({ onScrollToGenerator }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Sticker className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">StickerMagic</span>
          </div>
          <div className="flex gap-6">
            <button onClick={onScrollToGenerator} className="text-gray-600 hover:text-purple-600">Create</button>
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How it Works</a>
            <a href="#gallery" className="text-gray-600 hover:text-purple-600">Gallery</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;