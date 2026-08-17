import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / About</p>
          <h1>Building intelligent systems that people can actually trust.</h1>
          <p className="page-hero-sub">The story, mission and values behind Trinarix.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead index="01" kicker="Our story" title="Why Trinarix exists." />
          <Reveal className="about-story">
            <div>
              <div className="about-story-avatar">DK</div>
              <h3>Dharini K H</h3>
              <span className="role">Founder</span>
              <p>Trinarix started from a simple frustration: most AI-driven security tools tell you <em>that</em> something is wrong, but not <em>why</em> — leaving analysts to either blindly trust a black box or ignore it entirely.</p>
            </div>
            <div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-year">Phase 1</span>
                  <h4>Concept developed</h4>
                  <p>Trinarix started as a research initiative exploring explainable AI for security use cases.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Phase 2</span>
                  <h4>Early prototyping</h4>
                  <p>Initial experiments in anomaly detection and reasoning-based explanation began.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Phase 3</span>
                  <h4>Platform design</h4>
                  <p>Architecture work started on a modular platform that can grow from prototype to production.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Now</span>
                  <h4>Building in the open</h4>
                  <p>Documenting research, publishing progress, and looking for the right early collaborators.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="02" kicker="Mission, vision, philosophy" title="What we're working toward." />
          <Reveal className="panel-grid">
            <div className="panel-card">
              <Icon name="target" className="accent-blue" />
              <h3>Mission</h3>
              <p>To build AI-driven security tools that explain their reasoning, not just their conclusions.</p>
            </div>
            <div className="panel-card">
              <Icon name="compass" className="accent-blue" />
              <h3>Vision</h3>
              <p>A future where automated security decisions are transparent enough to be trusted by the people who rely on them.</p>
            </div>
            <div className="panel-card">
              <Icon name="bulb" className="accent-blue" />
              <h3>Philosophy</h3>
              <p>Security and intelligence should be designed together from the start, not bolted on after the fact.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead index="03" kicker="Core values" title="What guides how we build." />
          <Reveal className="card-grid four">
            <div className="feature-card"><Icon name="eye" className="accent-blue" /><h3>Precision</h3><p>Favouring correctness and clarity over impressive-sounding claims.</p></div>
            <div className="feature-card"><Icon name="doc" className="accent-blue" /><h3>Transparency</h3><p>Being upfront about what's built, what's in progress, and what's still a concept.</p></div>
            <div className="feature-card"><Icon name="heart" className="accent-blue" /><h3>Empathy</h3><p>Designing for the analysts and teams who will actually use this, not just the demo.</p></div>
            <div className="feature-card"><Icon name="users" className="accent-blue" /><h3>Partnership</h3><p>Building alongside early collaborators rather than in isolation.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Want to be part of this early?</h2>
              <p>We're looking for research collaborators, technology partners, and early adopters.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in touch <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
