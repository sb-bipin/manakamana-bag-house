"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="alert alert-success rounded-4 p-4 h-100 d-flex flex-column justify-content-center mb-0" role="alert">
        <h4 className="alert-heading fw-bold">Dhanyabad! 🙏</h4>
        <p className="mb-0">
          Your message has been received. We&apos;ll get back to you within a
          few hours during shop time (10 AM – 8 PM).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="contact-name" className="form-label fw-semibold small">
            Your Name 👤
          </label>
          <input type="text" className="form-control rounded-3" id="contact-name" placeholder="e.g. Ram Bahadur Thapa" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact-phone" className="form-label fw-semibold small">
            Phone Number 📞
          </label>
          <input type="tel" className="form-control rounded-3" id="contact-phone" placeholder="98XXXXXXXX" required />
        </div>
        <div className="col-12">
          <label htmlFor="contact-message" className="form-label fw-semibold small">
            Message 💬
          </label>
          <textarea className="form-control rounded-3" id="contact-message" rows={4} placeholder="Which bag are you looking for?" required></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-brand btn-lg rounded-pill px-4 fw-semibold w-100">
            Send Message 📨
          </button>
        </div>
      </div>
    </form>
  );
}
