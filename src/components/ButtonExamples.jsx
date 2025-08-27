"use client";
import Button from "./Button";

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-brand-slate-800 mb-6">
        نمونه‌های مختلف دکمه
      </h2>

      {/* دکمه‌های با اندازه‌های مختلف */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">دکمه‌های با اندازه‌های مختلف:</h3>

        {/* دکمه کوچک */}
        <Button className="w-32 h-10" variant="primary">
          دکمه کوچک
        </Button>

        {/* دکمه متوسط */}
        <Button className="w-48 h-12" variant="secondary">
          دکمه متوسط
        </Button>

        {/* دکمه بزرگ */}
        <Button className="w-64 h-14" variant="outline">
          دکمه بزرگ
        </Button>

        {/* دکمه با عرض کامل */}
        <Button className="w-full h-12" variant="primary">
          دکمه با عرض کامل
        </Button>
      </div>

      {/* دکمه‌های غیرفعال */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">دکمه‌های غیرفعال:</h3>

        <Button className="w-40 h-12" variant="primary" disabled>
          غیرفعال
        </Button>

        <Button className="w-40 h-12" variant="secondary" disabled>
          غیرفعال
        </Button>
      </div>

      {/* دکمه‌های با عملکرد */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">دکمه‌های با عملکرد:</h3>

        <Button
          className="w-48 h-12"
          variant="primary"
          onClick={() => alert("دکمه کلیک شد!")}
        >
          کلیک کنید
        </Button>

        <Button href="/" className="w-48 h-12" variant="outline">
          لینک دکمه
        </Button>
      </div>

      {/* دکمه‌های با سایه و افکت‌های اضافی */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">دکمه‌های با افکت‌های اضافی:</h3>

        <Button className="w-56 h-14 shadow-lg hover:shadow-xl transform hover:scale-105">
          دکمه با سایه و انیمیشن
        </Button>

        <Button className="w-56 h-14 bg-gradient-to-r from-brand-orange-400 to-brand-orange-500 hover:from-brand-orange-500 hover:to-brand-orange-600">
          دکمه با گرادیانت
        </Button>
      </div>
    </div>
  );
}
