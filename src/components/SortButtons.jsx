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
    <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-x-4 text-brand-gray-300">
      <div className="rounded-lg bg-brand-orange-100 w-10 h-10 flex justify-center cursor-pointer">
        <SortBar />
      </div>
      <button
        className={`py-2 cursor-pointer hover-primary ${
          selected === "popular" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("popular")}
      >
        محبوب ترین محصول
      </button>
      <button
        className={`py-2 cursor-pointer hover-primary ${
          selected === "visited" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("visited")}
      >
        پر بازدید ترین محصول
      </button>
      <button
        className={`py-2 cursor-pointer hover-primary ${
          selected === "expensive" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("expensive")}
      >
        گران ترین محصول
      </button>
      <button
        className={`py-2 cursor-pointer hover-primary ${
          selected === "cheap" ? "text-brand-slate-800 font-bold" : ""
        }`}
        onClick={() => handleClick("cheap")}
      >
        ارزان ترین محصول
      </button>
    </div>
  );
}
