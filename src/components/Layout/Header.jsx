import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Our Shop" },
  { to: "/product", label: "Product Details" },
  { to: "/contact", label: "Contact Us" },
];

function Header() {
  const [scrolled, setScrolled] = useState(window.scrollY > 60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand shadow-lg rounded-b-3xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link
          to="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setOpen(false)}
        >
          <img src="/images/logo.png" alt="Logo" />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
        </button>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-4 top-[84px] flex-col gap-2 rounded-3xl bg-brand p-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-2 lg:bg-transparent lg:p-0`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-medium text-white transition ${
                  isActive ? "bg-white/25" : "hover:bg-white/15"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button className="btn-coral px-5 py-2 text-sm tracking-wide hover:brightness-105 lg:ml-2">
            SIGN IN
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
