type Product = {
  emoji: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  tag?: "New" | "Sale" | "Bestseller";
};

const products: Product[] = [
  {
    emoji: "🎒",
    name: "Classic Leather Backpack",
    category: "School & College",
    price: 2499,
    rating: 5,
    tag: "Bestseller",
  },
  {
    emoji: "💻",
    name: "Executive Laptop Bag",
    category: "Laptop Bags",
    price: 3299,
    oldPrice: 3899,
    rating: 5,
    tag: "New",
  },
  {
    emoji: "👛",
    name: "Elegant Evening Handbag",
    category: "Handbags & Purses",
    price: 1899,
    oldPrice: 2499,
    rating: 4,
    tag: "Sale",
  },
  {
    emoji: "🧳",
    name: "Trolley Luggage Set (2 pcs)",
    category: "Travel Luggage",
    price: 7999,
    rating: 5,
    tag: "New",
  },
  {
    emoji: "🎒",
    name: "Campus Casual Daypack",
    category: "School & College",
    price: 1499,
    rating: 4,
  },
  {
    emoji: "🧸",
    name: "Kids Cartoon School Bag",
    category: "School & College",
    price: 999,
    oldPrice: 1299,
    rating: 5,
    tag: "Sale",
  },
];

function formatPrice(value: number) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

const tagClass: Record<string, string> = {
  New: "bg-success",
  Sale: "bg-danger",
  Bestseller: "bg-warning text-dark",
};

export default function Products() {
  return (
    <section id="products" className="py-5">
      <div className="container py-lg-3">
        <div className="text-center mb-5">
          <span className="badge bg-brand-soft text-brand fw-semibold rounded-pill px-3 py-2 mb-2">
            🔥 Featured Products
          </span>
          <h2 className="display-6 fw-bold">This Week&apos;s Picks</h2>
          <p className="text-body-secondary mb-0">
            Handpicked favourites our Dhangadhi customers love the most.
          </p>
        </div>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product.name}>
              <div className="card h-100 border-0 shadow-sm card-hover rounded-4 overflow-hidden">
                <div className="product-thumb bg-brand-gradient position-relative" aria-hidden="true">
                  {product.tag && (
                    <span className={`badge ${tagClass[product.tag]} position-absolute top-0 start-0 m-3 rounded-pill px-3`}>
                      {product.tag}
                    </span>
                  )}
                  <span className="product-thumb-emoji">{product.emoji}</span>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <small className="text-body-secondary text-uppercase fw-semibold ls-sm">
                    {product.category}
                  </small>
                  <h5 className="fw-bold mb-1">{product.name}</h5>
                  <p className="mb-3" aria-label={`Rated ${product.rating} out of 5 stars`}>
                    <span aria-hidden="true" className="text-warning small">
                      {"⭐".repeat(product.rating)}
                    </span>
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-3 mt-auto">
                    <span className="fs-5 fw-bold text-brand">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-body-secondary text-decoration-line-through small">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>
                  <button type="button" className="btn btn-brand rounded-pill fw-semibold w-100">
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-body-secondary mt-4 mb-0">
          💬 Want a bag you don&apos;t see here?{" "}
          <a href="#contact" className="fw-semibold text-brand">
            Ask us on WhatsApp
          </a>{" "}
          — we special-order too!
        </p>
      </div>
    </section>
  );
}
