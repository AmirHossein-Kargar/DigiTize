import Logo from "./Logo";
import SearchIcon from "./ui/searchIcon";

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
     <SearchIcon />
      </div>
    </div>
  );
}
