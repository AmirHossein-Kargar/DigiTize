import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-[calc(100vh-4rem-2rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-slate-800 mb-2">
            ثبت نام
          </h1>
          <p className="text-brand-slate-700 text-sm sm:text-base">
            حساب کاربری جدید ایجاد کنید
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="w-28 h-28 bg-gray-200 rounded-lg mx-auto mb-6"></div>
          <p className="text-center text-sm text-brand-slate-600">
            فرم ثبت نام اینجا قرار می‌گیرد
          </p>
        </div>
      </div>
    </div>
  );
}
