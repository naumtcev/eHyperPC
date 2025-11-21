import { IInStockStatus } from "@/interfaces/inStockStatus.interface";

export const InStockStatus = ({ inStock = true }: IInStockStatus) => {
  return (
    <div className="absolute t-[0] l-[0] z-[100] flex items-center pl-[24] pt-[16]">
      <span className="mr-[8]">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={`${inStock ? "#c0ff01" : "#fb5"}`}
        >
          <circle cx="6" cy="6" r="6"></circle>
        </svg>
      </span>
      <span className="text-[#9c9c9c]">
        {inStock ? "В наличии" : "Под заказ"}
      </span>
    </div>
  );
};
