import Image from "next/image";
import React, { useState } from "react";
import CategoryList from "./CategoryList";
import AccordionItem from "./Accordion";

const categories = [
  {
    id: 1,
    name: "گوشی موبایل",
    alt: "phone",
    path: "/images/categories/phone.svg",
    key: "phone", // key انگلیسی برای فیلتر
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
      <hr className="text-brand-stone-100" />

      <div className="flex flex-col mt-2.5">
        <div>
          <h2 className="text-brand-orange-400 font-bold text-lg">فیلتر</h2>
        </div>
      </div>
    </>
  );
}
