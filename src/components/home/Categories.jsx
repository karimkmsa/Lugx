import { Link } from "react-router-dom";
import { categories } from "../../data/games";

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">Categories</p>
      <h2 className="mt-2 text-4xl font-bold">Top Categories</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.id} to="/shop" className="overflow-hidden rounded-3xl bg-brand pb-3 pt-4 text-white">
            <p className="mb-3 font-bold">{category.name}</p>
            <img src={category.image} alt={category.name} className="mx-auto h-40 w-[90%] rounded-2xl object-cover" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
