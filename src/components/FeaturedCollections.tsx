import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

const product = products[0];

export function FeaturedCollections() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Featured Collection
        </h2>
        <ProductCard product={product} className="max-w-5xl mx-auto" />
      </div>
    </section>
  );
}
