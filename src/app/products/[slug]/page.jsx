import React from "react";
import { PRODUCTS } from "@/constants/data";

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-center font-bold text-2xl text-red-500">
          محصول یافت نشد
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold text-2xl mb-8">{product.title}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={product.src}
              alt={product.title}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                مشخصات محصول
              </h2>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="font-medium">برند:</span> {product.brand}
                </p>
                <p>
                  <span className="font-medium">دسته‌بندی:</span>{" "}
                  {product.categoryLabel}
                </p>
                <p>
                  <span className="font-medium">قیمت:</span>{" "}
                  {product.price.toLocaleString()} تومان
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-brand-orange-400 text-white px-6 py-3 rounded-lg hover:bg-brand-orange-500 transition-colors">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
