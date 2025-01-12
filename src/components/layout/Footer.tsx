import React from 'react';
import { Sticker } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sticker className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">StickerMagic</span>
            </div>
            <p className="text-gray-400">Transform your photos into amazing stickers with our easy-to-use tool.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-purple-400">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-400">How it Works</a></li>
              <li><a href="#gallery" className="hover:text-purple-400">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} StickerMagic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;