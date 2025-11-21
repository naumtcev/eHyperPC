import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
} from "@/components/ui/table";
import { ITableUI } from "@/interfaces/tableUI.interface";

export const TableUI = ({ head, caption, footer, body }: ITableUI) => {
  return (
    <Table>
      {caption}
      {head && <TableHeader>{head}</TableHeader>}
      <TableBody>{body}</TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </Table>
  );
};
