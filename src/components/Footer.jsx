import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Trinarix" className="logo-img" />
          </Link>
          <p>Games, experiences and product<br />innovation. RV University.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/team">Team</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/in/trinarix-1b290942a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/MehulkumarRVU/TrinariX_Website" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:trinarix.co@gmail.com">Email</a>
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
        <p>Trinarix is a student-led startup connected with RV University's Centre for Innovation &amp; Entrepreneurship. Unless stated otherwise, content on this site describes concepts and prototypes in development rather than finished, market-ready products.</p>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Trinarix. All rights reserved.</p>
      </div>
    </footer>
  );
}
