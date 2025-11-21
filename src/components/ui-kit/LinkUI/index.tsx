import { ILinkUI } from "@/interfaces/link.interface";
import Link from "next/link";

export const LinkUI = ({ href, children, className }: ILinkUI) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
