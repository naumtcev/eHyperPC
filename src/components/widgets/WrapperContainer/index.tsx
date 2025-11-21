import { ReactNode } from "react";
import styles from "./wrapper.module.css";

export const WrapperContainer = ({ children }: { children: ReactNode }) => {
  return <div className={`${styles.container} max-w-7xl`}>{children}</div>;
};
