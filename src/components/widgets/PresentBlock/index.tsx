import { LinkUI } from "@/components/ui-kit/LinkUI";
import { IPresentBlock } from "@/interfaces/presentBlock.interface";

export const PresentBlock = ({
  title,
  description,
  imageUrl,
  href,
}: IPresentBlock) => {
  console.log(imageUrl);
  const url = `${imageUrl}`;
  return (
    <div
      className={`min-h-[560] pb-[40] relative w-[49%] mr-[0.5%] ml-[0.5%] mt-[0.5%] mb-[0.5%] overflow-hidden bg-center bg-cover bg-no-repeat text-center`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <LinkUI
        href={href}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
      >
        {" "}
      </LinkUI>
      <div className="flex flex-col pt-[40]">
        <h3 className="text-[2rem] text-[#f5f5f5]">{title}</h3>
        <div className="text-[#f5f5f5]">{description}</div>
        <div className="mt-[12] bg-[#fff] text-[#141414] pr-[16] pl-[16] pt-[8] pb-[8] text-[0.75rem] rounded-[50px] size-max mr-auto ml-auto leading-(2rem - 2px)">
          Подробнее
        </div>
      </div>
    </div>
  );
};
