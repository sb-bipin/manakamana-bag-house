import ContactForm from "./ContactForm";

const details = [
  {
    emoji: "📍",
    title: "Visit Us",
    lines: ["Retail store : Main Road, Bus Park Entrance", "Wholesale : In Front of Navajeevan Hospital", "Dhangadhi, Kailali, Nepal"],
  },
  {
    emoji: "📞",
    title: "Call / WhatsApp",
    lines: ["+977 9858424342", "+977 9764448306"],
  },
  {
    emoji: "🕐",
    title: "Shop Hours",
    lines: ["Sun – Sat: 7 AM – 8 PM"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-surface-alt">
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="badge bg-white text-brand fw-semibold rounded-pill px-3 py-2 mb-2 shadow-sm">
            ✉️ Get In Touch
          </span>
          <h2 className="display-6 fw-bold">We&apos;re Here to Help</h2>
          <p className="text-body-secondary mb-0">
            Drop by the shop, give us a call or send a quick message.
          </p>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {details.map((detail) => (
                <div className="card border-0 shadow-sm rounded-4 card-hover flex-grow-1" key={detail.title}>
                  <div className="card-body d-flex gap-3 align-items-start p-4">
                    <div className="icon-circle icon-circle-sm bg-brand-gradient text-white fs-4" aria-hidden="true">
                      {detail.emoji}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">{detail.title}</h5>
                      {detail.lines.map((line) => (
                        <p className="text-body-secondary mb-0 small" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="card border-0 rounded-4 bg-brand-gradient text-white text-center py-3">
                <div className="card-body py-1">
                  <span className="fw-semibold">💳 Cash on Delivery · eSewa · Khalti</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 p-lg-5">
                <h4 className="fw-bold mb-4">Send Us a Message 📝</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
