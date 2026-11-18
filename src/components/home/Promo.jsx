import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24">
      <img
        src="/images/single-game.jpg"
        alt="Featured shop game"
        className="pointer-events-none absolute left-1/2 top-8 z-10 hidden h-[340px] w-[280px] -translate-x-1/2 rounded-3xl object-cover shadow-2xl lg:block"
      />

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <div className="rounded-4xl bg-soft px-8 py-12 lg:pr-44 lg:pl-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Our Shop</p>

          <h2 className="mt-3 max-w-xs text-4xl font-bold leading-tight">
            Go Pre-Order Buy &amp; Get Best <span className="text-brand">Prices</span> For You!
          </h2>

          <p className="mt-6 max-w-xs text-sm leading-7 text-muted">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>

          <Link to="/shop" className="btn-coral mt-8 inline-block px-7">
            SHOP NOW
          </Link>
        </div>

        <div className="rounded-4xl bg-soft px-8 py-12 lg:pl-44 lg:pr-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Newsletter</p>

          <h2 className="mt-3 text-4xl font-bold leading-tight">
            Get Up To $100 Off Just Buy <span className="text-brand">Subscribe</span> Newsletter!
          </h2>

          <div className="mt-10 flex max-w-md items-center rounded-full bg-white p-1.5">
            <input
              type="email"
              placeholder="Your email..."
              className="w-full bg-transparent px-4 py-2 text-sm outline-none"
            />

            <button type="button" className="btn-coral shrink-0 px-5">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
