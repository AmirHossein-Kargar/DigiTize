import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden md:block w-full bg-white shadow">
      <div
        className="mx-auto py-3 
                  px-10 grid grid-cols-3 items-center"
      >
        <div className="justify-self-start">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <ul className="flex justify-center gap-8 text-brand-slate-800">
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/">تلفن همراه</Link>
          </li>
          <li>
            <Link href="/">لپتاپ</Link>
          </li>
          <li>
            <Link href="/">ساعت هوشمند</Link>
          </li>
        </ul>

        <div className="justify-self-end">
          <input
            placeholder="جستجوی نام محصول، نام برند، نام مدل و..."
            className="
  text-sm
    w-96 
    bg-brand-stone-100 
    border border-transparent 
    shadow-lg 
    focus:outline-none 
    focus:border-brand-slate-700
    px-4 py-2 
    rounded-md 
  "
          />
        </div>
      </div>
    </nav>
  );
}
