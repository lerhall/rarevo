"use client";

import styles from "./page.module.css";

export default function Trades() {
  return (
    <main className="page">
      <div className={styles.container1}>
        <h1 className={styles.header}>Trades</h1>
        <p className={styles.paragraph}>
          Welcome to the Trades page! Here you can explore and engage in trading activities for Pokemon cards. Connect with other collectors, find rare cards, and make trades to enhance your collection.
        </p>
        <p className={styles.paragraph}>
          Whether you're a seasoned trader or just starting out, our platform provides a safe and convenient environment for all your trading needs. Start trading today and discover the excitement of Pokemon card trading!
        </p>
      </div>
    </main>
  );
}