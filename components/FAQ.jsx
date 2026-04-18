'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'We already use Google Drive / WeTransfer. Why switch?',
    a: 'Those tools were built for file sharing, not client experience. Ve Gallery is built specifically for photography delivery with branded presentation, AI face search, access control, and downloads that work on mobile. Your clients notice the difference. So do the couples who refer you.',
  },
  {
    q: 'How does the pricing work?',
    a: 'Ve Gallery has three plans, all billed annually. Starter at \u20B98,000/year covers 500GB, unlimited galleries, and all features including AI face recognition. Studio at \u20B920,000/year steps up to 1TB. For studios needing 5TB, talk to us directly for a Professional plan quote. No per-gallery fees, no per-client charges on any plan.',
  },
  {
    q: 'Is there a limit on how many galleries I can create?',
    a: 'No. Create as many galleries as your studio needs within your storage plan. Start on 500GB, move to 1TB as your volume grows, or talk to us about 5TB if you\u2019re running a high-volume operation.',
  },
  {
    q: "How does Smart Gallery Search work for clients who aren\u2019t tech-savvy?",
    a: 'They type a name or select a face from a simple prompt. Ve Gallery does the rest. No technical knowledge required. If they can use WhatsApp, they can use face search.',
  },
  {
    q: 'Can I restrict downloads for certain guests?',
    a: 'Yes. You control exactly who can download, at what resolution, and for how long. Full control is set before you send the link. No follow-up needed.',
  },
  {
    q: 'How long does it take to set up a gallery?',
    a: 'Most photographers have a gallery live within 20 to 30 minutes of upload completion. Organise albums, set access rules, generate your QR code, and send the link, all from one dashboard.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-label">FAQ</div>
        <h2 className="section-heading">Your questions, <span className="text-muted">answered with clarity</span></h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${activeIndex === i ? ' active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
