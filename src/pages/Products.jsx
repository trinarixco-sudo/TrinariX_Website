import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import products from '../data/products';

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Products</p>
          <h1>What we're building</h1>
          <p className="page-hero-sub">Customizable, modular game experiences — not a fixed catalogue, but a set of formats we design and adapt for the people playing them.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="card-grid three">
            {products.map((p) => (
              <div className="solution-card" key={p.title}>
                <Icon name={p.icon} className="accent-blue" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="tag">Concept</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="—" kicker="How we build" title="From idea to a working product." />
          <Reveal className="process-strip">
            <div className="process-step"><span>01</span><h4>Idea &amp; research</h4><p>Start from a real occasion or audience, not a generic game format.</p></div>
            <div className="process-step"><span>02</span><h4>Prototype</h4><p>Build a physical, playable version quickly and test it with real groups.</p></div>
            <div className="process-step"><span>03</span><h4>Product</h4><p>Refine the format, materials and rules into something repeatable.</p></div>
            <div className="process-step"><span>04</span><h4>Market</h4><p>Package and deliver it for the specific event, brand or audience.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Have an event or product idea in mind?</h2>
              <p>We design and customize game experiences for weddings, corporate events, festivals and more.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in touch <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
