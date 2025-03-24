"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070',  // Fashion Retail
  'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071',  // Clothing Collection
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070',  // Fashion Display
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070',  // Fashion Studio
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',  // Urban Style
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2070',  // Clothing Rack
  'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070',  // Fashion Store
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',  // Fashion Boutique
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      
      <div className="relative h-full w-full flex items-end">
        <div className="flex flex-col items-start text-white p-8 md:p-16 mb-8 md:mb-16">
          <div className="hero-text">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              M.A.D
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Most Affordable Designs
            </p>
          </div>
          <Link
            href="/collections/t-shirts"
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors rounded-none"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
