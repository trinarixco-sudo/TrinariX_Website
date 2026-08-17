import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import solutions from '../data/solutions';

function useCountUp(target, trigger, suffix = '') {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let val = 0;
    const step = Math.max(target / 40, 0.5);
    const id = setInterval(() => {
      val += step;
      if (val >= target) {
        val = target;
        clearInterval(id);
      }
      setValue(Number.isInteger(target) ? Math.round(val) : Number(val.toFixed(1)));
    }, 30);
    return () => clearInterval(id);
  }, [trigger, target]);
  return `${value}${suffix}`;
}

function Mockup() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const threats = useCountUp(24, animated);
  const alerts = useCountUp(8, animated);
  const uptime = useCountUp(96, animated, '.4%');

  return (
    <div className="hero-visual reveal in-view" ref={ref}>
      <div className="hero-shape" aria-hidden="true"></div>
      <div className="mockup-card">
        <div className="mockup-header">
          <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
          <span className="mockup-title">Trinarix — Security Intelligence</span>
        </div>
        <div className="mockup-body">
          <div className="threat-level">
            <span>Threat level</span>
            <div className="threat-bar"><div className="threat-bar-fill" style={{ width: animated ? '42%' : '0%' }}></div></div>
            <span className="threat-pct">{animated ? '42%' : '0%'}</span>
          </div>
          <span className="status-badge">● Moderate risk</span>

          <div className="mockup-stats">
            <div className="stat-tile"><span className="stat-num">{threats}</span><span className="stat-label">Threats flagged</span></div>
            <div className="stat-tile stat-tile-amber"><span className="stat-num">{alerts}</span><span className="stat-label">Active alerts</span></div>
            <div className="stat-tile"><span className="stat-num">{uptime}</span><span className="stat-label">Systems online</span></div>
          </div>

          <div className="mockup-list">
            <div className="mockup-row"><Icon name="radar" className="icon-sm accent-blue" /><span>Unusual login pattern — Node 14</span><span className="tag tag-amber">Reviewing</span></div>
            <div className="mockup-row"><Icon name="shield" className="icon-sm accent-success" /><span>Firewall rules synced</span><span className="tag tag-success">Resolved</span></div>
            <div className="mockup-row"><Icon name="eye" className="icon-sm accent-blue" /><span>Anomaly explained: traffic spike, Node 7</span><span className="tag">Explained</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy reveal in-view">
            <p className="badge"><Icon name="shield" size={15} /> Deep tech · AI + Cybersecurity</p>
            <h1>Security intelligence that <span className="highlight">explains itself.</span></h1>
            <p className="hero-sub">Trinarix builds AI-driven detection and analysis tools that tell security teams not just <em>what</em> happened, but <em>why</em> — so decisions can be trusted, not just automated.</p>
            <div className="hero-actions">
              <Link to="/solutions" className="btn btn-primary">Explore the platform <Icon name="arrow-right" className="icon-sm" /></Link>
              <Link to="/about" className="btn btn-secondary">About Trinarix</Link>
            </div>
            <div className="trust-row">
              <span>Research-driven</span><span className="dot-sep">·</span>
              <span>Explainable by design</span><span className="dot-sep">·</span>
              <span>Built for real infrastructure</span>
            </div>
          </div>
          <Mockup />
        </div>
      </section>

      {/* WHAT IS TRINARIX */}
      <section className="section">
        <div className="container">
          <SectionHead index="01" kicker="What is Trinarix" title="Engineering the future of intelligent systems." />
          <Reveal as="p" className="lead">Trinarix is an innovation-driven technology initiative focused on developing intelligent, secure and scalable solutions for emerging digital challenges.</Reveal>
          <Reveal className="card-grid four">
            <div className="feature-card"><Icon name="cpu" className="accent-blue" /><h3>AI</h3><p>Intelligent systems capable of analysing complex data and supporting better decisions.</p></div>
            <div className="feature-card"><Icon name="shield" className="accent-blue" /><h3>Cybersecurity</h3><p>Security-first architectures designed to protect digital systems and sensitive information.</p></div>
            <div className="feature-card"><Icon name="gear" className="accent-blue" /><h3>Automation</h3><p>Reducing manual processes through intelligent automation.</p></div>
            <div className="feature-card"><Icon name="spark" className="accent-blue" /><h3>Innovation</h3><p>Transforming research concepts into practical technology.</p></div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section white">
        <div className="container">
          <SectionHead index="02" kicker="The problem" title="Digital systems are becoming more connected, more complex, and more vulnerable." />
          <Reveal className="flow-chain">
            <span>More connected</span><Icon name="arrow-right" className="icon-sm" />
            <span>More complex</span><Icon name="arrow-right" className="icon-sm" />
            <span>More data-driven</span><Icon name="arrow-right" className="icon-sm" />
            <span>More vulnerable</span>
          </Reveal>
          <Reveal className="card-grid two" as="div">
            <ul className="check-list">
              <li>Increasing cyber threats</li>
              <li>Complex digital infrastructure</li>
              <li>Lack of explainability in automated decisions</li>
            </ul>
            <ul className="check-list">
              <li>Fragmented security systems</li>
              <li>Increasing operational complexity</li>
              <li>Difficulty converting data into actionable intelligence</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section tint">
        <div className="container">
          <SectionHead index="03" kicker="Our approach" title="From data to decisive action." />
          <Reveal className="pipeline">
            <span>Data</span><Icon name="arrow-right" className="icon-sm" />
            <span>Intelligence</span><Icon name="arrow-right" className="icon-sm" />
            <span>Analysis</span><Icon name="arrow-right" className="icon-sm" />
            <span>Decision</span><Icon name="arrow-right" className="icon-sm" />
            <span>Action</span>
          </Reveal>
          <Reveal className="card-grid four">
            <div className="step-card"><Icon name="radar" className="accent-blue" /><span className="step-num">01</span><h3>Detect</h3><p>Identify threats, anomalies and risks.</p></div>
            <div className="step-card"><Icon name="bulb" className="accent-blue" /><span className="step-num">02</span><h3>Understand</h3><p>Analyse data and determine what is happening.</p></div>
            <div className="step-card"><Icon name="doc" className="accent-blue" /><span className="step-num">03</span><h3>Explain</h3><p>Provide interpretable reasoning behind system decisions.</p></div>
            <div className="step-card"><Icon name="bolt" className="accent-blue" /><span className="step-num">04</span><h3>Respond</h3><p>Enable faster and more informed action.</p></div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="section white">
        <div className="container">
          <SectionHead index="04" kicker="Solutions" title="The Trinarix Platform" />
          <Reveal as="p" className="lead">A modular platform built around one core idea: intelligence that can be trusted and understood.</Reveal>
          <Reveal className="card-grid three">
            {solutions.slice(0, 3).map((s) => (
              <Link to={`/solutions/${s.slug}`} className="solution-card" key={s.slug}>
                <Icon name={s.icon} className="accent-blue" />
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <span className="card-link">Learn more <Icon name="arrow-right" className="icon-sm" /></span>
              </Link>
            ))}
          </Reveal>
          <Reveal as="div" style={{ marginTop: 24 }}>
            <Link to="/solutions" className="btn btn-secondary">View all solutions <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <SectionHead index="05" kicker="How it works" title="From data to intelligence." />
          <Reveal className="steps-list">
            <div className="step-row"><span className="step-index">01</span><div><h3>Collect</h3><p>Gather relevant system and data inputs.</p></div></div>
            <div className="step-row"><span className="step-index">02</span><div><h3>Process</h3><p>Clean, transform and prepare the data.</p></div></div>
            <div className="step-row"><span className="step-index">03</span><div><h3>Analyse</h3><p>AI/ML models analyse patterns and anomalies.</p></div></div>
            <div className="step-row"><span className="step-index">04</span><div><h3>Explain</h3><p>Generate interpretable insights behind every result.</p></div></div>
            <div className="step-row"><span className="step-index">05</span><div><h3>Act</h3><p>Provide actionable recommendations or trigger a response.</p></div></div>
          </Reveal>
        </div>
      </section>

      {/* RESEARCH PREVIEW */}
      <section className="section tint">
        <div className="container">
          <SectionHead index="06" kicker="Research & innovation" title="Solutions informed by real research." />
          <Reveal className="empty-placeholder">
            <Icon name="doc" className="accent-blue" />
            <h3>Publications in progress</h3>
            <p>Our research papers, technical reports and prototype write-ups will be published as they're completed.</p>
            <div style={{ marginTop: 18 }}>
              <Link to="/research" className="btn btn-secondary btn-sm">Visit Research <Icon name="arrow-right" className="icon-sm" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY TRINARIX (dark) */}
      <section className="section dark">
        <div className="container">
          <SectionHead index="07" kicker="Why Trinarix" title="What sets our approach apart." dark />
          <Reveal className="card-grid three">
            <div className="dark-card"><Icon name="eye" className="accent-amber" /><h3>Explainability</h3><p>We don't just provide predictions — we aim to make system decisions understandable.</p></div>
            <div className="dark-card"><Icon name="shield" className="accent-amber" /><h3>Security by Design</h3><p>Security is incorporated into the architecture rather than added later.</p></div>
            <div className="dark-card"><Icon name="flask" className="accent-amber" /><h3>Research Driven</h3><p>Solutions are informed by current research and experimentation.</p></div>
            <div className="dark-card"><Icon name="layers" className="accent-amber" /><h3>Scalable</h3><p>Designed to evolve from prototype to production.</p></div>
            <div className="dark-card"><Icon name="users" className="accent-amber" /><h3>Human-Centred</h3><p>Technology should support people rather than replace meaningful decision-making.</p></div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Let's build something meaningful.</h2>
              <p>Reach out for research collaboration, technology partnerships or general enquiries.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Start a conversation <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
