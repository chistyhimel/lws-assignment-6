"use client";
import Link from "next/link";

export default function CategoryName({ children }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <span onClick={handleClick} className="text-[#919090]">
      <Link href={`/category/${children}`}>
        {children.charAt(0).toUpperCase() + children.slice(1)}
      </Link>
    </span>
  );
}
