import Image from "next/image";
import Link from "next/link";

export default function SearchIcon() {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/search.svg"
          width={100}
          height={100}
          alt="searchicon"
        />
      </Link>
    </>
  );
}
