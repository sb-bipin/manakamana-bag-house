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

const socialLinks = [
  {
    href: "#contact",
    label: "Facebook",
    color: "#1877f2",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.62 8.62 0 0 0-.653-.036 26.8 26.8 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.69 1.69 0 0 0-.679.742c-.258.375-.372.995-.372 1.627v1.961h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    href: "#contact",
    label: "Instagram",
    color: "#e1306c",
    path: "M12 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06L12 2.16Zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
  {
    href: "#contact",
    label: "WhatsApp",
    color: "#25d366",
    path: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 2.58.032 6.928c.015 2.286.684 4.508 1.932 6.538L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.626 11.893-11.93a11.82 11.82 0 0 0-3.48-8.412ZM7.994 14.52a1.68 1.68 0 0 1-1.666-1.666c0-1.147.93-2.077 1.666-2.077h.421c.096 0 .187.024.268.07a.57.57 0 0 1 .282.528c.032.144.02.305-.018.444a1.01 1.01 0 0 1-.267.433c-.11.115-.233.2-.354.313a.52.52 0 0 0-.206.483.59.59 0 0 0 .056.22c.453.92.864 1.407 1.466 1.587.288.098.468.042.601-.021a3.75 3.75 0 0 0 .51-.384c.128-.133.26-.24.418-.315.134-.063.268-.04.3.13.056.248.035.551-.02.802-.098.46-.634 1.39-1.04 1.691-.283.214-.572.316-.86.316-.217 0-.435-.1-.625-.1a5.2 5.2 0 0 1-.528-.08 4.06 4.06 0 0 1-1.143-1.102 4.1 4.1 0 0 1-.562-1.194c-.05-.1-.09-.247-.09-.396 0-.148.06-.31.1-.446.068-.248.146-.427.2-.613a1.16 1.16 0 0 0 .079-.428c0-.15-.046-.261-.108-.377a2.58 2.58 0 0 0-.774-.982 2.32 2.32 0 0 0-.72-.315 4.36 4.36 0 0 0-.63-.108c-.21 0-.472.03-.7.04-.32.012-.496.02-.6.033-.28.055-.72.24-1.015.544-.32.333-.5.815-.5 1.19s.208.818.238 1.033a11.37 11.37 0 0 0 1.012 3.78 10.86 10.86 0 0 0 2.52 3.04c.83.65 1.71 1.02 2.71 1.13.28.02.55.03.83.03.31 0 .55-.01.8-.04.5-.055 1.12-.25 1.55-.55a1.65 1.65 0 0 0 .55-1.03c.06-.25.06-.5.02-.71a.47.47 0 0 0-.12-.33ZM19.336 2.037c2.32 0 4.208 1.888 4.208 4.207 0 .566-.103 1.134-.31 1.66a.4.4 0 0 1-.17.19c-.087.075-.2.12-.32.12h-.155a.45.45 0 0 1-.28-.08.44.44 0 0 1-.158-.3 3.85 3.85 0 0 0-.32-1.01 4.1 4.1 0 0 0-3.1-2.14 4.1 4.1 0 0 0-3.98 2.13 3.9 3.9 0 0 0-.32 1.01.44.44 0 0 1-.16.3.45.45 0 0 1-.28.08h-.15a.4.4 0 0 1-.33-.12.41.41 0 0 1-.16-.19 5.07 5.07 0 0 1-.31-1.66c0-2.32 1.888-4.208 4.208-4.208Z",
  },
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
            <ul className="social-links list-unstyled d-flex gap-2 mb-0 mt-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="social-btn d-inline-flex align-items-center justify-content-center"
                    style={{ "--social-color": social.color } as React.CSSProperties}
                    aria-label={social.label}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
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
            <p className="text-white-50 small mb-1">📍 Uttar-Behadi, Dhangadhi, Kailali</p>
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
