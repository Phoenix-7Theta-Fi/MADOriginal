export interface CartItem {
  productId: number;
  name: string;
  price: string;
  size: 'S' | 'M' | 'L' | 'XL';
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  subTotal: string;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: number; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; size: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' };
