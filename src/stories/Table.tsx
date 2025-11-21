import { TableUI } from "@/components/ui-kit/TableUI";
import { TableCell, TableRow } from "@/components/ui/table";
import { ITableUI } from "@/interfaces/tableUI.interface";

export const Table = ({ head, caption, footer, body }: ITableUI) => {
  return (
    <TableUI
      body={
        <>
          <TableRow>
            <th
              className="text-[#fff] text-[.875rem] pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#c0ff01]"
              colSpan={2}
            >
              <span className="text-[1.5rem] font-normal">Заголовок</span>
            </th>
          </TableRow>
          <TableRow>
            <th className="text-[#999] text-[.875rem] font-normal pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a] min-w-[220]">
              title
            </th>
            <TableCell className="text-[#fff] text-[.875rem] pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a]">
              value
            </TableCell>
          </TableRow>
          <TableRow>
            <th className="text-[#999] text-[.875rem] font-normal pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a] min-w-[220]">
              title
            </th>
            <TableCell className="text-[#fff] text-[.875rem] pt-[16] pr-[12] pb-[16] pl-[12] text-left border-b border-b-[#2a2a2a]">
              valuy
            </TableCell>
          </TableRow>
        </>
      }
    ></TableUI>
  );
};
