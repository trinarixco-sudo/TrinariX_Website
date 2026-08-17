import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">T</span>
            <span className="logo-word text-white">Trinarix</span>
          </Link>
          <p>Intelligent technology. Secure systems.<br />Real-world impact.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <Link to="/about">About</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/research">Research</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/MehulkumarRVU/TrinariX_Website" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:hello@trinarix.com">Email</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>Trinarix is an early-stage technology initiative. Unless stated otherwise, content on this site describes ongoing research, prototypes and concepts rather than deployed production systems.</p>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Trinarix. All rights reserved.</p>
      </div>
    </footer>
  );
}
