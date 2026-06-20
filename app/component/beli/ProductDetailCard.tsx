"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  sold: string;
  rating: number;
}

export default function ProductDetailCard({
  title,
  image,
  price,
  oldPrice,
  sold,
  rating,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

      {/* Image */}

      <div className="relative bg-gray-100 h-56">

        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-5"
        />

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center transition"
        >
          <Heart
            size={18}
            className={`transition ${
              favorite
                ? "fill-green-500 text-green-500"
                : "text-gray-400"
            }`}
          />
        </button>

      </div>

      {/* Content */}

      <div className="p-4">

        <h3 className="font-medium text-gray-800 line-clamp-2 h-12">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-sm mt-2">

          <Star
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>{rating}</span>

          <span className="text-gray-400">
            • {sold} Sold
          </span>

        </div>

        <div className="flex items-end gap-2 mt-3">

          <span className="font-bold text-2xl">
            Rp{price.toLocaleString()}
          </span>

          {oldPrice && (
            <span className="text-red-400 line-through text-sm">
              Rp{oldPrice.toLocaleString()}
            </span>
          )}

        </div>

      </div>

    </div>
  );
}