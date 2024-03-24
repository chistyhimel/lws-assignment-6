"use client";
import { useRouter } from "next/navigation";

export default function CategoryButton({ children, params, category }) {
  const router = useRouter();
  return (
    <button
      key={category}
      onClick={() => router.push(`/category/${category}`)}
      className={`${
        params.categoryName === category
          ? "px-5 py-2 bg-green-50 border-l-4 border-[#ced3ca]"
          : "hover:border-b border-black"
      } block box-border mt-5`}
    >
      {children}
    </button>
  );
}
