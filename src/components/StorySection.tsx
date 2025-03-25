export function StorySection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          How M.A.D Began
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-lg mb-6 text-gray-700">
            To disrupt the fashion industry by providing premium quality clothing at prices that don't break the bank. We believe everyone deserves to look their best without compromising their budget.
          </p>
          <p className="text-lg">
            By cutting out middlemen and working directly with ethical manufacturers, we pass the savings directly to you.
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">2018</div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">Founded in a dorm room</h4>
              <p className="text-gray-600">Started with just 3 t-shirt designs sold on campus</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">2020</div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">First retail partnership</h4>
              <p className="text-gray-600">Expanded to 50+ stores nationwide</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">2023</div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">Online store launch</h4>
              <p className="text-gray-600">Reached customers across the country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
