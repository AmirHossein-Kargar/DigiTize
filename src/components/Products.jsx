import Image from "next/image";

export default function Products() {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-white w-48 h-80 rounded-xl p-1.5 shadow-lg">
        {/* product image */}
        <div className="bg-brand-slate-200 w-full rounded-xl h-36 flex justify-center items-center mb-5">
          <div className="relative w-16 h-28">
            <Image
              src="/images/Cart/AppleWatch.png"
              alt="Apple Watch"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* product category */}
        <div className="flex justify-between mb-5">
          <span className="text-brand-slate-200 text-xs">اپل</span>
          <div>circle</div>
        </div>

        {/* prodct title */}
        <div className="mb-2">
          <h3 className="text-sm font-bold">ساعت هوشمند اپل سری 6</h3>
        </div>

        {/* produc price */}
        <div className="flex justify-end gap-1 text-brand-orange-700 mb-3.5">
          <span>۴۸،۲۵۰،۰۰۰</span> <span>تومان</span>
        </div>
        <hr className="text-brand-gray-300-30 mb-2" />
        <div className="flex justify-center">
          <button className="text-brand-orange-400 font-bold w-full cursor-pointer">
            مشاهده و سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
