import { ReactNode } from "react";

export interface IButtonUI {
  children: ReactNode | string;
  className?: string;
  disabled?: boolean;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  onClick?: () => void;
}
