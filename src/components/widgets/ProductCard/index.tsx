import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import Image from "next/image";
import { formatNumberWithSeparate } from "@/lib/formatNumberWithSeparate";
import { CardUI } from "@/components/ui-kit/CardUI";
import { InStockStatus } from "@/components/widgets/InStockStatus";

export const ProductCard = (product: IProduct) => {
  const { title, alias, price, inStock, image } = product;
  return (
    <CardUI
      className="w-full bg-[#202020] border-[0] p-[0] h-full max-sm:mb-[12]"
      classNameContent="p-[0]"
    >
      <div className="relative">
        <div>
          <InStockStatus inStock={inStock} />
          <div className="pt-[16]">
            <div>
              <Link href={`/catalog/${alias}`} className="block h-full ">
                <Image
                  src={image}
                  alt={title}
                  width={389}
                  height={218}
                  loading="lazy"
                  quality={75}
                  className="contrast-[0.9] brightness-[1.16]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-[16] pr-[24] pb-[24] pl-[24] text-[#f5f5f5] font-semibold">
          <div>
            <h3 className="text-[16] text-balance">{title}</h3>
          </div>
          <div className="mt-[16]">
            <div>{formatNumberWithSeparate(price)} ₽</div>
            <div className="text-[#9c9c9c] text-[.75rem]">
              от {formatNumberWithSeparate(1673)} ₽/мес.
            </div>
          </div>
        </div>
      </div>
    </CardUI>
  );
};
