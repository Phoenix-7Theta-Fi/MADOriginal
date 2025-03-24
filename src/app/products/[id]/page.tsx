"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "@/data/products";
import { useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(Number(params.id));
  const [isShowingBack, setIsShowingBack] = useState(false);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative w-full lg:w-2/3 aspect-[4/3] lg:aspect-[3/4]">
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src={isShowingBack ? product.backImage : product.frontImage}
                  alt={`${product.name} - ${isShowingBack ? 'Back' : 'Front'} View`}
                  fill
                  className="object-cover transition-transform duration-700"
                  priority={!isShowingBack}
                />
              </div>
              {/* Image Toggle Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                <button
                  onClick={() => setIsShowingBack(false)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                    !isShowingBack 
                    ? 'bg-black text-white' 
                    : 'bg-black/20 text-white hover:bg-black/40'
                  }`}
                >
                  Front
                </button>
                <button
                  onClick={() => setIsShowingBack(true)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
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
            <div className="relative w-full lg:w-1/3 p-8 lg:p-12 flex flex-col">
              <div className="mb-8">
                <div className="inline-block bg-black text-white px-6 py-2 rounded-full shadow-lg mb-6">
                  <p className="text-2xl font-bold">{product.price}</p>
                </div>
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{product.name}</h1>
                {product.description && (
                  <p className="text-lg text-gray-600 mb-8">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg text-center hover:border-black transition-colors duration-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-gray-900 mt-auto">
                <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Add to Cart
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
