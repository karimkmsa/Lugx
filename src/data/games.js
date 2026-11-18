
export const games = [
  { id: "1", name: "Assassin's Creed", category: "Action", price: 24, oldPrice: 36, image: "/images/trending-01.jpg" },
  { id: "2", name: "Assassin's Creed", category: "Adventure", price: 22, oldPrice: 32, image: "/images/trending-02.jpg" },
  { id: "3", name: "Assassin's Creed", category: "Strategy", price: 30, oldPrice: 45, image: "/images/trending-03.jpg" },
  { id: "4", name: "Assassin's Creed", category: "Racing", price: 22, oldPrice: 32, image: "/images/trending-04.jpg" },
  { id: "5", name: "Assassin's Creed", category: "Action", price: 26, oldPrice: 38, image: "/images/top-game-01.jpg" },
  { id: "6", name: "Assassin's Creed", category: "Adventure", price: 20, oldPrice: 30, image: "/images/top-game-02.jpg" },
  { id: "7", name: "Assassin's Creed", category: "Strategy", price: 22, oldPrice: 32, image: "/images/top-game-03.jpg" },
  { id: "8", name: "Assassin's Creed", category: "Racing", price: 22, oldPrice: 32, image: "/images/top-game-04.jpg" },
  { id: "9", name: "Assassin's Creed", category: "Action", price: 20, oldPrice: 28, image: "/images/top-game-05.jpg" },
  { id: "10", name: "Assassin's Creed", category: "Adventure", price: 18, oldPrice: 26, image: "/images/top-game-06.jpg" },
  { id: "11", name: "Assassin's Creed", category: "Strategy", price: 24, oldPrice: 32, image: "/images/trending-01.jpg" },
  { id: "12", name: "Assassin's Creed", category: "Racing", price: 30, oldPrice: 45, image: "/images/trending-03.jpg" },
];

export const featuredProduct = {
  id: "mw2",
  banner: "Modern Warfare® II",
  name: "Call of Duty®: Modern Warfare® II",
  category: "Action",
  price: 22,
  oldPrice: 28,
  image: "/images/single-game.jpg",
  gameId: "COD MMII",
  genres: ["Action", "Team", "Single"],
  tags: ["War", "Battle", "Royal"],
  description:
    "Placeholder description. Replace it with real details about the game, like the story, the platforms and the release date.",
};

export const categories = [
  { id: "cat-1", name: "Action", image: "/images/categories-01.jpg" },
  { id: "cat-2", name: "Adventure", image: "/images/categories-03.jpg" },
  { id: "cat-3", name: "Strategy", image: "/images/categories-04.jpg" },
  { id: "cat-4", name: "Racing", image: "/images/categories-05.jpg" },
];

export const filters = ["Show All", "Action", "Adventure", "Strategy", "Racing"];

export function findGame(id) {
  return games.find((game) => game.id === id);
}
