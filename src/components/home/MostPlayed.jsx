import { Link } from "react-router-dom";
import { games } from "../../data/games";

function MostPlayed() {
  const mostPlayed = games.slice(4, 10);

  return (
    <section className="mt-16 px-3 md:px-6">
      <div className="rounded-[80px] bg-soft px-4 py-16 md:rounded-[120px] md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-coral">Top Games</p>
              <h2 className="mt-2 text-4xl font-bold">Most Played</h2>
            </div>
            <Link to="/shop" className="btn-coral">
              VIEW ALL
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {mostPlayed.map((game) => (
              <article key={game.id} className="rounded-3xl bg-white px-4 pb-6 pt-4 text-center shadow-sm">
                <Link to={`/product/${game.id}`}>
                  <img src={game.image} alt={game.name} className="aspect-square w-full rounded-2xl object-cover" />
                </Link>
                <p className="mt-4 text-sm text-muted">{game.category}</p>
                <h3 className="font-bold">
                  <Link to={`/product/${game.id}`}>{game.name}</Link>
                </h3>
                <Link to={`/product/${game.id}`} className="btn-coral mt-4 inline-block px-5 py-2">
                  EXPLORE
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostPlayed;
