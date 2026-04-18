'use client';

import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img src="https://us.images.ve.ai/public/dashboard/image.png" alt="Ve Gallery" className="logo-icon" />
          </a>
          <div className="nav-links">
            <a href="#features" onClick={(e) => handleClick(e, '#features')}>Features</a>
            <a href="#how-it-works" onClick={(e) => handleClick(e, '#how-it-works')}>How it works</a>
            <a href="#pricing" onClick={(e) => handleClick(e, '#pricing')}>Pricing</a>
          </div>
          <div className="nav-ctas">
            <button className="nav-cta-secondary" onClick={() => setModalOpen(true)}>Talk to Sales</button>
            <a href="#" className="nav-cta">Sign Up &rarr;</a>
          </div>
          <button className="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
