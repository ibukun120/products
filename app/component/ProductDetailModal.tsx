"use client";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock";
  brand: string;
  description?: string;
  tags?: string[];
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}

import { useEffect } from "react";
// import type { Product } from "./ProductCard";

type AvailabilityStatus = "In Stock" | "Low Stock" | "Out of Stock";

function StockBadge({ status }: { status: AvailabilityStatus }) {
  const styles: Record<AvailabilityStatus, string> = {
    "In Stock": "bg-green-100 text-green-800",
    "Low Stock": "bg-yellow-100 text-yellow-800",
    "Out of Stock": "bg-red-100 text-red-800",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!product) return null;

  const {
    title, thumbnail, category, brand, description,
    price, discountPercentage, rating, stock,
    availabilityStatus, tags,
    warrantyInformation, shippingInformation, returnPolicy,
  }: Product = product;

  const finalPrice = (price - (price * discountPercentage) / 100).toFixed(2);
  const saved = (price - parseFloat(finalPrice)).toFixed(2);
  const filled = Math.round(rating);

  return (
    // Backdrop — click outside to close
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal — stop clicks propagating to backdrop */}
      <div
        className="bg-white rounded-2xl w-full max-w-xl shadow-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <span className="text-xs text-gray-400 capitalize">
            {category}{brand ? ` · ${brand}` : ""}
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Image + Info */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-48 bg-gray-50 flex items-center justify-center p-6 shrink-0">
            <img
              src={thumbnail}
              alt={title}
              className="max-h-40 max-w-full object-contain"
              onError={e => (e.currentTarget.style.display = "none")}
            />
          </div>

          <div className="flex-1 p-5 flex flex-col gap-3">
            <h2 className="text-base font-semibold text-gray-900 leading-snug">{title}</h2>

            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < filled ? "text-amber-400" : "text-gray-200"}>★</span>
              ))}
              <span className="text-xs text-gray-400 ml-1">{rating.toFixed(1)}</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-gray-900">${finalPrice}</span>
              <span className="text-sm text-gray-400 line-through">${price.toFixed(2)}</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                Save ${saved}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags?.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <StockBadge status={availabilityStatus} />
          </div>
        </div>

        {/* Details Table */}
        <div className="px-5 pb-5 border-t border-gray-100 mt-2">
          {[
            ["Stock",    `${stock} units`],
            ["Shipping", shippingInformation],
            ["Warranty", warrantyInformation],
            ["Returns",  returnPolicy],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 text-sm">
              <span className="text-gray-400">{label}</span>
              <span className="text-gray-700 font-medium text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}