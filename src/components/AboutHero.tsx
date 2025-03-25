import Link from 'next/link';

export function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4 hero-text [&>h1]:!text-black [&>h1]:!bg-none [&>p]:!text-black [&>p]:!bg-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-black">
          Redefining affordable fashion with premium quality
        </p>
        <div className="mt-12">
          <Link 
            href="/collections"
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
