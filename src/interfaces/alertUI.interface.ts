import { ReactNode } from "react";

export interface IAlertUI {
  variant?: "default" | "destructive";
  className?: string;
  icon?: ReactNode;
  title?: string;
  children: ReactNode | string;
}
