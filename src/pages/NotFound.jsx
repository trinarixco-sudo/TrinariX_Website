import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <p className="code">404</p>
        <h1>This page doesn't exist.</h1>
        <p>The page you're looking for may have moved or never existed.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">Back to home <Icon name="arrow-right" className="icon-sm" /></Link>
          <Link to="/contact" className="btn btn-secondary">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
