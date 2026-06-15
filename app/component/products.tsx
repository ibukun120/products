"use client";
import { useState, type ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const filtered: Product[] = (products || []).filter((p: Product) => {
    if (!query.trim()) return true; // Show all products when search is empty
    return (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedProducts = filtered.slice(startIdx, endIdx);

  // Reset to page 1 when search query changes
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setQuery("");
    setCurrentPage(1);
  };

  console.log('filtered', filtered)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-12">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isLoading && 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="border border-gray-200 rounded-lg p-4 animate-pulse"
    >
      <div className="bg-gray-200 h-48 rounded-md mb-4" />

      <div className="bg-gray-200 h-4 rounded w-3/4 mb-2" />

      <div className="bg-gray-200 h-3 rounded w-full mb-2" />

      <div className="bg-gray-200 h-3 rounded w-5/6 mb-4" />

      <div className="bg-gray-200 h-5 rounded w-1/3" />
    </div>
  ))}
</div>
      }

      {/* Empty state */}
      {!isLoading && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
    <IoSearchSharp size={24}/>
  </div>

  <h3 className="text-xl font-semibold text-gray-900">
    No products found
  </h3>

  <p className="mt-2 max-w-md text-sm text-gray-500">
    We couldn't find any products matching your search or filter criteria.
  </p>

  <button
    onClick={clearFilters}
    className="mt-6 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 cursor-pointer hover:scale-105  duration-300"
  >
    Clear Filters
  </button>
</div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {paginatedProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelected}   // <-- pass setter as onSelect
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>
              Showing {paginatedProducts.length} of {filtered.length} results
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-400">Page {currentPage} of {totalPages}</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>

            {currentPage > 2 && (
              <button
                onClick={() => setCurrentPage(1)}
                className="w-9 h-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                1
              </button>
            )}

            {currentPage > 3 && (
              <span className="text-sm text-gray-400">...</span>
            )}

            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
              const page = currentPage - 1 + i;
              return page > 0 && page <= totalPages ? (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-lg border text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ) : null;
            })}

            {currentPage < totalPages - 2 && (
              <span className="text-sm text-gray-400">...</span>
            )}

            {currentPage < totalPages - 1 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="w-9 h-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

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