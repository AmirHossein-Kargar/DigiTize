import Image from "next/image";

export default function CategoryList({ categories }) {
  return (
    <div className="flex flex-col gap-6 duration-200 transition-all mb-5">
      <h2 className="text-brand-orange-400 font-bold text-lg">دسته بندی</h2>

      <ul className="flex flex-col items-start gap-6 cursor-pointer text-brand-gray-300">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className="flex items-center gap-4 hover-primary cursor-pointer"
            >
             <CategoryIcon src={category.path} alt={category.alt}/>
              <h2 className="hover-primary">{category.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function CategoryIcon({src, alt}) {
  return (
    <div className="w-8 h-8 bg-brand-gray-300-30 rounded-full relative flex items-center justify-center">
    <Image
      src={src}
      alt={alt}
      width={20}
      height={20}
    />
  </div>
  )
}