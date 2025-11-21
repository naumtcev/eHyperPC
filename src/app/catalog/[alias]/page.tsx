import { Breadcrumbs } from "@/components/ui-kit/Breadcrumbs";
import { TableUI } from "@/components/ui-kit/TableUI";
import { TableCell, TableRow } from "@/components/ui/table";
import { WrapperBreadcrumbs } from "@/components/widgets/WrapperBreadcrumbs";
import dbFake from "@/config/db/db-fake.json";
import { IProduct, IProductProperties } from "@/interfaces/product.interface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AlertUI } from "@/components/ui-kit/AlertUI";
import Link from "next/link";
import { ButtonUI } from "@/components/ui-kit/ButtonUI";
import { PanelNavigationOnPageProduct } from "@/components/widgets/PanelNavigationOnPageProduct";
import { PriceBlockProduct } from "@/components/widgets/PriceBlockProduct";

type Props = {
  params: Promise<{ alias: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const aliasProduct = (await params).alias;

  const products = dbFake;
  const product: IProduct | null =
    products.find((prod: IProduct) => prod.alias === aliasProduct) || null;

  const previousImages = (await parent).openGraph?.images || [];

  if (!product) {
    return {};
  }

  const { title, description, image } = product;

  return {
    title,
    description,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  // данные с бэка через await fetch или axios или лучше через rtk-query или подобное
  const aliasProduct = (await params).alias;
  const products = dbFake;
  const product: IProduct | null =
    products.find((prod: IProduct) => prod.alias === aliasProduct) || null;

  if (!product) {
    notFound();
  }

  const { title, description, image, price, inStock, properties } = product;

  //Не успел до конца разбить на атомарные части

  return (
    <div>
      <WrapperBreadcrumbs>
        <Breadcrumbs />
      </WrapperBreadcrumbs>

      <div className="pb-[70] pt-[70]">
        <div className="flex items-start max-md:block">
          <div className=" max-w-full pl-[15] block max-md:hidden basis-[55%]">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={675}
              loading="lazy"
              quality={75}
              className="scale-[1.26]"
            />
          </div>
          <div className="z-[100] pl-[15] basis-[45%] pr-[30]">
            <div className="mb-[10]">
              <h1 className="text-[2rem] text-[#fff]">{title}</h1>
            </div>
            <div className="ml-[-18]">
              <ButtonUI
                variant="ghost"
                className="hover:bg-transparent hover:text-[#f5f5f5] cursor-pointer"
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="16"
                      height="1"
                      fill="#F5F5F5"
                    ></rect>
                    <rect
                      x="2"
                      y="9"
                      width="16"
                      height="1"
                      fill="#F5F5F5"
                    ></rect>
                    <rect
                      x="2"
                      y="14"
                      width="9"
                      height="1"
                      fill="#F5F5F5"
                    ></rect>
                    <rect
                      x="13"
                      y="14"
                      width="5"
                      height="1"
                      fill="#F5F5F5"
                    ></rect>
                    <rect
                      x="15"
                      y="12"
                      width="1"
                      height="5"
                      fill="#F5F5F5"
                    ></rect>
                  </svg>
                </span>
                Сравнить
              </ButtonUI>
            </div>
            <div className="mt-[10] mb-[20]">
              <p>{description}</p>
            </div>
            <div className="max-w-full hidden max-md:block">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={675}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="mt-[20] mb-[20]">
              <hr className="border-[gray]" />
            </div>
            <div className="mb-[20]">
              <AlertUI className="bg-[#ffc671] border-none rounded-none pt-[15] pr-[30] pb-[15] pl-[15]">
                <div className="w-fit  text-[#151515] ">
                  Доступно для покупки только в качестве апгрейда Вашего ПК в
                  нашем{" "}
                  <Link href="#" target="_blank" className="underline">
                    апгрейд центре
                  </Link>
                </div>
              </AlertUI>
            </div>
            <div>
              <PriceBlockProduct price={price} />
            </div>
            <div className="mt-[20] mb-[20]">
              <hr className="border-[gray]" />
            </div>
            <div className="mt-[20] mb-[20]">
              <div className="flex">
                <div className="flex items-center">
                  <div className="mr-[10]">
                    <div className="border border-[#4c4c4c] rounded-[50%] w-[40] h-[40] p-[9]">
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <circle
                          fill="none"
                          stroke="#cccccc"
                          strokeWidth="1.1"
                          cx="10"
                          cy="10"
                          r="9"
                        ></circle>
                        <rect
                          width="1"
                          height="7"
                          x="9"
                          y="4"
                          fill="#cccccc"
                        ></rect>
                        <path
                          fill="none"
                          stroke="#cccccc"
                          strokeWidth="1.1"
                          d="M13.018,14.197 L9.445,10.625"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    {!inStock ? (
                      <div className="text-[1.15rem] text-[#fba54d]">
                        Под заказ
                      </div>
                    ) : (
                      <div className="text-[1.15rem] text-[#9bdc85]">
                        В наличии
                      </div>
                    )}
                    <div className="text-[#999]">Только для апгреда</div>
                  </div>
                </div>
                <div className="flex  ml-[40]">
                  <div className="mr-[10]">
                    <div className="border border-[#4c4c4c] rounded-[50%] w-[40] h-[40] p-[9]">
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <circle
                          fill="none"
                          stroke="#cccccc"
                          strokeWidth="1.1"
                          cx="7.7"
                          cy="8.6"
                          r="3.5"
                        ></circle>
                        <path
                          fill="none"
                          stroke="#cccccc"
                          strokeWidth="1.1"
                          d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"
                        ></path>
                        <path
                          fill="none"
                          stroke="#cccccc"
                          strokeWidth="1.1"
                          d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div>Нужна помощь?</div>
                    <div>Спросить совет</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-[1] relative mt-[40]">
          <PanelNavigationOnPageProduct
          // rightBlock={<PriceBlockProduct price={price} />}
          />

          <div className="max-w-[900] pl-[40] pr-[40] mr-auto ml-auto mt-[40]">
            <div className="">
              <div className="mb-[20]">
                <h2 className="text-center text-[2.625rem] text-[#fff] max-md:text-[1.857rem]">
                  Характеристики {title}
                </h2>
              </div>
              <div>
                <TableUI
                  body={
                    <>
                      {properties?.map((prop: IProductProperties) => (
                        <>
                          <TableRow key={prop.title} className="">
                            <th
                              className="text-[#fff] text-[.875rem] pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#c0ff01]"
                              colSpan={2}
                            >
                              <span className="text-[1.5rem] font-normal">
                                {prop.title}
                              </span>
                            </th>
                          </TableRow>
                          {prop.list.map((i) => (
                            <TableRow key={i.title}>
                              <th className="text-[#999] text-[.875rem] font-normal pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a] min-w-[220]">
                                {i.title.toUpperCase()}
                              </th>
                              <TableCell className="text-[#fff] text-[.875rem] pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a]">
                                {i.value}
                              </TableCell>
                            </TableRow>
                          ))}
                        </>
                      ))}
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
