export type Card = {
  id: number;
  name: string;
  set: string;
  rarity: string;
  price: number;
  category: string; // used to group rows on the home page
};

export const testCardsGlobal: Card[] = [
  { id: 0, name: "Dragonite", set: "Fossil", rarity: "Rare", price: 60.0, category: "Newly Listed" },
  { id: 1, name: "Pikachu", set: "Base Set", rarity: "Common", price: 5.0, category: "Trending" },
  { id: 2, name: "Charizard", set: "Base Set", rarity: "Holo Rare", price: 350.0, category: "Trending" },
  { id: 3, name: "Bulbasaur", set: "Base Set", rarity: "Common", price: 3.5, category: "Base Set" },
  { id: 4, name: "Mewtwo", set: "Base Set", rarity: "Holo Rare", price: 40.0, category: "Base Set" },
  { id: 5, name: "Blastoise", set: "Base Set", rarity: "Holo Rare", price: 120.0, category: "Base Set" },
  { id: 6, name: "Gengar", set: "Fossil", rarity: "Rare", price: 25.0, category: "Newly Listed" },

];

export const testCardsUsers: Card[] = [
  { id: 7, name: "Eevee", set: "Jungle", rarity: "Common", price: 4.0, category: "User Listings" },
  { id: 8, name: "Snorlax", set: "Jungle", rarity: "Rare", price: 30.0, category: "User Listings" },
  { id: 9, name: "Machamp", set: "Base Set", rarity: "Holo Rare", price: 50.0, category: "User Listings" },
  { id: 10, name: "Alakazam", set: "Base Set", rarity: "Holo Rare", price: 45.0, category: "User Listings" },
  { id: 11, name: "Jigglypuff", set: "Jungle", rarity: "Common", price: 2.5, category: "User Listings" },
  { id: 12, name: "Zapdos", set: "Fossil", rarity: "Rare", price: 70.0, category: "User Listings" },
  { id: 13, name: "Articuno", set: "Fossil", rarity: "Rare", price: 65.0, category: "User Listings" },
  { id: 14, name: "Moltres", set: "Fossil", rarity: "Rare", price: 75.0, category: "User Listings" },
  { id: 15, name: "Onix", set: "Base Set", rarity: "Common", price: 3.0, category: "User Listings" },
  { id: 16, name: "Scyther", set: "Jungle", rarity: "Rare", price: 28.0, category: "User Listings" },
  
];

