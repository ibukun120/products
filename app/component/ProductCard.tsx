// components/ProductCard.jsx
import Image from "next/image";

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
  images?: string[];
}

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < Math.round(rating)
              ? "text-amber-400 text-sm"
              : "text-gray-300 text-sm"
          }
        >
          ★
        </span>
      ))}
      <span className="text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

function StockBadge({
  status,
}: {
  status: "In Stock" | "Low Stock" | "Out of Stock";
}) {
  const styles: Record<string, string> = {
    "In Stock": "bg-emerald-100 text-emerald-900",
    "Low Stock": "bg-amber-100 text-amber-900",
    "Out of Stock": "bg-red-100 text-red-900",
  };

  const badgeClass = styles[status] || styles["Out of Stock"];

  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${badgeClass}`}>
      {status}
    </span>
  );
}

export default function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  const {
    title,
    thumbnail,
    category,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    images,
  } = product;
  const finalPrice = (price - (price * discountPercentage) / 100).toFixed(2);
  const filled = Math.round(rating);

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-gray-50 border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-gray-400 hover:shadow-sm transition-all flex flex-col hover:-translate-y-1 duration-300"
    >
      {/* Image */}
      <div className="relative bg-gray-50 h-36 flex items-center justify-center p-3">
        <Image
          src={images ? images[0] : thumbnail}
          alt={title}
          width={112}
          height={112}
          className="max-h-28 max-w-full object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
          {title}
        </p>
        <p className="text-xs text-gray-400 capitalize">{category}</p>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={
                i < filled ? "text-amber-400 text-xs" : "text-gray-200 text-xs"
              }
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-400 ml-1">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Price + badge */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-sm font-semibold text-gray-900">
            ${finalPrice}
          </span>
          <StockBadge status={availabilityStatus} />
        </div>
      </div>
    </div>
  );
}
