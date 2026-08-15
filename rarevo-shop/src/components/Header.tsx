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
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/trades" className={styles.navLink}>Trades</Link>
        <Link href="/auctions" className={styles.navLink}>Auctions</Link>
        <Link href="/my_collections" className={styles.navLink}>My collections</Link>
      </nav>

      <div className={styles.actions}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cards, sets, auctions..."
          className={styles.search}
        />
        <button className={styles.button}>
          Log in
        </button>
      </div>
    </header>
  );
}
