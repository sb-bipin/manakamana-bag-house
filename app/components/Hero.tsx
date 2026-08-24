const highlights = ["🚚 Free Delivery in Dhangadhi", "✅ 100% Genuine Products", "🔄 Easy Exchange"];

export default function Hero() {
  return (
    <section id="home" className="bg-brand-gradient text-white">
      <div className="container py-5">
        <div className="row align-items-center g-4 py-lg-4">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="badge rounded-pill bg-light text-dark fw-semibold px-3 py-2 mb-3 shadow-sm d-inline-flex align-items-center gap-2">
              <span className="pulse-dot bg-success rounded-circle d-inline-block" style={{ width: "8px", height: "8px" }} aria-hidden="true"></span>
              🏪 Premium Bag Shop · Dhangadhi, Kailali
            </span>
            <h1 className="display-3 fw-bold mb-3">
              Namaste! Find Your
              <br />
              Perfect Bag Here 👜
            </h1>
            <p className="lead mb-4 pe-lg-5 opacity-90">
              From sturdy school backpacks 🎒 to premium travel luggage 🧳,
              Manakamana Bag House brings you quality bags for every journey —
              at honest Nepali prices.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap mb-4">
              <a href="#products" className="btn btn-light btn-lg rounded-pill px-4 fw-semibold text-dark shadow">
                Shop Collection 🛍️
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold">
                Visit Store 📍
              </a>
            </div>
            <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-0 small fw-semibold">
              {highlights.map((item) => (
                <li key={item} className="bg-white bg-opacity-10 rounded-pill px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block my-4 my-lg-0">
              <div
                className="rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center float-slow"
                style={{ width: "260px", height: "260px" }}
              >
                <span aria-hidden="true" style={{ fontSize: "7rem" }}>
                  🎒
                </span>
              </div>
              <span aria-hidden="true" className="badge bg-white text-dark fs-3 p-3 rounded-circle position-absolute top-0 start-0 shadow float-slow">
                👛
              </span>
              <span aria-hidden="true" className="badge bg-white text-dark fs-3 p-3 rounded-circle position-absolute bottom-0 end-0 shadow float-slow" style={{ animationDelay: "0.5s" }}>
                🧳
              </span>
              <span aria-hidden="true" className="badge bg-white text-dark fs-3 p-3 rounded-circle position-absolute top-50 end-0 translate-middle-y shadow float-slow" style={{ animationDelay: "1s" }}>
                💻
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
