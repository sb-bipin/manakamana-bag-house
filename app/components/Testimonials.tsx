const testimonials = [
  {
    quote:
      "Bought a laptop bag for my son before his board exams — six months of daily use and it still looks new. Great quality!",
    name: "Sita Sharma",
    place: "Dhangadhi",
    rating: 5,
  },
  {
    quote:
      "Ordered a trolley set over the phone and it was delivered to Tikapur the next day. Very genuine shop, dhanyabad!",
    name: "Rajesh Bohara",
    place: "Tikapur",
    rating: 5,
  },
  {
    quote:
      "Lovely collection of purses at honest prices. The staff helped me pick a gift for my sister — she loved it! 💝",
    name: "Anita Chaudhary",
    place: "Attariya",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5">
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="badge bg-brand-soft text-brand fw-semibold rounded-pill px-3 py-2 mb-2">
            💬 Customer Reviews
          </span>
          <h2 className="display-6 fw-bold">Loved Across Kailali</h2>
          <p className="text-body-secondary mb-0">
            Real words from real customers around Dhangadhi.
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-md-4" key={testimonial.name}>
              <div className="card h-100 border-0 shadow-sm card-hover rounded-4 p-3">
                <div className="card-body">
                  <p aria-hidden="true" className="text-warning small mb-2">
                    {"⭐".repeat(testimonial.rating)}
                  </p>
                  <p className="text-body-secondary fst-italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <div className="icon-circle icon-circle-sm bg-brand-gradient text-white" aria-hidden="true">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="fw-bold">{testimonial.name}</div>
                      <small className="text-body-secondary">📍 {testimonial.place}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
