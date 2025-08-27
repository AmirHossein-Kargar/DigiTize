import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-auto px-10 py-3 flex items-center justify-between">
  <Logo width={80} height={50} />

  <ul className="flex gap-8 text-brand-slate-800 hover-primary font-bold">
    <li className="hover:text-brand-slate-900"><Link href="/">خانه</Link></li>
    <li className="hover:text-brand-slate-900"><Link href="/">تلفن همراه</Link></li>
    <li className="hover:text-brand-slate-900"><Link href="/">لپتاپ</Link></li>
    <li className="hover:text-brand-slate-900"><Link href="/">ساعت هوشمند</Link></li>
  </ul>

  <div className="flex items-center gap-10">
    <input
      placeholder="جستجوی نام محصول، نام برند، نام مدل و..."
      className="text-sm w-96 bg-brand-stone-100 border border-transparent shadow-lg focus:outline-none focus:border-brand-slate-700 px-4 py-2 rounded-md"
      />
      <div>
        <Link href="/signup" className="text-brand-slate-800 hover:text-slate-900">ورود / ثبت نام</Link>
      </div>
      <div>

        <Link href="/">
        <Image src="/images/cart.svg" width={30} height={30} alt="shopping-cart"/>
        </Link>
      </div>
  </div>
</div>

  )
}
