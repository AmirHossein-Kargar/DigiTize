import "./globals.css";

export const metadata = {
  title: "DigiTize - فروشگاه آنلاین محصولات دیجیتال",
  description:
    "فروشگاه آنلاین محصولات دیجیتال شامل گوشی موبایل، لپ‌تاپ، ساعت هوشمند، لوازم جانبی و سایر محصولات الکترونیکی",
  keywords: [
    "دیجیتال",
    "گوشی موبایل",
    "لپ‌تاپ",
    "ساعت هوشمند",
    "لوازم جانبی",
    "فروشگاه آنلاین",
  ],
  authors: [{ name: "DigiTize Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-brand-stone-100 px-4">{children}</body>
    </html>
  );
}
