export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="#" className="nav-logo">
              <img src="https://us.images.ve.ai/public/dashboard/image.png" alt="Ve Gallery" className="logo-icon" />
            </a>
            <p className="footer-tagline">Ve Gallery</p>
          </div>
          <div className="footer-right">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ve Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
