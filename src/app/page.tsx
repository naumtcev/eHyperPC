import { PresentBlock } from "@/components/widgets/PresentBlock";
import styles from "./page.module.css";
import presFake from "@/config/db/presentations.json";
import { IPresentBlock } from "@/interfaces/presentBlock.interface";

export default function Home() {
  const { presentations } = presFake;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-wrap w-full min-h-full min-h-screen m-auto pl-[0.5%] pr-[0.5%] mt-[0.5%] mb-[0.5%]">
          {presentations.map((pres: IPresentBlock) => (
            <PresentBlock {...pres} key={pres.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
