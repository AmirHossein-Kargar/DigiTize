import Image from "next/image";
import React from "react";

const categories = [
  {
    id: 1,
    name: "تلفن همراه",
    alt: "phone",
    path: "/images/categories/phone.svg",
  },
  {
    id: 2,
    name: "لپتاپ",
    alt: "laptop",
    path: "/images/categories/laptop.svg",
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    alt: "smartwatch",
    path: "/images/categories/watch.svg",
  },
];

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-6 duration-200 transition-all mb-5">
        <h2 className="text-brand-orange-400 font-bold text-lg">دسته بندی</h2>

        <ul className="flex flex-col items-start gap-6 cursor-pointer text-brand-gray-300">
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className="flex items-center gap-4 hover:text-brand-slate-800"
              >
                <div className="w-8 h-8 bg-brand-gray-300-30 rounded-full relative flex items-center justify-center">
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
      <hr className="text-brand-stone-100" />
     
      <div className="flex flex-col mt-2.5">
        <div>
        <h2 className="text-brand-orange-400 font-bold text-lg">فیلتر</h2>

        </div>
      </div>

    </>
  );
}
