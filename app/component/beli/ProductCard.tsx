"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  sold: number;
  total: number;
}

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  sold,
  total,
}: ProductCardProps) {
  const progress = (sold / total) * 100;

  return (
    <div className="min-w-[250px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="relative h-60 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6"
        />

        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
          <Heart className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">

        <h3 className="font-medium text-gray-900 line-clamp-2 h-12">
          {title}
        </h3>

        <div className="flex items-end gap-2 mt-3">
          <span className="text-2xl font-bold">
            Rp{price.toLocaleString()}
          </span>

          <span className="text-sm text-red-400 line-through">
            Rp{oldPrice.toLocaleString()}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-5">

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-black rounded-full"
            />
          </div>

          <p className="text-xs text-gray-400 mt-2 text-right">
            {sold}/{total} Sale
          </p>

        </div>

      </div>

    </div>
  );
}