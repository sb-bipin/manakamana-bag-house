import ThemeToggle from "./ThemeToggle";
import BottomNav from "./BottomNav";

const links = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <>
      <nav className="navbar site-navbar">
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2"
            href="#home"
          >
            <span aria-hidden="true">🎒</span>
            <span>
              Manakamana <span className="text-brand">Bag House</span>
            </span>
          </a>
          <ul className="d-none d-lg-flex align-items-center gap-1 list-unstyled mb-0 ms-auto">
            {links.map((link) => (
              <li key={link.href}>
                <a className="nav-link fw-semibold px-3" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-brand btn-sm rounded-pill px-3 fw-semibold d-none d-lg-inline-block ms-3 me-3"
            href="#products"
          >
            🛍️ Shop Now
          </a>
          <ThemeToggle />
        </div>
      </nav>
      <BottomNav />
    </>
  );
}
