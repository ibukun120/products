"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard, { type Product } from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://dummyjson.com/products?limit=1000");
//   console.log('fetched products', res.data.products);
  return res.data.products as Product[];
};

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);   // <-- holds the clicked product

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const filtered: Product[] = (products || []).filter((p: Product) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  console.log('filtered', filtered)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-12">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isLoading && <p className="text-gray-400 text-sm">Loading...</p>}

      {/* Empty state */}
      {!isLoading && filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📦</p>
          <p className="font-medium text-gray-600">No products found</p>
          <p className="text-sm">Try searching something else</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelected}   // <-- pass setter as onSelect
          />
        ))}
      </div>

      {/* Modal — only renders when a product is selected */}
      {selected && (
        <ProductDetailModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}