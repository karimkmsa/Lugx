import { Link } from "react-router-dom";
import { BagIcon } from "./Icons";


function GameCard({ game }) {
  return (
    <article>
      <Link to={`/product/${game.id}`} className="relative block overflow-hidden rounded-3xl">
        <img src={game.image} alt={game.name} className="h-56 w-full object-cover transition duration-300 hover:scale-105" />
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1">
          {game.oldPrice ? <span className="text-sm text-white line-through">${game.oldPrice}</span> : null}
          <span className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white">${game.price}</span>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-soft px-5 py-4">
        <div>
          <p className="text-sm text-muted">{game.category}</p>
          <h3 className="font-bold">
            <Link to={`/product/${game.id}`}>{game.name}</Link>
          </h3>
        </div>
        <Link
          to={`/product/${game.id}`}
          aria-label={`View ${game.name}`}
          className="grid h-11 w-11 place-items-center rounded-full bg-coral text-white"
        >
          <BagIcon />
        </Link>
      </div>
    </article>
  );
}

export default GameCard;
