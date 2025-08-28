import React from "react";

export default function Input({ type, name, id, placeholder, required }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="text-sm w-full bg-brand-stone-100 border border-transparent shadow-lg focus:outline-none focus:border-brand-slate-700 px-4 py-3 rounded-md"
      required={required}
    />
  );
}
