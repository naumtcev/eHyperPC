"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const parsePathname = pathname.split("/");
  const currentBreads = parsePathname.slice(1, -1);
  const lastBread = parsePathname[parsePathname.length - 1];

  return (
    <Breadcrumb>
      <BreadcrumbList className="overflow-y-auto overflow-y-hidden pb-[24]">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99561 1.5316L5.07737 0.0112305L17.0164 6.64594C18.1241 7.26154 18.1229 8.80374 17.0142 9.41773L8.64405 14.0532L8.35547 14.2118V13.8932L8.35687 13.8945L8.36103 11.4595V11.3533L8.45724 11.2995L14.5158 7.95565L2.99561 1.5316Z"
                  fill="#737373"
                ></path>
                <path
                  d="M0 16.3235L0.0119057 4.73436C0.013169 3.50463 1.39331 2.73658 2.49779 3.35099L10.8284 7.98518L11.11 8.14248L8.69411 9.54216L8.59654 9.59729L2.4404 6.1687L2.41866 18.1373L0 16.3235Z"
                  fill="#737373"
                ></path>
                <path
                  d="M17.9419 10.7832L6.63378 17.0356V10.2376L6.53341 10.1852L4.08124 8.8877V9.19963L4.06519 18.3844C4.06303 19.6156 5.44383 20.387 6.55001 19.7727L17.9583 13.4373L17.9419 10.7832Z"
                  fill="#737373"
                ></path>
              </svg>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {currentBreads?.map((bread) => (
          <BreadcrumbItem key={bread}>
            <BreadcrumbLink asChild>
              <Link href={`/${bread}`} className="hover:text-[#ccc]">
                {bread}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}

        {!!currentBreads.length && <BreadcrumbSeparator />}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#9c9c9c]">
            {lastBread}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
