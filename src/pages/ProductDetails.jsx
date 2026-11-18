import { Link, useParams } from "react-router-dom";
import PageBanner from "../components/Layout/PageBanner";
import GameCard from "../components/Layout/GameCard";
import { BagIcon } from "../components/Layout/Icons";
import { games, featuredProduct, findGame } from "../data/games";

const longCopy =
  "Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.";

function ProductDetails() {
  const { id } = useParams();
  const game = findGame(id); 

  if (id && !game) {
    return (
      <>
        <PageBanner title="Game not found" crumbs={[{ label: "Not found" }]} />
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-muted">Sorry, we could not find that game.</p>
          <Link to="/shop" className="btn-coral mt-8 inline-block">
            BACK TO SHOP
          </Link>
        </section>
      </>
    );
  }

  let product = featuredProduct;
  if (game) {
    product = {
      ...featuredProduct,
      id: game.id,
      banner: game.name,
      name: game.name,
      category: game.category,
      price: game.price,
      oldPrice: game.oldPrice,
      image: game.image,
      gameId: `GAME-${game.id}`,
      genres: [game.category],
    };
  }

  const relatedGames = games
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <PageBanner
        title={product.banner}
        crumbs={[{ label: "Shop", to: "/shop" }, { label: product.name }]}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <img src={product.image} alt={product.name} className="w-full rounded-3xl object-cover shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <p className="mt-4 text-lg">
            {product.oldPrice ? (
              <span className="mr-3 text-muted line-through">${product.oldPrice}</span>
            ) : null}
            <span className="text-2xl font-bold text-brand">${product.price}</span>
          </p>

          <p className="mt-6 text-sm leading-7 text-muted">{product.description}</p>

          <div className="mt-8 flex">
            <div className="flex h-12 w-16 items-center justify-center rounded-full bg-soft text-sm font-semibold">
              1
            </div>
            <button type="button" className="btn-coral inline-flex items-center gap-2 text-sm tracking-wide">
              <BagIcon />
              ADD TO CART
            </button>
          </div>

          <dl className="mt-10 space-y-3 text-sm">
            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-muted">Game ID:</dt>
              <dd className="font-medium text-brand">{product.gameId}</dd>
            </div>

            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-muted">Genre:</dt>
              <dd className="font-medium text-brand">{product.genres.join(", ")}</dd>
            </div>

            <div className="grid grid-cols-[110px_1fr] gap-2">
              <dt className="text-muted">Multi-tags:</dt>
              <dd className="font-medium text-brand">{product.tags.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-3xl bg-soft px-6 py-8 md:px-10">
          <div className="flex gap-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-brand">Description</h3>
            <h3 className="text-lg font-semibold text-ink">Reviews (3)</h3>
          </div>

          <div className="space-y-5 pt-6 text-sm leading-7 text-muted">
            <p>{longCopy}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-coral">{product.category}</p>
            <h2 className="mt-2 text-4xl font-bold">Related Games</h2>
          </div>

          <Link to="/shop" className="btn-coral">
            VIEW ALL
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedGames.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
