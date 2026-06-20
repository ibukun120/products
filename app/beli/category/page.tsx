"use client"
import React, { useState } from "react";
import { Search } from "lucide-react";
import { fetchProducts } from "@/app/component/beli/Category";

const categories = [
  {
    title: "Beauty",
    image: "https://cdn.dummyjson.com/products/images/beauty/1.jpg",
    type: "cosmetics",
  },
  {
    title: "Fragrances",
    image: "https://cdn.dummyjson.com/products/images/fragrances/1.jpg",
    type: "cosmetics",
  },
  {
    title: "Furniture",
    image: "https://cdn.dummyjson.com/products/images/furniture/1.jpg",
    type: "home",
  },
  {
    title: "Groceries",
    image: "https://cdn.dummyjson.com/products/images/groceries/1.jpg",
    type: "food",
  },
  {
    title: "Home Decoration",
    image: "https://cdn.dummyjson.com/products/images/home-decoration/1.jpg",
    type: "home",
  },
  {
    title: "Kitchen Accessories",
    image:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/1.jpg",
    type: "home",
  },
  {
    title: "Laptops",
    image: "https://cdn.dummyjson.com/products/images/laptops/1.jpg",
    type: "electronics",
  },
  {
    title: "Mens Shirts",
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/1.jpg",
    type: "fashion",
  },
  {
    title: "Mens Shoes",
    image: "https://cdn.dummyjson.com/products/images/mens-shoes/1.jpg",
    type: "fashion",
  },
  {
    title: "Mens Watches",
    image: "https://cdn.dummyjson.com/products/images/mens-watches/1.jpg",
    type: "accessories",
  },
  {
    title: "Mobile Accessories",
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/1.jpg",
    type: "electronics",
  },
  {
    title: "Motorcycle",
    image: "https://cdn.dummyjson.com/products/images/motorcycle/1.jpg",
    type: "vehicles",
  },
  {
    title: "Skin Care",
    image: "https://cdn.dummyjson.com/products/images/skin-care/1.jpg",
    type: "cosmetics",
  },
  {
    title: "Smartphones",
    image: "https://cdn.dummyjson.com/products/images/smartphones/1.jpg",
    type: "electronics",
  },
  {
    title: "Sports Accessories",
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/1.jpg",
    type: "sports",
  },
  {
    title: "Sunglasses",
    image: "https://cdn.dummyjson.com/products/images/sunglasses/1.jpg",
    type: "accessories",
  },
  {
    title: "Tablets",
    image: "https://cdn.dummyjson.com/products/images/tablets/1.jpg",
    type: "electronics",
  },
  {
    title: "Tops",
    image: "https://cdn.dummyjson.com/products/images/tops/1.jpg",
    type: "fashion",
  },
  {
    title: "Vehicle",
    image: "https://cdn.dummyjson.com/products/images/vehicle/1.jpg",
    type: "vehicles",
  },
  {
    title: "Womens Bags",
    image: "https://cdn.dummyjson.com/products/images/womens-bags/1.jpg",
    type: "fashion",
  },
  {
    title: "Womens Dresses",
    image: "https://cdn.dummyjson.com/products/images/womens-dresses/1.jpg",
    type: "fashion",
  },
  {
    title: "Womens Jewellery",
    image: "https://cdn.dummyjson.com/products/images/womens-jewellery/1.jpg",
    type: "accessories",
  },
  {
    title: "Womens Shoes",
    image: "https://cdn.dummyjson.com/products/images/womens-shoes/1.jpg",
    type: "fashion",
  },
  {
    title: "Womens Watches",
    image: "https://cdn.dummyjson.com/products/images/womens-watches/1.jpg",
    type: "accessories",
  },
];


const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Get unique types from categories
  const uniqueTypes = ["All", ...new Set(categories.map((cat) => cat.type))];

  // Filter categories based on search and type
  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "" || selectedType === "All" || category.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="py-12 px-8">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      {/* Search and Filter Bar */}
      <div className="flex gap-3 mb-6">
        {/* Search Input */}
        <div className="flex items-center gap-2 flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
        </div>
        {/* <div>
            {fetchProducts.length}
        </div> */}

        {/* Category Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          {uniqueTypes.map((type) => (
            <option key={type} value={type === "All" ? "" : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.title}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{category.title}</h3>
                <p className="text-xs text-gray-500 capitalize">
                  {category.type}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-8">
            No categories found
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
