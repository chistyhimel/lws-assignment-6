"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CategoryName from "./CategoryName";

export const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/products/${product.id}`)}>
      <div className="relative delay-150 w-auto h-[205px] lg:h-[310px] bg-[#f8f8f8] transition-all duration-3000 ease-in-out transform">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          className="object-cover"
        />
      </div>
      <h2 className="text-sm lg:text-base mt-2">
        <a className="text-base font-bold" href={`./productPage/${product.id}`}>
          {product.title}
        </a>{" "}
        (<CategoryName>{product.category}</CategoryName>)
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">
          $
          {((product.price * (100 + product.discountPercentage)) / 100).toFixed(
            2
          )}
        </span>{" "}
        ${product.price}
      </p>
    </div>
  );
};
