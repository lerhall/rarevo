export type Card = {
  id: number;
  name: string;
  set: string;
  rarity: string;
  price: number;
  category: string; // used to group rows on the home page
};

export const testCards: Card[] = [
  { id: 0, name: "Dragonite", set: "Fossil", rarity: "Rare", price: 60.0, category: "Newly Listed" },
  { id: 1, name: "Pikachu", set: "Base Set", rarity: "Common", price: 5.0, category: "Trending" },
  { id: 2, name: "Charizard", set: "Base Set", rarity: "Holo Rare", price: 350.0, category: "Trending" },
  { id: 3, name: "Bulbasaur", set: "Base Set", rarity: "Common", price: 3.5, category: "Base Set" },
  { id: 4, name: "Mewtwo", set: "Base Set", rarity: "Holo Rare", price: 40.0, category: "Base Set" },
  { id: 5, name: "Blastoise", set: "Base Set", rarity: "Holo Rare", price: 120.0, category: "Base Set" },
  { id: 6, name: "Gengar", set: "Fossil", rarity: "Rare", price: 25.0, category: "Newly Listed" },

];

