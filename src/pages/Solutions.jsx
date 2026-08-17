import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import solutions from '../data/solutions';

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Solutions</p>
          <h1>The Trinarix Platform</h1>
          <p className="page-hero-sub">A modular platform built around one core idea: intelligence that can be trusted and understood.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="card-grid three">
            {solutions.map((s) => (
              <Link to={`/solutions/${s.slug}`} className="solution-card" key={s.slug}>
                <Icon name={s.icon} className="accent-blue" />
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <span className="card-link">View details <Icon name="arrow-right" className="icon-sm" /></span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="—" kicker="How we work" title="From data to intelligence." />
          <Reveal className="process-strip">
            <div className="process-step"><span>01</span><h4>Collect</h4><p>Gather relevant system and data inputs.</p></div>
            <div className="process-step"><span>02</span><h4>Analyse</h4><p>AI/ML models analyse patterns and anomalies.</p></div>
            <div className="process-step"><span>03</span><h4>Explain</h4><p>Generate interpretable insights behind every result.</p></div>
            <div className="process-step"><span>04</span><h4>Act</h4><p>Provide actionable recommendations or trigger a response.</p></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
