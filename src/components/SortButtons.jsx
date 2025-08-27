"use client";
import { useState } from "react";
import { SortBar } from "./Filters";

useState;
export function SortButtons({ onSort }) {
  const [selected, setSelected] = useState("");

  const handleClick = (type) => {
    setSelected(type);
    onSort(type);
  };
  return (
    <div className="bg-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-lg flex items-center gap-x-1 md:gap-x-2 lg:gap-x-4 text-brand-gray-300">
      <div className="rounded-lg bg-brand-orange-100 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex justify-center cursor-pointer flex-shrink-0">
        <SortBar />
      </div>
      <button
        className={`py-1 md:py-2 cursor-pointer hover-primary text-xs lg:text-sm ${
          selected === "popular" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("popular")}
      >
        محبوب ترین محصول
      </button>
      <button
        className={`py-1 md:py-2 cursor-pointer hover-primary text-xs lg:text-sm ${
          selected === "visited" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("visited")}
      >
        پر بازدید ترین محصول
      </button>
      <button
        className={`py-1 md:py-2 cursor-pointer hover-primary text-xs lg:text-sm ${
          selected === "expensive" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("expensive")}
      >
        گران ترین محصول
      </button>
      <button
        className={`py-1 md:py-2 cursor-pointer hover-primary text-xs lg:text-sm ${
          selected === "cheap" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("cheap")}
      >
        ارزان ترین محصول
      </button>
    </div>
  );
}
