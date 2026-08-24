const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const categoryLinks = [
  "🎒 School & College Bags",
  "💻 Laptop Bags",
  "👛 Handbags & Purses",
  "🧳 Travel Luggage",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4 pb-3">
          <div className="col-lg-4">
            <h5 className="fw-bold d-flex align-items-center gap-2">
              <span aria-hidden="true">🎒</span> Manakamana Bag House
            </h5>
            <p className="text-white-50 small">
              Your trusted bag shop in the heart of Dhangadhi. Quality bags for
              school, work and travel — at prices that make sense.
            </p>
            <div className="d-flex gap-2">
              <a href="#contact" className="btn btn-outline-light btn-sm rounded-circle px-3" aria-label="Facebook">f</a>
              <a href="#contact" className="btn btn-outline-light btn-sm rounded-circle px-3" aria-label="Instagram">📷</a>
              <a href="#contact" className="btn btn-outline-light btn-sm rounded-circle px-3" aria-label="WhatsApp">💬</a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              {quickLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <a href={link.href} className="link-light text-decoration-none text-white-50">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="fw-bold text-uppercase mb-3">Collections</h6>
            <ul className="list-unstyled small mb-0">
              {categoryLinks.map((category) => (
                <li key={category} className="mb-2 text-white-50">
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-bold text-uppercase mb-3">Contact Info</h6>
            <p className="text-white-50 small mb-1">📍 Main Road, Dhangadhi, Kailali</p>
            <p className="text-white-50 small mb-1">📞 +977 9858424342</p>
            <p className="text-white-50 small mb-0">🕐 Sun – Sat · 7 AM – 8 PM</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center text-white-50 small mb-0">
          © {year} Manakamana Bag House, Dhangadhi · Made with ❤️ in Nepal 🇳🇵
        </p>
      </div>
    </footer>
  );
}
