import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import solutions from '../data/solutions';
import NotFound from './NotFound';

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) return <NotFound />;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/solutions" className="back-link"><Icon name="arrow-left" className="icon-sm" /> All solutions</Link>
          <p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/solutions">Solutions</Link> / {solution.title}</p>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Icon name={solution.icon} className="accent-blue" size={34} /> {solution.title}
          </h1>
          <p className="page-hero-sub">{solution.tagline}</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="detail-grid">
            <div>
              <h2>Overview</h2>
              <p>{solution.description}</p>

              <h2>What it does</h2>
              <ul className="feature-list">
                {solution.highlights.map((h) => (
                  <li key={h}><Icon name="check" className="icon-sm" /> {h}</li>
                ))}
              </ul>

              <h2>Frequently asked</h2>
              <div>
                {solution.faqs.map((f) => (
                  <div className="faq-item" key={f.q}>
                    <h4>{f.q}</h4>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="side-card">
                <h4>Ideal for</h4>
                <p>{solution.idealFor}</p>
              </div>
              <div className="side-card">
                <h4>Status</h4>
                <p>Research &amp; prototype stage</p>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Talk to us about this <Icon name="arrow-right" className="icon-sm" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
