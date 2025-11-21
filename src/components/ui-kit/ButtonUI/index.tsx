import { Button } from "@/components/ui/button";
import { IButtonUI } from "@/interfaces/buttonUI.interface";

export const ButtonUI = ({ children, className, variant, size }: IButtonUI) => {
  return (
    <Button className={`${className}`} variant={variant} size={size}>
      {children}
    </Button>
  );
};
