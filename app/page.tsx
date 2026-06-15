'use client';

import Link from 'next/link';
import Nav from './component/Nav';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav />

        <section className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide">
              Discover Something Amazing
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Curated products designed to elevate your everyday lifestyle.
            </p>

            <Link
              href="/products"
              className="inline-block mt-10 bg-white text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}