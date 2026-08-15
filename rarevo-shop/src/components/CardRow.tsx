import type { Card } from "@/lib/testData";
import styles from "./CardRow.module.css";

export default function CardRow({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.scroll}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            {/* image placeholder */}

            <div className={styles.image}>image</div>

            <p className={styles.name}>{card.name}</p>
            <p className={styles.meta}>{card.set} · {card.rarity}</p>
            <p className={styles.price}>£{card.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
