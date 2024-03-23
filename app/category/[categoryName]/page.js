"use client";
import {
  getProductCategories,
  getProductsByCategory,
} from "@/app/data/products";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/navigation";
import React from "react";

export default function Category({ params }) {
  const router = useRouter();
  const productsByCategory = getProductsByCategory(params.categoryName);

  return (
    <>
      <HeroSection />
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          {["all", ...getProductCategories()].map((category) => (
            <button
              key={category}
              onClick={() => router.push(`/category/${category}`)}
              className={`${
                params.categoryName === category
                  ? "px-5 py-2 bg-green-50 border-l-4 border-[#ced3ca]"
                  : "hover:border-b border-black"
              } block box-border mt-5`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {productsByCategory.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
