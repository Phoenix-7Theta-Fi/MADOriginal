"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartState, CartAction, CartItem } from '@/types/cart';

const initialState: CartState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  subTotal: '₹0',
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function calculateSubTotal(items: CartItem[]): string {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return sum + (price * item.quantity);
  }, 0);
  return `₹${total}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId && item.size === action.payload.size
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + action.payload.quantity };
          }
          return item;
        });
      } else {
        newItems = [...state.items, action.payload];
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        items: newItems,
        totalItems,
        subTotal: calculateSubTotal(newItems),
        isOpen: true, // Open cart drawer when adding item
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => !(item.productId === action.payload.productId && item.size === action.payload.size)
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        items: newItems,
        totalItems,
        subTotal: calculateSubTotal(newItems),
      };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.productId === action.payload.productId && item.size === action.payload.size) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        items: newItems,
        totalItems,
        subTotal: calculateSubTotal(newItems),
      };
    }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        subTotal: '₹0',
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { items } = JSON.parse(savedCart);
      dispatch({ type: 'CLEAR_CART' });
      items.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      });
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    const cartData = {
      items: state.items,
      totalItems: state.totalItems,
      subTotal: state.subTotal,
    };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [state.items, state.totalItems, state.subTotal]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  const { state, dispatch } = context;

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (productId: number, size: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size } });
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId, size);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, quantity } });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    cart: state,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    clearCart,
  };
}
