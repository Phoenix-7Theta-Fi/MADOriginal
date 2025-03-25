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
    description: "Introducing the M.A.D. Tandava Chakra Tee! Experience powerful art without breaking the bank. This tee features a striking design of Shiva's dynamic Tandava, the cosmic dance of creation and destruction, alongside the seven chakras for inner balance. It's a bold statement piece with deep meaning, offered at a price that makes high-quality design accessible to everyone. Express your inner power and spiritual side with M.A.D.!"
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}
