import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const links = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/team', label: 'Team' },
  { to: '/achievements', label: 'Achievements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Trinarix" className="logo-img" />
        </NavLink>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Get in touch
          </NavLink>
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
