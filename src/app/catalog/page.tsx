"use client";

import { Breadcrumbs } from "@/components/ui-kit/Breadcrumbs";
import { ButtonUI } from "@/components/ui-kit/ButtonUI";
import { CatalogList } from "@/components/widgets/CatalogList";
import { FilterCatalog } from "@/components/widgets/FilterCatalog";
import { InfinityScrolling } from "@/components/widgets/InfinityScrolling";
import { WrapperBreadcrumbs } from "@/components/widgets/WrapperBreadcrumbs";
import dbFake from "@/config/db/db-fake.json";
import { IProduct } from "@/interfaces/product.interface";
import CloseIcon from "@/components/icons/close.svg";
import { useEffect, useState } from "react";

export default function CatalogPage() {
  const [prods, updateProds] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    // данные с бэка через await fetch или axios или лучше через rtk-query или подобное
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        updateProds((prev) => [...prev, ...dbFake]);
        setLoading(false);
      }, 3000)
    );
  };

  const handleUpdatePage = () => {
    if (isLoading) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <WrapperBreadcrumbs>
        <Breadcrumbs />
      </WrapperBreadcrumbs>
      <div className="mb-[24]">
        <div className="mt-[20] mr-auto ml-auto pl-[40] pr-[40] max-w-7xl text-center">
          <h1 className="leading-[3.5rem] text-5xl text-[#f5f5f5] mb-[24] font-[600]">
            Каталог товаров
          </h1>
          <p className="text-[1.125rem] leading-[1.5rem]">
            Материнская плата является своеобразным фундаментом для будущей
            системы. Она задаёт основные характеристики стабильности и
            быстродействия, возможности наращивания мощности и сроки морального
            старения компьютера.
          </p>
        </div>
      </div>

      <div className="max-w-[1440] mr-auto ml-auto pr-[48] pl-[48] pt-[48] ">
        <div className="sticky top-[40] z-[100] mb-[32] bg-[#111] pt-[12] pb-[12] border-b border-[#303030] border-solid">
          <div className="w-[100%]">
            <ButtonUI variant="link" className="text-[#9c9c9c] cursor-pointer">
              <span className="mr-[8] p-[4]">
                <CloseIcon />
              </span>
              Фильтры
            </ButtonUI>
          </div>
        </div>

        <div className=" flex flex-wrap max-lg:block">
          <div className="relative w-[20%] max-lg:w-[100%]">
            <div className="pb-[24]">
              <form>
                <FilterCatalog />
              </form>
            </div>
          </div>

          <div className="pl-[24] max-lg:pl-[0] max-w-[100%] w-[80%] min-w-[1] max-lg:w-[100%]">
            {!prods?.length && (
              <div className="w-full p-[12] mb-[24] text-center">
                Загрузка начального списка
              </div>
            )}
            {!!prods?.length && <CatalogList products={prods} />}
            {!!prods?.length && (
              <InfinityScrolling
                onSetPage={handleUpdatePage}
                isLoadingData={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
