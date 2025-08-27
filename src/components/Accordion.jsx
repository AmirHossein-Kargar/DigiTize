import { useState } from "react";

export default function AccordionItem({ children, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="mb-2">
      <button
        onClick={handleClick}
        className="w-full flex justify-center items-center p-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="#AFAFAF"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transform transition-transform duration-300 ease-in-out hover-accent ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-2000 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-2 transform transition-transform duration-2000 ease-in-out">
          {children}
        </div>
      </div>
    </div>
  );
}
