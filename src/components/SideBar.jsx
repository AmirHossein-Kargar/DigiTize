"use client"
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
  { id: 1, name: "برند محصول", icon: "/images/categories/brand.svg", alt: "brand", href: "/" },
  { id: 2, name: "رنگ محصول", icon: "/images/categories/color.svg", alt: "color", href: "/" },
  { id: 3, name: "محدوده قیمت", icon: "/images/categories/price.svg", alt: "color", href: "/" },
];


export default function SideBar() {
  const [allCategories, setAllCategories] = useState(categories);

  function handleAccordionToggle(isOpen) {
    if (isOpen) {
      setAllCategories([...categories, ...moreCategories]);
    } else {
      setAllCategories(categories);
    }
  }
  return (
    <>
      <CategoryList categories={allCategories} />
      <AccordionItem onToggle={handleAccordionToggle}>
        <div className="text-center text-brand-gray-300 text-sm py-2">
          نمایش دسته‌بندی‌های بیشتر
        </div>
      </AccordionItem>
      <hr className="text-brand-gray-200" />

      <div className="flex flex-col gap-6 mb-5">
  <h2 className="text-brand-orange-400 font-bold text-lg mt-4">فیلتر</h2>

  <ul className="flex flex-col gap-6 cursor-pointer text-brand-gray-300">
    {filters.map((filter) => (
      <li key={filter.id} className="flex justify-between items-center hover-primary cursor-pointer">
        <CategoryIcon src={filter.icon} alt={filter.alt} />
        <Link href={filter.href}>{filter.name}</Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </li>
    ))}
  </ul>
</div>
    </>
  );
}
