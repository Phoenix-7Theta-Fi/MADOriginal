"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/data/products';

interface CollectionCardProps {
  product: Product;
  className?: string;
}

export function CollectionCard({ product, className = '' }: CollectionCardProps) {
  const [isShowingBack, setIsShowingBack] = useState(false);

  return (
    <div className={`group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-100">
          <Image
            src={isShowingBack ? product.backImage : product.frontImage}
            alt={`${product.name} - ${isShowingBack ? 'Back' : 'Front'} View`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={!isShowingBack}
          />
        </div>
        {/* Image Toggle Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsShowingBack(false)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              !isShowingBack 
              ? 'bg-black text-white' 
              : 'bg-black/20 text-white hover:bg-black/40'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => setIsShowingBack(true)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isShowingBack 
              ? 'bg-black text-white' 
              : 'bg-black/20 text-white hover:bg-black/40'
            }`}
          >
            Back
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block group-hover:opacity-80 transition-opacity">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-lg font-bold text-black">{product.price}</p>
        </Link>
      </div>

      {/* Quick View Button - Appears on Hover */}
      <Link
        href={`/products/${product.id}`}
        className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 group-hover:bg-black/40 group-hover:opacity-100 transition-all duration-300"
      >
        <span className="px-6 py-2 bg-white text-black rounded-full font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          Quick View
        </span>
      </Link>
    </div>
  );
}
