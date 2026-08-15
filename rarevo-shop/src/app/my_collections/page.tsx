"use client";

import styles from "./page.module.css";
import CardPres from "@/components/cards";
import { testCardsUsers } from "@/lib/testData";

export default function Trades() {
  return (
    <main className="page">
      <div className={styles.container1}>
        <h1 className={styles.header}>My Cards</h1>
        <div className={styles.cardGrid}>
            {testCardsUsers.map((card) => (<CardPres key={card.id} card={card} />))}
        </div>
      </div>
    </main>
  );
}
