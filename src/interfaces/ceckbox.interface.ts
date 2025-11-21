import { ReactNode } from "react";

export interface ICheckboxUI {
  label: string | ReactNode;
  isChecked?: boolean;
  id: string;
  onClick?: () => void;
}
