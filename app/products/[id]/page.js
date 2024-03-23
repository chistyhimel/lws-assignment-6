import { products } from "@/app/data/products";
import CategoryName from "@/components/CategoryName";
import StarIcon from "@/public/svg/star.svg";
import Image from "next/image";
import React from "react";

export default function Product({ params }) {
  const product = products.find((product) => product.id == params.id);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  return (
    <main class="h-screen">
      <section class="bg-[#fafaf2] h-full py-20">
        <div class="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div class="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={thumbnail}
              alt={title}
              class="w-[400px] h-[500px] mx-auto object-cover"
              width={400}
              height={500}
            />

            <div class="flex gap-4 mt-4">
              {images.map((img, id) => (
                <Image
                  key={id}
                  src={img}
                  alt={title}
                  class="w-[100px] h-[100px] mx-auto border object-cover"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div class="w-full lg:w-5/12">
            <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">
              iPhone 9
            </h1>
            <CategoryName>{category}</CategoryName>

            <div class="mt-3 flex items-center justify-start gap-1">
              {[...Array(Math.round(rating))].map((_, index) => (
                <Image
                  key={index}
                  src={StarIcon}
                  alt="star-icon"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <hr class="my-5 bg-black" />

            <div>
              <p class="my-3">
                <span class="text-rose-600 opacity-60 line-through">
                  ${price}
                </span>
                <span class="font-bold text-2xl">${discountPercentage}</span>
              </p>
            </div>
            <div>
              <p class="leading-7">{description}</p>

              <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${discountPercentage}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
