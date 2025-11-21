import { ReactNode } from "react";

export interface ITableUI {
  head?: ReactNode;
  body: ReactNode;
  caption?: ReactNode;
  footer?: ReactNode;
}
