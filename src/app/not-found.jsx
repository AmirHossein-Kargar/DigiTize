import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-brand-slate-800 mb-4">۴۰۴</h2>
      <h3 className="text-2xl font-semibold text-brand-slate-600 mb-4">
        صفحه مورد نظر یافت نشد
      </h3>
      <p className="text-brand-gray-300 mb-8 text-center max-w-md">
        صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
      </p>
      <Button href="/" className="w-80 h-12" variant="primary">
        بازگشت به منوی اصلی
      </Button>
    </div>
  );
}
