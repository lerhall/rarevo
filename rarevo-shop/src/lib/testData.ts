export type Card = {
  id: number;
  name: string;
  set: string;
  rarity: string;
  price: number;
  category: string; // used to group rows on the home page
  sellerID: number; // used to link to seller profile
};

export const testCardsGlobal: Card[] = [
  { id: 0, name: "Dragonite", set: "Fossil", rarity: "Rare", price: 60.0, category: "Newly Listed", sellerID: 1 },
  { id: 1, name: "Pikachu", set: "Base Set", rarity: "Common", price: 5.0, category: "Trending", sellerID: 2 },
  { id: 2, name: "Charizard", set: "Base Set", rarity: "Holo Rare", price: 350.0, category: "Trending", sellerID: 3 },
  { id: 3, name: "Bulbasaur", set: "Base Set", rarity: "Common", price: 3.5, category: "Base Set", sellerID: 4 },
  { id: 4, name: "Mewtwo", set: "Base Set", rarity: "Holo Rare", price: 40.0, category: "Base Set", sellerID: 5 },
  { id: 5, name: "Blastoise", set: "Base Set", rarity: "Holo Rare", price: 120.0, category: "Base Set", sellerID: 6 },
  { id: 6, name: "Gengar", set: "Fossil", rarity: "Rare", price: 25.0, category: "Newly Listed", sellerID: 7 },

];

export const testCardsUsers: Card[] = [
  { id: 7, name: "Eevee", set: "Jungle", rarity: "Common", price: 4.0, category: "User Listings", sellerID: 8  },
  { id: 8, name: "Snorlax", set: "Jungle", rarity: "Rare", price: 30.0, category: "User Listings", sellerID: 9 },
  { id: 9, name: "Machamp", set: "Base Set", rarity: "Holo Rare", price: 50.0, category: "User Listings", sellerID: 10 },
  { id: 10, name: "Alakazam", set: "Base Set", rarity: "Holo Rare", price: 45.0, category: "User Listings", sellerID: 11 },
  { id: 11, name: "Jigglypuff", set: "Jungle", rarity: "Common", price: 2.5, category: "User Listings", sellerID: 12 },
  { id: 12, name: "Zapdos", set: "Fossil", rarity: "Rare", price: 70.0, category: "User Listings", sellerID: 13 },
  { id: 13, name: "Articuno", set: "Fossil", rarity: "Rare", price: 65.0, category: "User Listings", sellerID: 14 },
  { id: 14, name: "Moltres", set: "Fossil", rarity: "Rare", price: 75.0, category: "User Listings", sellerID: 15 },
  { id: 15, name: "Onix", set: "Base Set", rarity: "Common", price: 3.0, category: "User Listings", sellerID: 16 },
  { id: 16, name: "Scyther", set: "Jungle", rarity: "Rare", price: 28.0, category: "User Listings", sellerID: 17 },
  
];

export const testSellers = [
  { id: 1, name: "Seller One", rating: 4.5, sales: 120, joinDate: "2020-01-15" },
  { id: 2, name: "Seller Two", rating: 4.0, sales: 80,  joinDate: "2020-02-20" },
  { id: 3, name: "Seller Three", rating: 4.8, sales: 150, joinDate: "2020-03-10" },
  { id: 4, name: "Seller Four", rating: 3.9, sales: 60, joinDate: "2020-04-15" },
  { id: 5, name: "Seller Five", rating: 4.2, sales: 90,  joinDate: "2020-05-20" },
  { id: 6, name: "Seller Six", rating: 4.7, sales: 110,  joinDate: "2020-06-10" },
  { id: 7, name: "Seller Seven", rating: 4.1, sales: 70,  joinDate: "2020-07-15" },
  { id: 8, name: "Seller Eight", rating: 4.3, sales: 95,  joinDate: "2020-08-20" },
  { id: 9, name: "Seller Nine", rating: 4.6, sales: 130,  joinDate: "2020-09-10" },
  { id: 10, name: "Seller Ten", rating: 4.0, sales: 55,  joinDate: "2020-10-15" },
  { id: 11, name: "Seller Eleven", rating: 4.4, sales: 105, joinDate: "2020-11-20" },
  { id: 12, name: "Seller Twelve", rating: 4.9, sales: 160, joinDate: "2020-12-10" },
  { id: 13, name: "Seller Thirteen", rating: 4.2, sales: 85, joinDate: "2021-01-15" },
  { id: 14, name: "Seller Fourteen", rating: 4.5, sales: 140, joinDate: "2021-02-20" },
  { id: 15, name: "Seller Fifteen", rating: 4.1, sales: 75, joinDate: "2021-03-10" },
  { id: 16, name: "Seller Sixteen", rating: 4.3, sales: 90, joinDate: "2021-04-15" },
  { id: 17, name: "Seller Seventeen", rating: 4.7, sales: 120, joinDate: "2021-05-10" },
];

