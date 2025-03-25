"use client";

import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';
import { CartItem } from './CartItem';

export function CartDrawer() {
  const { cart, toggleCart } = useCart();

  // Close cart on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleCart();
      }
    };

    if (cart.isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when cart is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [cart.isOpen, toggleCart]);

  if (!cart.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-50"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <svg
              className="w-6 h-6"
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                className="w-16 h-16 mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-xl font-medium text-gray-900">Your cart is empty</p>
              <button
                onClick={toggleCart}
                className="mt-4 text-gray-600 font-medium hover:text-gray-900 hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <CartItem key={`${item.productId}-${item.size}`} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Subtotal</span>
              <span className="text-lg font-semibold text-gray-900">{cart.subTotal}</span>
            </div>
            <button className="w-full bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-900 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
