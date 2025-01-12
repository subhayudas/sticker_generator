import React, { useState } from 'react';
import { Sticker, Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToGenerator: () => void;
}

function Navbar({ onScrollToGenerator }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Sticker className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">StickerMagic</span>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6">
            <button onClick={onScrollToGenerator} className="text-gray-600 hover:text-purple-600">Create</button>
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How it Works</a>
            <a href="#gallery" className="text-gray-600 hover:text-purple-600">Gallery</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={onScrollToGenerator} className="text-gray-600 hover:text-purple-600">Create</button>
              <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How it Works</a>
              <a href="#gallery" className="text-gray-600 hover:text-purple-600">Gallery</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;