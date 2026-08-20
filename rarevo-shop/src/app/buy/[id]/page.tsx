'use client';


import {use} from 'react';
import styles from './page.module.css';
import { testCardsGlobal } from '@/lib/testData';
import { testCardsUsers } from '@/lib/testData';
import { testSellers } from '@/lib/testData';
import {loadStripe} from '@stripe/stripe-js';


export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const cardID = Number(id);
  const card = searchMultipleArrays([testCardsGlobal, testCardsUsers], cardID);
  const seller = testSellers.find((s) => s.id === card?.sellerID);
  
  return (
    <>{cardID}</>
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


