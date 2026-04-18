export default function Features() {
  const leadFeature = {
    title: 'Smart Gallery Search',
    desc: 'Your clients find their photos by face, moment, or name in seconds. No scrolling through hundreds of photos. Just search.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  };

  const features = [
    {
      title: 'Branded Client Gallery',
      desc: 'Your name, your logo, on every screen your clients share.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
    },
    {
      title: 'Privacy & Access Control',
      desc: 'One link. Two access levels. Couple sees everything, guests see what you choose.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    },
    {
      title: 'QR Code Delivery',
      desc: 'Print it on the invite. Display it at the venue. Guests scan and they\u2019re in.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="4" height="4" rx="0.5"/></svg>,
    },
    {
      title: 'Mobile-First Experience',
      desc: 'Looks stunning on the phone your clients will actually use.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    },
    {
      title: 'Flexible Downloads',
      desc: 'Full-res for the couple. Previews for family. Nothing for anyone who hasn\u2019t paid.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    },
    {
      title: 'Organised Albums',
      desc: 'Ceremony. Reception. Details. Every moment where it belongs.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>,
    },
    {
      title: 'Family Sharing',
      desc: 'A separate view for relatives, without exposing the couple\u2019s full gallery.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-heading">Everything your clients need. <span className="text-muted">Nothing you have to manage.</span></h2>

        <div className="features-grid">
          <div className="feature-card lead-card">
            <div className="feature-card-inner">
              <div className="feature-icon">{leadFeature.icon}</div>
              <span className="feature-ai-tag">AI-Powered</span>
              <h3 className="feature-title">{leadFeature.title}</h3>
              <p className="feature-desc">{leadFeature.desc}</p>
            </div>
          </div>

          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card-inner">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
