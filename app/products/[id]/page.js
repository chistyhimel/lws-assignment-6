import CategoryName from "@/components/CategoryName";
import StarIcon from "@/public/svg/star.svg";
import { getProductById } from "@/utils/produts";
import Image from "next/image";

export default function Product({ params: { id } }) {
  const {
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
  } = getProductById(id);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={thumbnail}
              alt={title}
              className="w-[400px] h-[500px] mx-auto object-cover"
              width={400}
              height={500}
            />

            <div className="flex gap-4 mt-4">
              {images.map((img, id) => (
                <Image
                  key={id}
                  src={img}
                  alt={title}
                  className="w-[100px] cursor-pointer h-[100px] mx-auto border object-cover"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <CategoryName>{category}</CategoryName>

            <div className="mt-3 flex items-center justify-start gap-1">
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
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${((price * (100 + discountPercentage)) / 100).toFixed(2)}
                </span>
                <span className="font-bold text-2xl">${price}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${price}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
