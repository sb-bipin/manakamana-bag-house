const categories = [
  {
    emoji: "🎒",
    name: "School & College Bags",
    desc: "Durable backpacks for students of every age, from grade school to campus.",
    count: "40+ styles",
  },
  {
    emoji: "💻",
    name: "Laptop Bags",
    desc: "Padded sleeves and professional messenger bags to keep your tech safe.",
    count: "25+ styles",
  },
  {
    emoji: "👛",
    name: "Handbags & Purses",
    desc: "Elegant purses and side bags for everyday style and special occasions.",
    count: "30+ styles",
  },
  {
    emoji: "🧳",
    name: "Travel Luggage",
    desc: "Trolley sets, duffels and rucksacks ready for any trip across Nepal or beyond.",
    count: "20+ styles",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-5 bg-surface">
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="badge bg-brand-soft text-brand fw-semibold rounded-pill px-3 py-2 mb-2">
            🗂️ Browse Categories
          </span>
          <h2 className="display-6 fw-bold">What Are You Looking For?</h2>
          <p className="text-body-secondary mb-0">
            Four collections, one promise — quality you can trust.
          </p>
        </div>
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-sm-6 col-lg-3" key={category.name}>
              <a href="#products" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm card-hover rounded-4 text-center p-3">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-circle bg-brand-gradient text-white fs-2 mx-auto mb-3 shadow-sm" aria-hidden="true">
                      {category.emoji}
                    </div>
                    <h5 className="fw-bold text-dark">{category.name}</h5>
                    <p className="text-body-secondary small flex-grow-1">{category.desc}</p>
                    <span className="badge bg-brand-soft text-brand align-self-center rounded-pill px-3">
                      {category.count}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
