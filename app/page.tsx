"use client";
import FeaturedCollections from "./component/Collection";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import useProductsStore, { Product } from "./store/useProductsStore";

async function fetchData() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const page = () => {
  const products = useProductsStore((s) => s.products);
  const setProducts = useProductsStore((s) => s.setProducts);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    if (!products || products.length === 0) {
      // If we have persisted data in localStorage, use it instead of fetching.
      try {
        const raw = localStorage.getItem("products-storage");
        if (raw) {
          const parsed = JSON.parse(raw);
          const persisted = parsed?.state?.products ?? parsed?.products ?? null;
          if (persisted && Array.isArray(persisted) && persisted.length > 0) {
            setProducts(persisted as Product[]);
            return () => {
              mounted = false;
            };
          }
        }
      } catch (e) {
        // ignore parse errors and fall back to fetch
      }

      setIsLoading(true);
      fetchData()
        .then((data) => {
          if (!mounted) return;
          setProducts(data.products as Product[]);
        })
        .catch((err) => {
          if (!mounted) return;
          setError(err);
        })
        .finally(() => {
          if (!mounted) return;
          setIsLoading(false);
        });
    }
    return () => {
      mounted = false;
    };
  }, [products, setProducts]);

  return (
    <div className="bg-white py-20 px-6 lg:px-12">
      <div className="text-center my-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Featured Collections
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Discover Our Curated Selection Of Premium Pieces
          </p>
        </div>

      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {products && products.length > 0
          ? products.map((post: Product) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[320px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-300"
              >
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-50"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-8">
                  <div>
                    <h3 className="text-white text-2xl font-semibold">{post.title}</h3>
                    {/* <p className="text-white/80 text-sm mt-1 ">{post.description}</p> */}
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black ">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      {error && <p>Error: {error?.message ?? String(error)}</p>}
      {/* <FeaturedCollections /> */}
    </div>
  );
};

export default page;
