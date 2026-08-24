const features = [
  {
    emoji: "🚚",
    title: "Fast Local Delivery",
    text: "Free home delivery anywhere inside Dhangadhi sub-metropolitan on orders above Rs. 1,500.",
  },
  {
    emoji: "💯",
    title: "Genuine Quality",
    text: "Every bag is hand-checked before it reaches our shelves — no fakes, only trusted brands.",
  },
  {
    emoji: "💳",
    title: "Easy Payments",
    text: "Pay your way with Cash on Delivery, eSewa, Khalti or bank transfer.",
  },
  {
    emoji: "🔄",
    title: "Alter-Bag Exchange",
    text: "Found defected? Exchange defected unused bag within 7 days with the receipt.",
  },
];

export default function Features() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-sm-6 col-lg-3" key={feature.title}>
              <div className="card h-100 border-0 shadow-sm card-hover rounded-4 text-center p-3">
                <div className="card-body">
                  <div className="icon-circle bg-brand-soft mx-auto mb-3" aria-hidden="true">
                    {feature.emoji}
                  </div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-body-secondary mb-0 small">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
