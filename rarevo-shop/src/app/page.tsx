"use client";

import CardRow from "@/components/CardRow";
import { testCardsGlobal } from "@/lib/testData";
import styles from "./page.module.css";

export default function Home() {
  const categories = Array.from(new Set(testCardsGlobal.map((c) => c.category)));

  return (
    <>
      <main className={styles.pageWrapper}>
        <title>Welcome</title>
        {categories.map((category) => (
          <CardRow
            key={category}
            title={category}
            cards={testCardsGlobal.filter((c) => c.category === category)}
          />
        ))}
      </main>
    </>
  );
}