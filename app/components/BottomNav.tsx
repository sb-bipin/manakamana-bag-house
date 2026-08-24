const items = [
  { href: "#home", icon: "🏠", label: "Home" },
  { href: "#categories", icon: "🗂️", label: "Categories" },
  { href: "#products", icon: "🛍️", label: "Shop" },
  { href: "#about", icon: "👜", label: "About" },
  { href: "#contact", icon: "✉️", label: "Contact" },
];

export default function BottomNav() {
  return (
    <nav
      className="bottom-nav d-flex d-lg-none justify-content-around align-items-stretch"
      aria-label="Mobile navigation"
    >
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          <span className="bn-icon" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
