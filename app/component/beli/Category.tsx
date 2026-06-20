"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Shirt,
  ShoppingBag,
  Watch,
  Footprints,
  Grid2X2,
  Package,
} from "lucide-react";
import ProductCard, { Product } from "../ProductCard";
import ProductDetailModal from "../ProductDetailModal";

const categories = [
  {
    name: "Beauty",
    icon: <Shirt size={28} />,
    img: "/images/beauty.png",
    type: "beauty",
  },
  {
    name: "Fragrance",
    icon: <Package size={28} />,
    img: "/images/fragrances.png",
    type: "fragrances",
  },
  {
    name: "Funiture",
    icon: <Shirt size={28} />,
    type: "furniture",
  },
  {
    name: "Groceries",
    icon: <Package size={28} />,
    img: "/images/groceries.png",
    type: "groceries",
  },
  {
    name: "Home-decoration",
    icon: <ShoppingBag size={28} />,
    img: "/images/home-decoration.jpg",
    type: "home-decoration",
  },
  {
    name: "kitchen-accessories",
    icon: <Footprints size={28} />,
    img: "/images/kitchen-accessories.png",
    type: "kitchen-accessories",
  },
  {
    name: "Laptop",
    icon: <Watch size={28} />,
    img: "/images/laptop.jpg",
    type: "laptops",
  },
  {
    name: "Men-Shirt",
    icon: <Package size={28} />,
    img: "/images/mens-shirts.png",
    type: "mens-shirts",
  },
];
const proper = [
  {name: "prosper",
    level: "senior",
    dept: "admin"
  },
  {name: "seyi",
    level: "senior",
    dept: "store"
  },
  {name: "tobi",
    level: "senior",
    dept: "admin"
  },
  {name: "tolu",
    level: "senior",
    dept: "store"
  },
  {name: "mary",
    level: "senior",
    dept: "admin"
  },
]
const admins = proper.filter(person => person.dept === "admin");
console.log(admins);
// console.log(categories);
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://dummyjson.com/products?limit=1000");
  const products = res.data.products as Product[];
  return products.map((product) => ({
    ...product,
    availabilityStatus:
      product.stock === 0
        ? "Out of Stock"
        : product.stock < 5
        ? "Low Stock"
        : "In Stock",
    tags: product.tags ?? [],
    warrantyInformation: product.warrantyInformation ?? "N/A",
    shippingInformation: product.shippingInformation ?? "Standard shipping",
    returnPolicy: product.returnPolicy ?? "30-day returns",
  }));
};

// list of category 
// beauty
//  fragrances
//  furniture = <Armchair />
// groceries
//  home-decoration
//  kitchen-accessories
//  laptops
//  mens-shirts
//  mens-shoes
//  mens-watches
//  mobile-accessories
//  motorcycle
//  skin-care
//  smartphones
//  sports-accessories
//  sunglasses
//  tablets
//  tops
//  vehicle
//  womens-bags
//  womens-dresses
//  womens-jewellery
//  womens-shoes
//  womens-watches

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data ?? [];
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  const selectedCategoryLabel = categories.find(
    (category) => category.type === selectedCategory
  )?.name;

  if (isLoading) return <div className="py-8">Loading...</div>;

  return (
    <div className="bg-white py-8 w-full">
      <div className="flex justify-between overflow-x-auto scrollbar-hide px-4 w-full gap-4">
        {categories.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelectedCategory(item.type)}
            className={`flex flex-col items-center shrink-0 transition-all duration-300 cursor-pointer ${
              selectedCategory === item.type ? "bg-gray-100 p-2 rounded-2xl" : "hover:scale-100"
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 overflow-hidden transition-all duration-300">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                item.icon
              )}
            </div>

            <p className="mt-3 font-medium">{item.name}</p>
            <p className="text-xs text-gray-500 capitalize">{item.type}</p>
          </button>
        ))}

        <Link
          href="/beli/category"
          className="flex flex-col items-center shrink-0 "
        >
          <div className="w-20 h-20 rounded-full border flex items-center justify-center">
            <Grid2X2 size={30} />
          </div>

          <p className="mt-3 font-medium">All Category</p>
        </Link>
      </div>

      {selectedCategory ? (
        <div className="mt-8 px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Products in {selectedCategoryLabel}
              </h2>
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} product(s)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Back to categories
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
              No products were found for {selectedCategoryLabel}.
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 px-4 py-8 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
          Click a category above to view products from that category.
        </div>
      )}

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}