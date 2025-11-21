import { Card, CardContent } from "@/components/ui/card";
import { ICardUI } from "@/interfaces/card.interface";

export const CardUI = ({
  children,
  className = "w-full max-w-sm",
  classNameContent,
}: ICardUI) => {
  return (
    <Card className={`${className}`}>
      <CardContent className={`${classNameContent}`}>{children}</CardContent>
    </Card>
  );
};
