"use client";
import React, { useState } from "react";
import CategoryList, { CategoryIcon } from "./CategoryList";
import AccordionItem from "./Accordion";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "گوشی موبایل",
    alt: "phone",
    path: "/images/categories/phone.svg",
    key: "phone",
  },
  {
    id: 2,
    name: "لپ‌تاپ",
    alt: "laptop",
    path: "/images/categories/laptop.svg",
    key: "laptop",
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    alt: "smartwatch",
    path: "/images/categories/watch.svg",
    key: "smartwatch",
  },
];

const moreCategories = [
  {
    id: 4,
    name: "لوازم جانبی",
    alt: "accessory",
    path: "/images/categories/accessory.svg",
    key: "accessory",
  },
  {
    id: 5,
    name: "مانیتور",
    alt: "monitor",
    path: "/images/categories/monitor.svg",
    key: "monitor",
  },
  {
    id: 6,
    name: "تبلت",
    alt: "tablet",
    path: "/images/categories/tablet.svg",
    key: "tablet",
  },
  {
    id: 7,
    name: "تلویزیون",
    alt: "tv",
    path: "/images/categories/tv.svg",
    key: "tv",
  },
  {
    id: 8,
    name: "کنسول بازی",
    alt: "console",
    path: "/images/categories/console.svg",
    key: "console",
  },
  {
    id: 9,
    name: "دوربین",
    alt: "camera",
    path: "/images/categories/camera.svg",
    key: "camera",
  },
];

const filters = [
  {
    id: 1,
    name: "برند محصول",
    icon: "/images/categories/brand.svg",
    alt: "brand",
    href: "/",
  },
  {
    id: 2,
    name: "رنگ محصول",
    icon: "/images/categories/color.svg",
    alt: "color",
    href: "/",
  },
  {
    id: 3,
    name: "محدوده قیمت",
    icon: "/images/categories/price.svg",
    alt: "color",
    href: "/",
  },
];

export default function SideBar() {
  const [allCategories, setAllCategories] = useState(categories);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(
    categories[0]?.key
  );
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const brandOptionsByCategory = {
    phone: [
      { id: "apple", label: "اپل" },
      { id: "samsung", label: "سامسونگ" },
      { id: "xiaomi", label: "شیائومی" },
      { id: "nokia", label: "نوکیا" },
      { id: "huawei", label: "هواوی" },
    ],
    laptop: [
      { id: "dell", label: "دل" },
      { id: "asus", label: "ایسوس" },
      { id: "apple", label: "اپل" },
      { id: "lenovo", label: "لنوو" },
      { id: "hp", label: "اچ‌پی" },
    ],
    smartwatch: [
      { id: "apple", label: "اپل" },
      { id: "samsung", label: "سامسونگ" },
      { id: "xiaomi", label: "شیائومی" },
      { id: "huawei", label: "هواوی" },
    ],
    accessory: [
      { id: "apple", label: "اپل" },
      { id: "xiaomi", label: "شیائومی" },
      { id: "sony", label: "سونی" },
      { id: "jbl", label: "جی‌بی‌ال" },
      { id: "anker", label: "انکر" },
    ],
    monitor: [
      { id: "lg", label: "ال‌جی" },
      { id: "samsung", label: "سامسونگ" },
      { id: "asus", label: "ایسوس" },
      { id: "benq", label: "بنکیو" },
    ],
    tablet: [
      { id: "apple", label: "اپل" },
      { id: "samsung", label: "سامسونگ" },
      { id: "huawei", label: "هواوی" },
      { id: "xiaomi", label: "شیائومی" },
    ],
    tv: [
      { id: "samsung", label: "سامسونگ" },
      { id: "lg", label: "ال‌جی" },
      { id: "sony", label: "سونی" },
      { id: "tcl", label: "تی‌سی‌ال" },
    ],
    console: [
      { id: "sony", label: "سونی (پلی‌استیشن)" },
      { id: "microsoft", label: "مایکروسافت (ایکس‌باکس)" },
      { id: "nintendo", label: "نینتندو" },
    ],
    camera: [
      { id: "canon", label: "کانن" },
      { id: "nikon", label: "نیکون" },
      { id: "sony", label: "سونی" },
      { id: "fujifilm", label: "فوجی‌فیلم" },
    ],
  };
  const colorOptions = [
    { id: "black", hex: "#000000", label: "مشکی" },
    { id: "white", hex: "#FFFFFF", label: "سفید" },
    { id: "red", hex: "#EF4444", label: "قرمز" },
    { id: "blue", hex: "#3B82F6", label: "آبی" },
    { id: "yellow", hex: "#FACC15", label: "زرد" },
    { id: "green", hex: "#10B981", label: "سبز" },
    { id: "purple", hex: "#8B5CF6", label: "بنفش" },
    { id: "pink", hex: "#EC4899", label: "صورتی" },
  ];

  function handleAccordionToggle(isOpen) {
    if (isOpen) {
      setAllCategories([...categories, ...moreCategories]);
    } else {
      setAllCategories(categories);
    }
  }

  return (
    <>
      <CategoryList
        categories={allCategories}
        onSelect={(key) => setSelectedCategoryKey(key)}
        selectedKey={selectedCategoryKey}
      />
      <AccordionItem
        onToggle={handleAccordionToggle}
        trigger={
          <div className="text-center text-brand-gray-300 text-sm py-2">
            نمایش دسته‌بندی‌های بیشتر
          </div>
        }
      />
      <hr className="text-brand-gray-200" />

      <div className="flex flex-col gap-6 mb-5">
        <h2 className="text-brand-orange-400 font-bold text-lg mt-4">فیلتر</h2>

        <ul className="flex flex-col gap-6 cursor-pointer text-brand-gray-300">
          {filters.map((filter) => (
            <li key={filter.id} className="hover-primary cursor-pointer">
              <AccordionItem
                trigger={
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <CategoryIcon src={filter.icon} alt={filter.alt} />
                      <Link href={filter.href}>{filter.name}</Link>
                    </div>
                  </div>
                }
              >
                {filter.name === "برند محصول" && (
                  <div className="flex flex-col gap-3 pr-1">
                    {(brandOptionsByCategory[selectedCategoryKey] || []).map(
                      (brand) => (
                        <label
                          key={brand.id}
                          className="flex items-center gap-2 text-sm cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`brand-${selectedCategoryKey}`}
                            value={brand.id}
                            checked={selectedBrandId === brand.id}
                            onChange={() => setSelectedBrandId(brand.id)}
                            className="w-4 h-4 bg-white rounded cursor-pointer border border-brand-gray-200 accent-brand-orange-300 appearance-none checked:bg-brand-orange-300 checked:border-brand-orange-300"
                          />

                          <span>{brand.label}</span>
                        </label>
                      )
                    )}
                  </div>
                )}

                {filter.name === "رنگ محصول" && (
                  <div className="flex flex-wrap flex-col gap-3">
                    {colorOptions.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span
                          className="inline-block w-4 h-4 rounded border border-brand-gray-200"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {filter.name === "محدوده قیمت" && (
                  <div className="text-sm text-brand-gray-300">
                    به‌زودی: فیلتر قیمت
                  </div>
                )}
              </AccordionItem>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
