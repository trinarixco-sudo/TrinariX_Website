import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import resources from '../data/resources';

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Resources</p>
          <h1>Resources</h1>
          <p className="page-hero-sub">A growing library of publications, technical reports, documentation and presentations from the Trinarix team.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="card-grid two">
            {resources.map((r) => (
              <div className="resource-card" key={r.key}>
                <Icon name={r.icon} className="accent-blue" />
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                {r.items.length === 0 ? (
                  <span className="empty-tag">Coming soon</span>
                ) : (
                  <ul className="feature-list">
                    {r.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
