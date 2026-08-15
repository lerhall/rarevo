"use client";

import {testCardsGlobal} from "@/lib/testData";

export default async function CardPage({ params }: { params: Promise<{id: string}>}) {
    const { id } = await params;
    const cardID = Number(id);
    const card = testCardsGlobal.find((c) => c.id === cardID);
    return (
        <div>Card {id} {card?.name}</div>
    );
}