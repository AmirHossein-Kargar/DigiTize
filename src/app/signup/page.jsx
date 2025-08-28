import React from "react";
import Logo from "@/components/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/Button";

export default function SignUp() {
  return (
    <div className="min-h-[calc(100vh-4rem-2rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo width={80} height={50} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-slate-800 mb-2">
              ثبت نام
            </h1>
            <p className="text-brand-slate-700 text-sm sm:text-base">
              حساب کاربری جدید ایجاد کنید
            </p>
          </div>

          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-brand-slate-700"
              >
                نام و نام خانوادگی
              </label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-brand-slate-700"
              >
                ایمیل شما
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-brand-slate-700"
              >
                شماره تلفن
              </label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="09xxxxxxxxx"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-brand-slate-700"
              >
                رمز عبور
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-brand-slate-700"
              >
                تکرار رمز عبور
              </label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 bg-white rounded cursor-pointer border border-brand-gray-200 accent-brand-orange-300 appearance-none checked:bg-brand-orange-300 checked:border-brand-orange-300"
                  required
                />
              </div>
              <div className="mr-3 text-sm">
                <label
                  htmlFor="terms"
                  className="text-brand-slate-700 cursor-pointer"
                >
                  با{" "}
                  <a
                    href="#"
                    className="text-brand-orange-600 hover:text-brand-orange-700"
                  >
                    قوانین و مقررات
                  </a>{" "}
                  موافقم
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full text-sm">
              ثبت نام
            </Button>

            <p className="text-sm font-light text-brand-slate-700 text-center">
              قبلاً ثبت نام کرده‌اید؟{" "}
              <a
                href="/login"
                className="font-medium text-brand-slate-800 hover-primary"
              >
                وارد شوید
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
