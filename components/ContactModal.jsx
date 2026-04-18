'use client';

import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>We&apos;ll be in touch</h3>
            <p>Our team will reach out within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Talk to Sales</h3>
            <p className="modal-desc">Tell us about your studio and we&apos;ll find the right plan for you.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@studio.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="studio">Studio name</label>
                <input type="text" id="studio" placeholder="Your studio" />
              </div>
              <div className="form-group">
                <label htmlFor="weddings">Weddings per year</label>
                <select id="weddings" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="1-10">1 to 10</option>
                  <option value="10-30">10 to 30</option>
                  <option value="30-50">30 to 50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Anything else?</label>
                <textarea id="message" placeholder="Tell us what you need" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">Send Message &rarr;</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
