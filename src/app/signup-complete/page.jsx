import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUpComplete() {
  return (
    <div className="min-h-[calc(100vh-4rem-2rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {/* <Logo width={80} height={50} /> */}
              <Image
                src="/images/check.svg"
                alt="check"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-slate-800 mb-2 flex items-center justify-center gap-2 ">
              ثبت نام شما با موفقیت انجام شد
            </h1>
            <p className="text-brand-slate-700 text-sm sm:text-base">
              لطفا ایمیل خود را چک کنید
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/gmail.svg"
                  alt="gmail"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://outlook.live.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/outlook.svg"
                  alt="outlook"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
