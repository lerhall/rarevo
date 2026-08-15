"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        Rarevo
      </Link>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/data" className={styles.navLink}>Data</Link>
        <Link href="/trades" className={styles.navLink}>Trades</Link>
      </nav>

      <div className={styles.actions}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cards, sets, trainers..."
          className={styles.search}
        />
        <button className={styles.button}>
          Log in
        </button>
      </div>
    </header>
  );
}
