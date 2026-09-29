const segments = [
  {
    emoji: "🏫",
    name: "Schools, Colleges & Institutes",
    desc: "Bulk student bags for the new academic year, staff bags, and repeat supply every session.",
    points: ["New-session bulk lots", "Consistent colour & quality", "Bill with proper GST"],
  },
  {
    emoji: "🏪",
    name: "Other Bag Shops & Retailers",
    desc: "Dealer pricing on our regular catalogue so your shelf stays full without tying up your cash.",
    points: ["Dealer rate card", "Top-up orders any quantity", "New designs every season"],
  },
  {
    emoji: "💻",
    name: "Corporate & Office Gifting",
    desc: "Branded laptop sleeves, sling bags and tote bags for staff, clients and event giveaways.",
    points: ["Logo printing & embroidery", "Mixed-item cartons", "Lead time on large runs"],
  },
  {
    emoji: "🎁",
    name: "Wedding & Event Gifting",
    desc: "Return-gift sets, wedding favours and small packaging pouches in your chosen colours.",
    points: ["Custom colour & print", "Small MOQ for events", "Delivery before your date"],
  },
  {
    emoji: "🏛️",
    name: "NGO, Tender & Institutional Supply",
    desc: "Quoted supply for institutions and public tenders, with clean paperwork and reference support.",
    points: ["Formal quotations", "Tender documentation", "Reference on request"],
  },
  {
    emoji: "📦",
    name: "Online & Social Resellers",
    desc: "Weekly restock drops for Instagram, WhatsApp and marketplace sellers across Kailali.",
    points: ["Weekly restock alerts", "Photo-ready stock updates", "Easy exchange on defects"],
  },
];

const assurances = [
  { emoji: "📋", text: "Send your requirement list on WhatsApp — we reply the same day" },
  { emoji: "🚚", text: "Free delivery qualifying bulk orders" },
  { emoji: "🔄", text: "Defective or wrong items exchanged, no arguments" },
];

export default function WhoWeSupply() {
  return (
    <section id="wholesale" className="py-5 bg-surface-alt">
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="badge bg-brand-soft text-brand fw-semibold rounded-pill px-3 py-2 mb-2">
            🏭 Wholesale Counter
          </span>
          <h2 className="display-6 fw-bold">Who Do We Supply?</h2>
          <p className="text-body-secondary mb-0">
            Not just walk-in customers — we keep businesses supplied all year
            round.
          </p>
        </div>
        <div className="row g-4">
          {segments.map((segment) => (
            <div className="col-md-6 col-lg-4" key={segment.name}>
              <div className="card h-100 border-0 shadow-sm card-hover rounded-4 p-3">
                <div className="card-body d-flex flex-column">
                  <div
                    className="icon-circle icon-circle-sm bg-brand-gradient text-white mb-3 shadow-sm"
                    aria-hidden="true"
                  >
                    {segment.emoji}
                  </div>
                  <h5 className="fw-bold">{segment.name}</h5>
                  <p className="text-body-secondary small">{segment.desc}</p>
                  <ul className="list-unstyled small text-body-secondary mb-0 mt-auto pt-2">
                    {segment.points.map((point) => (
                      <li key={point} className="d-flex gap-2 mb-1">
                        <span aria-hidden="true">✔️</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card border-0 shadow-sm rounded-4 mt-4">
          <div className="card-body">
            <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap gap-3 mb-0 small">
              {assurances.map((assurance) => (
                <li
                  key={assurance.text}
                  className="d-flex align-items-center gap-2 flex-fill"
                >
                  <span aria-hidden="true">{assurance.emoji}</span>
                  <span>{assurance.text}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a
                href="#contact"
                className="btn btn-brand rounded-pill px-4 fw-semibold"
              >
                Get a Wholesale Quote
              </a>
              <a
                href="tel:+9779858424342"
                className="btn btn-outline-secondary rounded-pill px-4 fw-semibold"
              >
                📞 Call the Counter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
