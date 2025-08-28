import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="hidden md:flex mx-auto px-4 lg:px-6 xl:px-12 py-3 items-center justify-between w-full max-w-[1400px]">
        {/* Logo */}
        <Logo width={80} height={50} />

        {/* Menu */}
        <ul className="flex gap-4 lg:gap-6 xl:gap-8 text-brand-slate-800 hover-primary font-bold text-xs lg:text-sm xl:text-base flex-shrink-0">
          <li className="hover:text-brand-slate-900 whitespace-nowrap">
            <Link href="/">خانه</Link>
          </li>
          <li className="hover:text-brand-slate-900 whitespace-nowrap">
            <Link href="/">تلفن همراه</Link>
          </li>
          <li className="hover:text-brand-slate-900 whitespace-nowrap">
            <Link href="/">لپتاپ</Link>
          </li>
          <li className="hover:text-brand-slate-900 whitespace-nowrap">
            <Link href="/">ساعت هوشمند</Link>
          </li>
        </ul>

        {/* Search & User */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 flex-shrink-0">
          {/* Search box */}
          <div className="relative w-fit">
            <label
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              htmlFor="searchicon"
            >
              <Image
                src="/images/search.svg"
                width={20}
                height={20}
                alt="search"
              />
            </label>
            <input
              id="searchicon"
              placeholder="جستجو..."
              className="text-sm w-48 lg:w-64 xl:w-80 bg-brand-stone-100 border border-transparent shadow-lg focus:outline-none focus:border-brand-slate-700 pr-12 py-2 rounded-md"
            />
          </div>

          {/* Login + Cart */}
          <div className="flex items-center gap-3 lg:gap-5">
            <Link
              href="/signup"
              className="text-brand-slate-800 hover:text-slate-900 text-xs lg:text-sm xl:text-base whitespace-nowrap"
            >
              ورود / ثبت نام
            </Link>
            <Link href="/">
              <Image
                src="/images/cart.svg"
                width={25}
                height={25}
                alt="shopping-cart"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
