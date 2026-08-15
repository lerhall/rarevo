import type { Card } from "@/lib/testData";
import styles from "./CardRow.module.css";
import CardPres from "./cards";

export default function CardRow({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.scroll}>
        {cards.map((card) => (
          <CardPres key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
