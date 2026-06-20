import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center">

        {/* Left Side */}
        <div className="px-8 md:px-14 py-12">
          <p className="text-gray-500 text-xl mb-4">
            #Big Fashion Sale
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Limited Time Offer!
            <br />
            Up to <span className="font-extrabold">50% OFF!</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg">
            Redefine Your Everyday Style
          </p>

          {/* Dots */}
          <div className="flex gap-3 mt-10">
            <span className="w-3 h-3 rounded-full bg-gray-800"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center py-10">
          <div className="flex items-end gap-4">

            <Image
              src="https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp"
              alt="White Shirt"
              width={220}
              height={260}
              className="rotate-[-20deg] shadow-xl"
            />

            <Image
              src="https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp"
              alt="Gray Shirt"
              width={220}
              height={260}
              className="rotate-[-6deg] shadow-xl"
            />

            <Image
              src="https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp"
              alt="Black Shirt"
              width={220}
              height={260}
              className="rotate-[10deg] shadow-xl"
            />

          </div>

          <Image
            src="https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp"
            alt="Shoes"
            width={170}
            height={170}
            className="absolute bottom-2 right-10"
          />
        </div>

      </div>
    </section>
  );
}