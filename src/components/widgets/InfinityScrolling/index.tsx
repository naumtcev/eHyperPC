import { IInfinityScrolling } from "@/interfaces/infinityScrolling.interface";
import { useEffect, useRef } from "react";

export const InfinityScrolling = ({
  onSetPage,
  isLoadingData,
}: IInfinityScrolling) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSetPage();
            if (containerRef && containerRef?.current) {
              observer.unobserve(containerRef?.current);
            }
          }
        });
      });
      observer.observe(containerRef.current);
    }
  }, [containerRef, onSetPage]);

  return (
    <div ref={containerRef}>
      {isLoadingData && (
        <div className="w-full p-[12] mb-[24] text-center">
          Грузим новый список
        </div>
      )}
    </div>
  );
};
