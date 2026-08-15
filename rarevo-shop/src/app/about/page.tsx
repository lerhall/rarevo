"use client";

import styles from "./page.module.css";

export default function About() {
  return (
    <main className="page">
      <div className={styles.container1}>
      <h1 className={styles.header}>About Rarevo</h1>
      <p className={styles.paragraph}>
        Rarevo is a platform for buying, selling, and trading Pokemon cards online. Our mission is to provide a safe and convenient marketplace for collectors and enthusiasts to connect and exchange their favorite cards.
      </p>
      <p className={styles.paragraph}>
        Whether you're looking to complete your collection, find rare cards, or trade with other collectors, Rarevo is here to help you achieve your goals. Join our community today and start exploring the world of Pokemon card trading!
      </p>
      </div>
    </main>
  );
}