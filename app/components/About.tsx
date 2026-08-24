const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "100+", label: "Bag Varieties" },
  { value: "4.9★", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-5 bg-surface">
      <div className="container py-lg-3">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-brand-soft text-brand fw-semibold rounded-pill px-3 py-2 mb-2">
              👜 Our Story
            </span>
            <h2 className="display-6 fw-bold mb-3">
              Serving Dhangadhi With Quality Bags Since 2015
            </h2>
            <p className="text-body-secondary">
              What started as a small counter at Dhangadhi&apos;s main bazaar has
              grown into Kailali&apos;s favourite bag destination. We travel
              straight to manufacturers in Kathmandu, India and china so we can offer
              premium quality without premium markups.
            </p>
            <p className="text-body-secondary">
              Whether it&apos;s your child&apos;s first school bag, a gift purse
              for Dashain 🪔 or luggage for your first flight ✈️ — we treat
              every purchase like it matters. Because to us, it does.
            </p>
            <ul className="list-unstyled d-flex flex-wrap gap-4 mt-4 mb-0 fw-semibold">
              <li>✅ Hand-checked stock</li>
              <li>🤝 Personal service</li>
              <li>💰 Fair local pricing</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="stats-band bg-brand-gradient text-white p-4 p-lg-5 shadow">
              <div className="row g-4 text-center">
                {stats.map((stat) => (
                  <div className="col-6" key={stat.label}>
                    <div className="display-5 fw-bold">{stat.value}</div>
                    <small className="d-block mt-1 opacity-75 fw-semibold">
                      {stat.label}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
