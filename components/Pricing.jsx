'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h2 className="section-heading">Simple, studio-grade pricing. <span className="text-muted">No surprises.</span></h2>
          <p className="section-subheading">Pick the plan that fits your volume. Pay once a year. Deliver unlimited galleries.</p>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card featured">
              <div className="pricing-card-header">
                <div className="pricing-card-label">Starter</div>
                <div className="price-tag">&#8377;8,000<span>/year</span></div>
                <div className="price-storage">500GB storage</div>
              </div>
              <a href="#" className="btn btn-primary pricing-btn">Get Started &rarr;</a>
              <div className="pricing-features">
                <ul>
                  <li><Check />Unlimited galleries</li>
                  <li><Check />Unlimited AI face recognition</li>
                  <li><Check />Smart Gallery Search</li>
                  <li><Check />QR code delivery</li>
                  <li><Check />Branded gallery experience</li>
                  <li><Check />Privacy &amp; access control</li>
                  <li><Check />Mobile-first viewing</li>
                  <li><Check />Flexible downloads</li>
                </ul>
              </div>
              <p className="pricing-note">No per-gallery fees. No surprise bills.</p>
            </div>

            {/* Studio */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-card-label">Studio</div>
                <div className="price-tag">&#8377;20,000<span>/year</span></div>
                <div className="price-storage">1TB storage</div>
              </div>
              <a href="#" className="btn btn-outline pricing-btn">Get Started &rarr;</a>
              <div className="pricing-features">
                <ul>
                  <li><Check />Everything in Starter</li>
                  <li><Check />Double the storage</li>
                  <li><Check />Higher delivery volume</li>
                </ul>
              </div>
              <p className="pricing-note">For studios who need more room.</p>
            </div>

            {/* Professional */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-card-label">Professional</div>
                <div className="price-tag">Custom</div>
                <div className="price-storage">5TB storage</div>
              </div>
              <button className="btn btn-outline pricing-btn" onClick={() => setModalOpen(true)}>Talk to Sales &rarr;</button>
              <div className="pricing-features">
                <ul>
                  <li><Check />Everything in Studio</li>
                  <li><Check />5TB storage</li>
                  <li><Check />Priority support</li>
                  <li><Check />Custom onboarding</li>
                </ul>
              </div>
              <p className="pricing-note">For 50+ weddings a year.</p>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
