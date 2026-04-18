export default function Features() {
  const tier3 = [
    {
      title: 'Privacy & Access Control',
      desc: 'One link. Two access levels.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    },
    {
      title: 'Mobile-First Experience',
      desc: 'Stunning on every phone.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    },
    {
      title: 'Flexible Downloads',
      desc: 'Full-res or preview, your call.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-heading">Everything your clients need. <span className="text-muted">Nothing you have to manage.</span></h2>

        {/* Tier 1: Hero feature - Smart Gallery Search */}
        <div className="feature-hero">
          <div className="feature-hero-content">
            <span className="feature-ai-tag">AI-Powered</span>
            <h3 className="feature-hero-title">Smart Gallery Search</h3>
            <p className="feature-hero-desc">
              Your clients find their photos by face, moment, or name in seconds. No scrolling through hundreds of photos. Just search.
            </p>
            <div className="feature-hero-examples">
              <span className="example-query">&ldquo;Priya&apos;s family&rdquo;</span>
              <span className="example-query">&ldquo;ceremony moments&rdquo;</span>
              <span className="example-query">&ldquo;first dance&rdquo;</span>
            </div>
          </div>
          <div className="feature-hero-visual">
            <div className="search-demo">
              <div className="search-demo-bar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span className="search-demo-query">Priya&apos;s family</span>
                <span className="search-demo-cursor">|</span>
              </div>
              <div className="search-demo-results">
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80" alt="" /></div>
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&q=80" alt="" /></div>
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80" alt="" /></div>
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&q=80" alt="" /></div>
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=400&q=80" alt="" /></div>
                <div className="demo-photo"><img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80" alt="" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Mid-size features - Branded Gallery + QR Code */}
        <div className="feature-tier-2">
          <div className="feature-mid">
            <div className="feature-mid-visual">
              <div className="branded-mock">
                <div className="branded-mock-header">
                  <div className="branded-mock-logo">VE GALLERY</div>
                </div>
                <div className="branded-mock-grid">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=300&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=300&q=80" alt="" />
                </div>
              </div>
            </div>
            <div className="feature-mid-content">
              <h3 className="feature-mid-title">Branded Client Gallery</h3>
              <p className="feature-mid-desc">Your name. Your logo. On every screen your clients share.</p>
            </div>
          </div>

          <div className="feature-mid">
            <div className="feature-mid-visual">
              <div className="qr-mock">
                <div className="qr-code">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https%3A%2F%2Fve.gallery%2Fsara-john&margin=0" alt="QR code" />
                </div>
              </div>
            </div>
            <div className="feature-mid-content">
              <h3 className="feature-mid-title">QR Code Delivery</h3>
              <p className="feature-mid-desc">Print it on the invite. Display it at the venue. Guests scan and they&apos;re in.</p>
            </div>
          </div>
        </div>

        {/* Tier 3: Compact grid */}
        <div className="feature-tier-3">
          {tier3.map((f, i) => (
            <div className="feature-compact" key={i}>
              <div className="feature-compact-icon">{f.icon}</div>
              <div className="feature-compact-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
