import Link from "next/link";
import { ReactNode } from "react";

export const PanelNavigationOnPageProduct = ({
  rightBlock,
}: {
  rightBlock?: ReactNode;
}) => {
  //Распарсить url и добавить его к линкам
  return (
    <div className="stiky t-[40] w-full bg-[#222]">
      <div className="flex pr-[40] pl-[40] justify-between">
        <div className="flex items-center">
          <div className="mr-[30]">
            <Link
              href="#part-description"
              className="text-[#999] p-[0 15] min-h-[50] text-[.875rem] block pt-[14]"
            >
              ОПИСАНИЕ
            </Link>
          </div>
          <div>
            <Link
              href="#part-propities"
              className="text-[#999] p-[0 15] min-h-[50] text-[.875rem] block pt-[14]"
            >
              ХАРАКТЕРИСТИКИ
            </Link>
          </div>
        </div>

        <div>{rightBlock}</div>
      </div>
    </div>
  );
};
