export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=80" alt="" />
        <div className="hero-bg-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Your clients deserve a gallery <span className="hero-title-italic">as good as your photography.</span>
        </h1>
        <p className="hero-subtitle">
          Ve Gallery gives wedding photographers a branded, intelligent delivery experience with AI face search, QR code access, and everything your clients need to find, view, and download their photos.
        </p>
        <a href="#" className="btn btn-primary hero-btn">Get Started &rarr;</a>
        <div className="trust-chips">
          <span>500gb storage</span>
          <span className="chip-dot"></span>
          <span>Unlimited AI face recognition</span>
          <span className="chip-dot"></span>
          <span>No per-gallery fees</span>
        </div>
      </div>
    </section>
  );
}
