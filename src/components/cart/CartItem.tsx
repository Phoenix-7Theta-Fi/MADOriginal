"use client";

import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex items-start space-x-4 p-2 bg-white rounded-lg">
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-gray-900 truncate">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-600">Size: {item.size}</p>
        <p className="mt-1 text-sm font-semibold text-gray-900">{item.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <span className="text-sm font-medium w-8 text-center text-gray-900">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.productId, item.size)}
        className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Remove item"
      >
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
