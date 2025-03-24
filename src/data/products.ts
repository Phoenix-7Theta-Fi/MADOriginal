export interface Product {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  price: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    frontImage: '/images/M.A.D - 1F.jpg',
    backImage: '/images/M.A.D - 1B.jpg',
    price: '₹599',
    description: 'Experience comfort and style with our signature design.'
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}
