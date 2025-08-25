"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "ساعت هوشمند اپل سری 6",
    category: "اپل",
    price: "۴۸،۲۵۰،۰۰۰",
  },
  { id: 2, title: "ایرپاد پرو ۲", category: "اپل", price: "۱۶،۵۰۰،۰۰۰" },
  {
    id: 3,
    title: "گوشی سامسونگ S23",
    category: "سامسونگ",
    price: "۳۹،۸۰۰،۰۰۰",
  },
  { id: 4, title: "لپ‌تاپ دل XPS 13", category: "دل", price: "۶۲،۴۰۰،۰۰۰" },
  { id: 5, title: "هندزفری شیائومی", category: "شیائومی", price: "۲،۹۵۰،۰۰۰" },
  {
    id: 6,
    title: "مانیتور ال‌جی 27 اینچ",
    category: "ال‌جی",
    price: "۱۸،۷۰۰،۰۰۰",
  },
];

const colorOptions = ["bg-red-400", "bg-blue-400", "bg-green-400"];

export default function Products() {
  const [selectedColor, setSelectedColor] = useState({});

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar */}
      <div className="hidden md:block w-[215px] h-[61px] bg-white p-4">
        Sidebar
      </div>

      <div className="flex-1">
        <div className="mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="hidden md:block col-span-full bg-white p-4 rounded-xl">
              Sort Section
            </div>

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white w-full h-80 rounded-xl p-1.5 shadow-lg"
              >
                {/* Product Image */}
                <div className="bg-brand-slate-200 w-full rounded-xl h-36 flex justify-center items-center mb-5">
                  <div className="relative w-16 h-28">
                    <Image
                      src="/images/Cart/AppleWatch.png"
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Category + Color Options */}
                <div className="flex justify-between mb-5">
                  <span className="text-brand-slate-200 text-xs">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    {colorOptions.map((color, i) => {
                      const isSelected = selectedColor[product.id] === color;
                      return (
                        <div
                          key={i}
                          onClick={() =>
                            setSelectedColor({
                              ...selectedColor,
                              [product.id]: color,
                            })
                          }
                          className={`w-6 h-6 rounded-full cursor-pointer -mr-1 border-2 border-white relative ${color}`}
                        >
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="white"
                              className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-sm font-bold mb-2">{product.title}</h3>

                {/* Price */}
                <div className="flex justify-end gap-1 text-brand-orange-700 mb-3.5">
                  <span>{product.price}</span> <span>تومان</span>
                </div>

                <hr className="text-brand-gray-300-30 mb-2" />

                {/* Button */}
                <button className="text-brand-orange-400 font-bold w-full cursor-pointer">
                  مشاهده و سفارش
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
