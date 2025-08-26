import Image from "next/image";
import React from "react";

const categories = [
  {
    id: 1,
    name: "تلفن همراه",
    alt: "phone",
    path: "/images/categories/phone.png",
  },
  {
    id: 2,
    name: "لپتاپ",
    alt: "laptop",
    path: "/images/categories/laptop.png",
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    alt: "smartwatch",
    path: "/images/categories/fingerprint.png",
  },
];

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-6 duration-200 transition-all">
        <h2 className="text-brand-orange-400 font-bold text-lg">دسته بندی</h2>

        <ul className="flex flex-col items-start gap-6 cursor-pointer text-brand-gray-300-30">
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className="flex items-center gap-4 hover:text-brand-slate-800"
              >
                <div className="w-7 h-7 bg-brand-gray-300-30 rounded-full relative flex items-center justify-center">
                  <Image
                    src={category.path}
                    alt={category.alt}
                    width={20}
                    height={50}
                  />
                </div>
                <h2 className="transition-colors duration-200 group-hover:text-brand-slate-800">
                  {category.name}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
