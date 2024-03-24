import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/utils/produts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
