"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Jackets",
    subtitle: "Premium outerwear",
    image: "/images/jacket.jpg",
  },
  {
    title: "Casual Wear",
    subtitle: "Everyday Essential",
    image: "/images/casual.jpg",
  },
  {
    title: "Suits",
    subtitle: "Tailored perfection",
    image: "/images/suit.jpg",
  },
  {
    title: "Accessories",
    subtitle: "Complete your look",
    image: "/images/accessories.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#f8f7f4] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Featured Collections
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Discover Our Curated Selection Of Premium Pieces
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[320px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-sm mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}