import Logo from "./Logo";

export default function Header() {
  return (
    <div className="relative flex items-center justify-between mt-11 mb-5 w-full h-[42px] md:hidden">
      <div>
       <Logo />
      </div>

      <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl max-xs:text-lg">
        ساعت هوشمند
      </h1>

      <div className="w-8 h-8 bg-white rounded-sm p-1 shadow-lg flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z"
            stroke="#222F5D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3332 18.3332L16.6665 16.6665"
            stroke="#222F5D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
