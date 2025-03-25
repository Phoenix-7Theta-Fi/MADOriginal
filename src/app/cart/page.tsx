"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { CartItem } from '@/components/cart/CartItem';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>

        {cart.items.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg
                className="w-20 h-20 text-gray-400"
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
              <h2 className="text-2xl font-semibold text-gray-900">Your cart is empty</h2>
              <p className="text-gray-500">Looks like you haven't added any items to your cart yet.</p>
              <Link
                href="/collections"
                className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item) => (
                <CartItem key={`${item.productId}-${item.size}`} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="text-gray-900 font-medium">{cart.subTotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="text-gray-700">Shipping</span>
                    <span className="text-gray-900 font-medium">FREE</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">{cart.subTotal}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-4 px-6 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                  Proceed to Checkout
                </button>

              <Link
                href="/collections"
                className="block text-center mt-4 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
