import React, { useState } from 'react';
import { Sticker, Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToGenerator: () => void;
}

function Navbar({ onScrollToGenerator }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('create'); // Track active menu item

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo section */}
          <div className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <Sticker className="w-9 h-9 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">StickerMagic</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 text-gray-600 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button 
              onClick={() => {
                setActiveItem('create');
                onScrollToGenerator();
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeItem === 'create'
                ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              Create
            </button>
            <a 
              href="#features"
              onClick={() => setActiveItem('features')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeItem === 'features'
                ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works"
              onClick={() => setActiveItem('how-it-works')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeItem === 'how-it-works'
                ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              How it Works
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 px-2">
              <button 
                onClick={() => {
                  setActiveItem('create');
                  onScrollToGenerator();
                  setIsMenuOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeItem === 'create'
                  ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Create
              </button>
              <a 
                href="#features"
                onClick={() => {
                  setActiveItem('features');
                  setIsMenuOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeItem === 'features'
                  ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Features
              </a>
              <a 
                href="#how-it-works"
                onClick={() => {
                  setActiveItem('how-it-works');
                  setIsMenuOpen(false);
                }}
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeItem === 'how-it-works'
                  ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                How it Works
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;