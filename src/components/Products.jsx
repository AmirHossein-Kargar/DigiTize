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
    slug: "apple-watch-series-6",
    price: 48250000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 2,
    title: "ایرپاد پرو ۲",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Apple",
    slug: "airpods-pro-2",
    price: 16500000,
    src: "/images/Cart/airpodspro2.png",
  },
  {
    id: 3,
    title: "گوشی سامسونگ S23",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Samsung",
    slug: "samsung-galaxy-s23",
    price: 39800000,
    src: "/images/Cart/S23.png",
  },
  {
    id: 4,
    title: "لپ‌تاپ دل XPS 13",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    brand: "Dell",
    slug: "dell-xps-13",
    price: 62400000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 5,
    title: "هدفون بلوتوثی شیائومی مدل Redmi Buds 5",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Xiaomi",
    slug: "xiaomi-redmi-buds-5",
    price: 2950000,
    src: "/images/Cart/RedmiBuds.png",
  },
  {
    id: 6,
    title: "مانیتور ال‌جی 27 اینچ",
    category: "monitor",
    categoryLabel: "مانیتور",
    brand: "LG",
    slug: "lg-monitor-27-inch",
    price: 18700000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 7,
    title: "تبلت آیپد پرو ۱۲.۹ اینچ",
    category: "tablet",
    categoryLabel: "تبلت",
    brand: "Apple",
    slug: "ipad-pro-12-9",
    price: 75000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 8,
    title: "هدفون سونی WH-1000XM4",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "Sony",
    slug: "sony-wh-1000xm4",
    price: 21500000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 9,
    title: "گوشی شیائومی Mi 11",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Xiaomi",
    slug: "xiaomi-mi-11",
    price: 27300000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 10,
    title: "تلویزیون سامسونگ 55 اینچ",
    category: "tv",
    categoryLabel: "تلویزیون",
    brand: "Samsung",
    slug: "samsung-tv-55-inch",
    price: 45000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 11,
    title: "کنسول بازی پلی‌استیشن ۵",
    category: "console",
    categoryLabel: "کنسول بازی",
    brand: "Sony",
    slug: "playstation-5",
    price: 32900000,
    src: "/images/Cart/ps5.png",
  },
  {
    id: 12,
    title: "اسپیکر بلوتوث جی‌بی‌ال",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    brand: "JBL",
    slug: "jbl-bluetooth-speaker",
    price: 4850000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 13,
    title: "دوربین عکاسی کانن EOS M50",
    category: "camera",
    categoryLabel: "دوربین",
    brand: "Canon",
    slug: "canon-eos-m50",
    price: 34500000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 14,
    title: "لپ‌تاپ ایسوس ROG",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    brand: "Asus",
    slug: "asus-rog-laptop",
    price: 79000000,
    src: "/images/Cart/AppleWatch.png",
  },
  {
    id: 15,
    title: "گوشی نوکیا G21",
    category: "phone",
    categoryLabel: "گوشی موبایل",
    brand: "Nokia",
    slug: "nokia-g21",
    price: 7900000,
    src: "/images/Cart/AppleWatch.png",
  },
];

const colorOptions = ["bg-red-400", "bg-blue-400", "bg-green-400"];

const formatter = new Intl.NumberFormat("fa-IR");

export default function Products() {
  const [selectedColor, setSelectedColor] = useState({});
  const [displayProducts, setDisplayProducts] = useState(products);

  // * product status
  const [cart, setCart] = useState([]);

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

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
    <main className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar */}
      <aside className="hidden md:block w-[215px] space-y-4">
        <div className="bg-white p-4 rounded-lg">
          <SideBar />
        </div>

        {/* Advertise Section */}
        <div className="w-full h-44 relative overflow-hidden bg-brand-slate-800 rounded-lg flex flex-col justify-end items-center">
          <div className="w-40 h-40 -top-25 -right-20 absolute border border-brand-orange-700 rounded-full"></div>

          <div className="mb-4">
            <h2 className="text-3xl font-bold text-brand-slate-700 text-center ">
              SMART WATCH
            </h2>
            <h3 className="text-brand-stone-50 font-bold ">جدیدترین ساعت های هوشمند</h3>
          </div>
        </div>

      </aside>

      <section className="flex-1">
        <div className="mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-y-10">
            <header className="hidden md:block col-span-full">
              <SortButtons onSort={handleSort} />
            </header>

            {displayProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white w-full h-full rounded-xl p-1.5 shadow-lg flex flex-col"
                itemScope
                itemType="http://schema.org/Product"
              >
                {/* Product Image */}
                <figure className="relative bg-brand-slate-200 w-full rounded-xl h-36 flex justify-center items-center mb-5">
                  <div className="relative w-full h-28">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.src}
                        alt={product.title}
                        fill
                        className="object-contain hover-scale cursor-pointer"
                        itemProp="image"
                      />
                    </Link>
                  </div>
                  <button
                    className="w-8 h-8 bg-brand-gray-300 rounded-full absolute top-2 right-2"
                    aria-label="افزودن به علاقه‌ مندی‌ها"
                  >
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
                  </button>
                </figure>

                {/* Category + Color Options */}
                <div className="flex justify-between mb-5">
                  <span
                    className="text-brand-gray-300 text-xs"
                    itemProp="category"
                  >
                    {product.categoryLabel}
                  </span>
                  <fieldset className="flex items-center">
                    <legend className="sr-only">انتخاب رنگ</legend>
                    {colorOptions.map((color, i) => {
                      const isSelected = selectedColor[product.id] === color;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() =>
                            setSelectedColor({
                              ...selectedColor,
                              [product.id]: color,
                            })
                          }
                          className={`w-6 h-6 rounded-full cursor-pointer -mr-1 border-2 border-white relative ${color}`}
                          aria-label={`انتخاب رنگ ${i + 1}`}
                          aria-pressed={isSelected}
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
                        </button>
                      );
                    })}
                  </fieldset>
                </div>

                {/* Product Title */}
                <h3 className="text-sm font-bold mb-3 min-h-[3rem] flex items-start">
                  <Link
                    href={`/products/${product.slug}`}
                    className="cursor-pointer text-brand-slate-800 hover:text-brand-orange-400 transition-colors duration-200 line-clamp-2 block"
                    itemProp="name"
                  >
                    {product.title}
                  </Link>
                </h3>

                {/* Price */}
                <div className="flex justify-end gap-1 text-brand-orange-700 mb-3 cursor-default">
                  <span itemProp="price" content={product.price}>
                    {formatter.format(product.price)}
                  </span>
                  <span itemProp="priceCurrency" content="IRR">
                    تومان
                  </span>
                </div>

                <footer className="mt-auto">
                  <hr className="text-brand-gray-300-30 mb-2" />
                  <button
                    onClick={() => toggleCart(product.id)}
                    // href={`/products/${product.slug}`}
                    className="text-brand-orange-400 font-bold w-full cursor-pointer block text-center hover:text-brand-orange-500 transition-colors"
                    aria-label={`مشاهده جزئیات ${product.title}`}
                  >
                    {cart.includes(product.id)
                      ? "حذف از سبد خرید"
                      : "افزودن به سبد خرید"}
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
