import { ReactNode } from "react";

export interface ILinkUI {
  href: string;
  children: string | ReactNode;
  className?: string;
}
