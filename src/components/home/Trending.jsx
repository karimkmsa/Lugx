import { Link } from "react-router-dom";
import { games } from "../../data/games";
import GameCard from "../Layout/GameCard";

function Trending() {
  const trendingGames = games.slice(0, 4);

  return (
    <section id="trending" className="mx-auto max-w-6xl px-4 pb-8 pt-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Trending</p>
          <h2 className="mt-2 text-4xl font-bold">Trending Games</h2>
        </div>
        <Link to="/shop" className="btn-coral">
          VIEW ALL
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {trendingGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Trending;
