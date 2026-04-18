export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload and organise',
      desc: 'Import your edited photos, organise them into albums by moment (ceremony, reception, details) and set your access rules. Done in minutes, not hours.',
      img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80',
    },
    {
      num: '02',
      title: 'Share one link or one QR code',
      desc: 'Send the couple their gallery link. Print a QR code for the venue or the wedding invite. Guests scan and access instantly. No app download, no account creation.',
      img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    },
    {
      num: '03',
      title: 'Clients find their photos and remember you forever',
      desc: 'Smart Gallery Search surfaces every photo of every person in seconds. Downloads are one tap. And your brand is on every screen they share it from.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    },
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-heading">Set up once. <span className="text-muted">Deliver every time.</span></h2>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card has-bg" key={i}>
              <div className="step-card-bg">
                <img src={step.img} alt="" />
                <div className="step-card-bg-overlay"></div>
              </div>
              <div className="step-card-content">
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
