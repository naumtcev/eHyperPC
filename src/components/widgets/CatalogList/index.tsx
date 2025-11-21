import { IProduct } from "@/interfaces/product.interface";
import { ProductCard } from "@/components/widgets/ProductCard";
import { randomGenerator } from "@/lib/randomGenerator";

export const CatalogList = ({ products }: { products: IProduct[] | null }) => {
  return (
    <div className="grid max-sm:block grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-[24] place-content-stretch">
      {products?.map((product) => (
        <div className="w-full " key={randomGenerator()}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};
