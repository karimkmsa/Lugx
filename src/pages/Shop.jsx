import { useState } from "react";
import PageBanner from "../components/Layout/PageBanner";
import GameCard from "../components/Layout/GameCard";
import { games, filters } from "../data/games";

function Shop() {
  const [activeFilter, setActiveFilter] = useState("Show All");

  const visibleGames = games.filter(
    (game) => activeFilter === "Show All" || game.category === activeFilter
  );

  return (
    <>
      <PageBanner title="Our Shop" crumbs={[{ label: "Our Shop" }]} />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide ${
                filter === activeFilter ? "bg-coral text-white" : "bg-soft text-ink hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-2">
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-soft text-sm font-semibold">
            &lt;
          </button>

          {[1, 2, 3, 4].map((number) => (
            <button
              key={number}
              type="button"
              className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold ${
                number === 1 ? "bg-brand text-white" : "bg-soft"
              }`}
            >
              {number}
            </button>
          ))}

          <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-soft text-sm font-semibold">
            &gt;
          </button>
        </div>
      </section>
    </>
  );
}

export default Shop;
