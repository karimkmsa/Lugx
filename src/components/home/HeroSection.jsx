function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-b-[100px] bg-[url('/images/banner-bg.jpg')] bg-cover bg-center px-4 pb-40 pt-40 text-white md:rounded-b-[150px] md:pb-48 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">Welcome to Lugx</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            BEST <span className="underline decoration-coral decoration-[5px] underline-offset-[10px]">GAMING</span> SITE EVER!
          </h1>
          <p className="mt-8 text-sm leading-7 text-white/90">
    LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about TemplateMo.          </p>

          <div className="mt-8 flex max-w-md items-center rounded-full bg-white p-1.5">
            <input
              placeholder="Type Something"
              className="w-full bg-transparent px-4 py-2 text-sm text-muted outline-none"
            />
            <button type="button" className="btn-coral shrink-0">
              SEARCH NOW
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <img src="/images/banner-image.jpg" alt="Featured game character" className="w-full rounded-3xl object-cover shadow-2xl" />
          <span className="absolute right-4 top-4 rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white shadow">$22</span>
          <span className="absolute -bottom-8 -left-2 grid h-28 w-28 place-items-center rounded-full bg-coral text-2xl font-bold text-white shadow-lg md:-left-8">
            -40%
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
