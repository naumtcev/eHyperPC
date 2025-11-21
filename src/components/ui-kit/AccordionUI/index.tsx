import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IAccordionUI } from "@/interfaces/accordion.interface";

export const AccordionUI = ({
  title,
  children,
  value,
  onValueChange,
}: IAccordionUI) => {
  return (
    <Accordion type="single" onValueChange={onValueChange} collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className="text-[1.125rem] font-medium text-[#f5f5f5]">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
