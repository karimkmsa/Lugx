import { Link } from "react-router-dom";


function PageBanner({ title, crumbs }) {
  return (
    <section className="bg-[url('/images/banner-bg.jpg')] bg-cover bg-center rounded-b-[120px] px-4 pb-28 pt-44 text-center text-white md:rounded-b-[150px] md:pb-32">
      <h1 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-white/90">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {crumbs.map((crumb) => (
          <span key={crumb.label}>
            {" "}
            &gt;{" "}
            {crumb.to ? (
              <Link to={crumb.to} className="hover:underline">
                {crumb.label}
              </Link>
            ) : (
              crumb.label
            )}
          </span>
        ))}
      </p>
    </section>
  );
}

export default PageBanner;
