import { ReactNode } from "react";

export interface IAccordionUI {
  title: ReactNode | string;
  children: ReactNode | string;
  value: string;
  onValueChange?: () => void;
}
