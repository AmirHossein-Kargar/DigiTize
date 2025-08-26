"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SortButtons } from "./SortButtons";
import SideBar from "./SideBar";

const products = [
  {
    id: 1,
    title: "ساعت هوشمند اپل سری 6",
    category: "smartwatch",
    categoryLabel: "ساعت هوشمند",
    brand: "Apple",
    price: 48250000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 2,
    title: "ایرپاد پرو ۲",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Apple",
    price: 16500000,
    src: "/images/Cart/airpodspro2.png",
  },
  {
    id: 3,
    title: "گوشی سامسونگ S23",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Samsung",
    price: 39800000,
    src: "/images/Cart/S23.png",
  },
  {
    id: 4,
    title: "لپ‌تاپ دل XPS 13",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    brand: "Dell",
    price: 62400000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 5,
    title: "هدفون بلوتوثی شیائومی مدل Redmi Buds 5",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Xiaomi",
    price: 2950000,
    src: "/images/Cart/RedmiBuds.png",
  },
  {
    id: 6,
    title: "مانیتور ال‌جی 27 اینچ",
    category: "monitor",
    categoryLabel: "مانیتور",
    brand: "LG",
    price: 18700000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 7,
    title: "تبلت آیپد پرو ۱۲.۹ اینچ",
    category: "tablet",
    categoryLabel: "تبلت",
    brand: "Apple",
    price: 75000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 8,
    title: "هدفون سونی WH-1000XM4",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Sony",
    price: 21500000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 9,
    title: "گوشی شیائومی Mi 11",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Xiaomi",
    price: 27300000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 10,
    title: "تلویزیون سامسونگ 55 اینچ",
    category: "tv",
    categoryLabel: "تلویزیون",
    brand: "Samsung",
    price: 45000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 11,
    title: "کنسول بازی پلی‌استیشن ۵",
    category: "console",
    categoryLabel: "کنسول بازی",
    brand: "Sony",
    price: 32900000,
    src: "/images/Cart/ps5.png",
  },
  {
    id: 12,
    title: "اسپیکر بلوتوث جی‌بی‌ال",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "JBL",
    price: 4850000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 13,
    title: "دوربین عکاسی کانن EOS M50",
    category: "camera",
    categoryLabel: "دوربین",
    brand: "Canon",
    price: 34500000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 14,
    title: "لپ‌تاپ ایسوس ROG",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    brand: "Asus",
    price: 79000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 15,
    title: "گوشی نوکیا G21",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Nokia",
    price: 7900000,
    src: "/images/Cart/AppleWatch.png",
  },
];

const colorOptions = ["bg-red-400", "bg-blue-400", "bg-green-400"];

const formatter = new Intl.NumberFormat("fa-IR");

export default function Products() {
  const [selectedColor, setSelectedColor] = useState({});
  const [displayProducts, setDisplayProducts] = useState(products);

  function handleSort(type) {
    let sorted = [...displayProducts];

    if (type === "expensive") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (type === "cheap") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setDisplayProducts(sorted);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar */}
      <div className="hidden md:block">
        <div className="bg-white p-4 w-[215px] rounded-lg">
          <SideBar />
        </div>
      </div>

      <div className="flex-1">
        <div className="mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="hidden md:block col-span-full mb-11">
              <SortButtons onSort={handleSort} />
            </div>

            {displayProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white w-full h-full rounded-xl p-1.5 shadow-lg"
              >
                {/* Product Image */}
                <div className=" relative bg-brand-slate-200 w-full rounded-xl h-36 flex justify-center items-center mb-5">
                  <div className="relative w-full h-28">
                    <Image
                      src={product.src}
                      alt={product.title}
                      // width={200}
                      // height={200}
                      fill
                      className="object-contain hover-scale cursor-pointer"
                    />
                  </div>
                  <div className="w-8 h-8 bg-brand-gray-300 rounded-full absolute top-2 right-2">
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      width="20"
                      height="20"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.21581 4.59197C10.4936 3.39447 12.5654 3.39447 13.8432 4.59197C15.1211 5.78954 15.1211 7.73123 13.8432 8.9288L9.18566 13.2935C9.05107 13.4196 8.8329 13.4196 8.6983 13.2935L4.04077 8.9288C2.76286 7.73123 2.76286 5.78954 4.04077 4.59197C5.3186 3.39447 7.39033 3.39447 8.66816 4.59197L8.94198 4.84858L9.21581 4.59197Z"
                        fill="#FC5858"
                      />
                    </svg>
                  </div>
                </div>

                {/* Category + Color Options */}
                <div className="flex justify-between mb-5">
                  <span className="text-brand-gray-300 text-xs">
                    {product.categoryLabel}
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
                              fillRule="none"
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

                <Link
                  href="/"
                  className="text-sm font-bold mb-2 cursor-pointer text-brand-slate-800"
                >
                  {product.title}
                </Link>

                {/* Price */}
                <div className="flex justify-end gap-1 text-brand-orange-700 mb-3.5 cursor-default my-2">
                  <span>{formatter.format(product.price)}</span>{" "}
                  <span>تومان</span>
                </div>

                <hr className="text-brand-gray-300-30 mb-2" />

                <button className="text-brand-orange-400 font-bold w-full cursor-pointer">
                  <Link href="/">مشاهده و سفارش</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
