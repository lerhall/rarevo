import Header from "@/components/Header";
import CardRow from "@/components/CardRow";
import { testCards } from "@/lib/testData";

export default function Home() {
  const categories = Array.from(new Set(testCards.map((c) => c.category)));

  return (
    <>
      <Header />
      <main className="page">
        {categories.map((category) => (
          <CardRow
            key={category}
            title={category}
            cards={testCards.filter((c) => c.category === category)}
          />
        ))}
      </main>
    </>
  );
}