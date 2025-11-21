import { IAlertUI } from "@/interfaces/alertUI.interface";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertUI = ({
  variant,
  className,
  icon,
  title,
  children,
}: IAlertUI) => {
  return (
    <Alert variant={variant} className={className}>
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
