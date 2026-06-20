"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetailCard from "./ProductDetailCard";

const tabs = [
  "Best Seller",
  "Keep Stylish",
  "Special Discount",
  "Official Store",
  "Coveted Product",
];

const products = [
  {
    title: "UrbanEdge Men's Jeans Collection",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 253000,
    oldPrice: 370000,
    sold: "10K+",
    rating: 4.9,
  },
  {
    title: "Essentials Men's Oxford Shirt",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 179000,
    sold: "10K+",
    rating: 4.9,
  },
  {
    title: "StyleHaven Men's Shoes",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
    price: 199000,
    oldPrice: 325000,
    sold: "8K+",
    rating: 4.9,
  },
  {
    title: "Essential Crewneck Shirt",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    price: 120000,
    sold: "5K+",
    rating: 4.9,
  },
  {
    title: "Classic Men's Shoes",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
    price: 199000,
    sold: "4K+",
    rating: 4.9,
  },
  {
    title: "UrbanFlex Shorts",
    image:
      "https://cdn.dummyjson.com/product-images/tops/shorts/1.webp",
    price: 162000,
    sold: "2K+",
    rating: 4.9,
  },
  {
    title: "Elegant Tote Bag",
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-bag/1.webp",
    price: 650000,
    sold: "500+",
    rating: 4.9,
  },
  {
    title: "Women's Parka",
    image:
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-elegant-dress/1.webp",
    price: 324000,
    oldPrice: 550000,
    sold: "100+",
    rating: 4.9,
  },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("Best Seller");

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <h2 className="text-4xl font-bold">
          Today's For You!
        </h2>

        <div className="flex gap-3 flex-wrap">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg border transition
              ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>

          ))}

        </div>

      </div>

      {/* Products */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {products.map((product) => (

          <ProductDetailCard
            key={product.title}
            {...product}
          />

        ))}

      </div>

    </section>
  );
}