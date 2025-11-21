import { AccordionUI } from "@/components/ui-kit/AccordionUI";
import { ReactNode } from "react";

export const FilterItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <AccordionUI title={title} value="item-1">
      {children}
    </AccordionUI>
  );
};
