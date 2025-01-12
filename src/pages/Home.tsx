import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import StickerGenerator from '../components/sections/StickerGenerator';
import HowItWorks from '../components/sections/HowItWorks';
import Gallery from '../components/sections/Gallery';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Hero />
      <Features />
      <StickerGenerator />
      <HowItWorks />
      <Gallery />
    </div>
  );
}

export default Home;