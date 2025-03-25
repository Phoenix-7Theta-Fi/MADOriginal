import { Metadata } from 'next';
import { CollectionCard } from '@/components/CollectionCard';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Collections | M.A.D - Most Affordable Designs',
  description: 'Browse our premium fashion collections at affordable prices without compromising on quality or style.',
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Collections
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <CollectionCard
                key={product.id} 
                product={product}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
