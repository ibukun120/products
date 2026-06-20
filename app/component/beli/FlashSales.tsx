"use client";

import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "EliteShield Performance Men's Jackets",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 255000,
    oldPrice: 625000,
    sold: 9,
    total: 10,
  },
  {
    id: 2,
    title: "Premium Gray Hat",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 99000,
    oldPrice: 150000,
    sold: 9,
    total: 10,
  },
  {
    id: 3,
    title: "Camera Shoulder Bag",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 250000,
    oldPrice: 425000,
    sold: 6,
    total: 10,
  },
  {
    id: 4,
    title: "Cloudy Chic Heeled Sandals",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 270000,
    oldPrice: 480000,
    sold: 6,
    total: 10,
  },
  {
    id: 5,
    title: "EliteShield Performance Men's Jackets",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 255000,
    oldPrice: 625000,
    sold: 9,
    total: 10,
  },
  {
    id: 6,
    title: "Premium Gray Hat",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 99000,
    oldPrice: 150000,
    sold: 9,
    total: 10,
  },
];

export default function FlashSale() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
              <Zap size={18} />
            </div>

            <h2 className="text-3xl font-bold">
              Flash Sale
            </h2>
          </div>

          {/* Timer */}

          <div className="flex items-center gap-2 font-semibold">

            <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
              00
            </span>

            <span>:</span>

            <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
              17
            </span>

            <span>:</span>

            <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
              56
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button className="w-11 h-11 border rounded-lg flex items-center justify-center hover:bg-gray-100">
            <ChevronLeft />
          </button>

          <button className="w-11 h-11 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800">
            <ChevronRight />
          </button>

        </div>

      </div>

      {/* Products */}

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}

      </div>

    </section>
  );
}