'use client'

import { use } from 'react'
import styles from './page.module.css'
import { testCardsGlobal } from '@/lib/testData'
import { testCardsUsers } from '@/lib/testData'
import { testSellers } from '@/lib/testData'
import Link from 'next/link'

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const cardID = Number(id);
  const card = searchMultipleArrays([testCardsGlobal, testCardsUsers], cardID);
  const seller = testSellers.find((s) => s.id === card?.sellerID);
  
  return (
    <BigCard card={card} seller={seller} />
  );
}


function searchMultipleArrays(arrays: any[][], id: number) {
  for (const array of arrays) {
    const found = array.find((item) => item.id === id);
    if (found) {
      return found;
    }
  }
}


type AuthEntry = {
  auth: string;
  desc: string;
}


function AuthText(card: any, seller: any) : AuthEntry[] {
  return [
  {auth: "PSA cert", desc: "verified · #" + card.sellerID},
  {auth: "AI scan", desc: "No tampering detected"},
  {auth: "Seller", desc: "KYC passed · " + seller.rating + "★ · " + seller.sales + " sales"},
  {auth: "Shipping", desc: "Insured tracked: TBD"},
  ]
}


function BigCard({ card, seller }: { card: any; seller: any }) {
  const authText = AuthText(card, seller);
  return (
    <div className={styles.card}>
      <div className={styles.image}>image</div>
      <div className={styles.info}>
        <p className={styles.name}>{card?.name}</p>
        {/* just slop so the customers know what they are getting, but this describes the safety features and other things */}
        <div className={styles.authRow}>
          <p className={styles.authTitle}>Authentication Verified</p>
          {authText.map((text, index) => (
            <div key={index} className={styles.authItem}>
              {/* checkmark also the description for the weird auth tab*/}
              <div className={styles.check}></div>
              <p className={styles.auth}>{text.auth}</p>
              <p className={styles.desc}>{text.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.priceRow}>
          <p className={styles.meta}>{card?.set} · {card?.rarity}</p>
          <p className={styles.price}>£{card?.price?.toFixed(2)}</p>
          <div className={styles.buttonRow}>
            <div className={styles.bidButton}>Place bid</div>
            <Link href={`/buy/${card?.id}`} className={styles.buyNowLink}>
              <div className={styles.buyNowButton}>Buy now</div>
            </Link>
          </div>
        </div>
        <div className={styles.sellerRow}>
        </div>
      </div>
    </div>
    )
}

