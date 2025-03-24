"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  price: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const [isShowingBack, setIsShowingBack] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-[3/4]">
          <div className="absolute inset-0 bg-gray-100">
            <Image
              src={isShowingBack ? product.backImage : product.frontImage}
              alt={`${product.name} - ${isShowingBack ? 'Back' : 'Front'} View`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={!isShowingBack}
            />
          </div>
          {/* Image Toggle Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            <button
              onClick={() => setIsShowingBack(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isShowingBack 
                ? 'bg-black text-white' 
                : 'bg-black/20 text-white hover:bg-black/40'
              }`}
            >
              Front
            </button>
            <button
              onClick={() => setIsShowingBack(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isShowingBack 
                ? 'bg-black text-white' 
                : 'bg-black/20 text-white hover:bg-black/40'
              }`}
            >
              Back
            </button>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="relative w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="absolute top-8 right-8 bg-black text-white px-6 py-2 rounded-full shadow-lg">
              <p className="text-lg font-bold">{product.price}</p>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-24">{product.name}</h3>
            {product.description && (
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
            )}
          </div>
          <Link
            href={`/products/${product.id}`}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-gray-900"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              View Details
              <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
