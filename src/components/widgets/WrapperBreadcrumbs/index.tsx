import { ReactNode } from "react";

export const WrapperBreadcrumbs = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-[20] mr-auto ml-auto pl-[40] pr-[40] max-w-7xl">
      {children}
    </div>
  );
};
