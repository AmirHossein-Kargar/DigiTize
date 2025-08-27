import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const baseClass =
    "px-6 py-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center";

  const variantClass =
    variant === "primary"
      ? "bg-brand-orange-400 text-white hover:bg-brand-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
      : "";

  const combinedClass = `${baseClass} ${variantClass} ${className} `.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return <button className={combinedClass}>{children}</button>;
}
