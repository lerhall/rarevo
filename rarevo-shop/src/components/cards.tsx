import type { Card } from "@/lib/testData";
import styles from "./CardRow.module.css";
import Link from "next/link";

export default function CardPres({ card }: { card: Card }) {
    return (
        <Link href={`/cards/${card.id}`} className={styles.cardLink}>
        <div key={card.id} className={styles.card}>
            {/* image placeholder */}

            <div className={styles.image}>image</div>

            <p className={styles.name}>{card.name}</p>
            <p className={styles.meta}>{card.set} · {card.rarity}</p>
            <p className={styles.price}>£{card.price.toFixed(2)}</p>
          </div>
        </Link>
    );
}  