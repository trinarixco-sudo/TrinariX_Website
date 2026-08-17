import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import products from '../data/products';
import team from '../data/team';

function useCountUp(target, trigger) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let val = 0;
    const step = Math.max(target / 24, 0.2);
    const id = setInterval(() => {
      val += step;
      if (val >= target) {
        val = target;
        clearInterval(id);
      }
      setValue(Math.round(val));
    }, 40);
    return () => clearInterval(id);
  }, [trigger, target]);
  return value;
}

function ProductShowcase() {
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

  const categories = useCountUp(products.length, animated);
  const founders = useCountUp(team.length, animated);

  return (
    <div className="hero-visual reveal in-view" ref={ref}>
      <div className="hero-shape" aria-hidden="true"></div>
      <div className="mockup-card">
        <div className="mockup-header">
          <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
          <span className="mockup-title">Trinarix — Experience Kit</span>
        </div>
        <div className="mockup-body">
          <div className="mockup-stats" style={{ marginBottom: 20 }}>
            <div className="stat-tile"><span className="stat-num">{categories}</span><span className="stat-label">Formats in concept</span></div>
            <div className="stat-tile stat-tile-amber"><span className="stat-num">{founders}</span><span className="stat-label">Founders</span></div>
            <div className="stat-tile"><span className="stat-num">1</span><span className="stat-label">University home</span></div>
          </div>

          <div className="mockup-list">
            <div className="mockup-row"><Icon name="gift" className="icon-sm accent-blue" /><span>Wedding entertainment games</span><span className="tag tag-amber">Concept</span></div>
            <div className="mockup-row"><Icon name="briefcase" className="icon-sm accent-blue" /><span>Corporate games & activities</span><span className="tag tag-amber">Concept</span></div>
            <div className="mockup-row"><Icon name="dice" className="icon-sm accent-blue" /><span>Dice-based games</span><span className="tag tag-amber">Concept</span></div>
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
            <p className="badge"><Icon name="dice" size={15} /> Student Startup · RV University</p>
            <h1>Games and experiences people actually want to <span className="highlight">play.</span></h1>
            <p className="hero-sub">Trinarix designs customizable, modular game experiences — for weddings, corporate events, festivals and everyday play — built by a student team that takes ideas from concept to a working product.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">Explore our products <Icon name="arrow-right" className="icon-sm" /></Link>
              <Link to="/team" className="btn btn-secondary">Meet the team</Link>
            </div>
            <div className="trust-row">
              <span>RV University · CIEn</span><span className="dot-sep">·</span>
              <span>Built by student engineers</span><span className="dot-sep">·</span>
              <span>Concept to prototype</span>
            </div>
          </div>
          <ProductShowcase />
        </div>
      </section>

      {/* WHAT IS TRINARIX */}
      <section className="section">
        <div className="container">
          <SectionHead index="01" kicker="What is Trinarix" title="Not just a gaming company." />
          <Reveal as="p" className="lead">Trinarix is a games, experiences and product-innovation startup developing customizable, modular and engaging physical game experiences for consumers, events and organizations.</Reveal>
          <Reveal className="card-grid four">
            <div className="feature-card"><Icon name="dice" className="accent-blue" /><h3>Games</h3><p>Board games, dice games and activity kits designed for real replayability.</p></div>
            <div className="feature-card"><Icon name="calendar" className="accent-blue" /><h3>Experiences</h3><p>Live, in-person formats built for weddings, festivals, corporate events and more.</p></div>
            <div className="feature-card"><Icon name="box" className="accent-blue" /><h3>Product innovation</h3><p>Taking a game concept through prototyping into a repeatable physical product.</p></div>
            <div className="feature-card"><Icon name="spark" className="accent-blue" /><h3>Entrepreneurship</h3><p>Built as a startup from day one, not a one-off class project.</p></div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE CREATE */}
      <section className="section white">
        <div className="container">
          <SectionHead index="02" kicker="What we create" title="Formats designed for the people playing them." />
          <Reveal as="p" className="lead">A modular set of game and experience formats — customized for the occasion rather than sold as a one-size-fits-all product.</Reveal>
          <Reveal className="card-grid three">
            {products.slice(0, 3).map((p) => (
              <div className="solution-card" key={p.title}>
                <Icon name={p.icon} className="accent-blue" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </Reveal>
          <Reveal as="div" style={{ marginTop: 24 }}>
            <Link to="/products" className="btn btn-secondary">See all formats <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="section tint">
        <div className="container">
          <SectionHead index="03" kicker="How we build" title="From idea to a working product." />
          <Reveal className="pipeline">
            <span>Idea</span><Icon name="arrow-right" className="icon-sm" />
            <span>Research</span><Icon name="arrow-right" className="icon-sm" />
            <span>Prototype</span><Icon name="arrow-right" className="icon-sm" />
            <span>Product</span><Icon name="arrow-right" className="icon-sm" />
            <span>Market</span>
          </Reveal>
          <Reveal className="card-grid four">
            <div className="step-card"><Icon name="bulb" className="accent-blue" /><span className="step-num">01</span><h3>Idea</h3><p>Start from a real occasion, audience or gap — not a generic format.</p></div>
            <div className="step-card"><Icon name="flask" className="accent-blue" /><span className="step-num">02</span><h3>Research</h3><p>Look at what already exists and where it falls short.</p></div>
            <div className="step-card"><Icon name="puzzle" className="accent-blue" /><span className="step-num">03</span><h3>Prototype</h3><p>Build a physical, playable version and test it with real groups.</p></div>
            <div className="step-card"><Icon name="box" className="accent-blue" /><span className="step-num">04</span><h3>Product</h3><p>Refine it into something repeatable, customizable and ready to deliver.</p></div>
          </Reveal>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section white">
        <div className="container">
          <SectionHead index="04" kicker="The team" title="Three founders, three different strengths." />
          <Reveal className="card-grid three">
            {team.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
              </div>
            ))}
          </Reveal>
          <Reveal as="div" style={{ marginTop: 24 }}>
            <Link to="/team" className="btn btn-secondary">Meet the full team <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ACHIEVEMENTS (dark) */}
      <section className="section dark">
        <div className="container">
          <SectionHead index="05" kicker="Recognition" title="Where we've shown up so far." dark />
          <Reveal className="card-grid three">
            <div className="dark-card"><Icon name="landmark" className="accent-on-dark" /><h3>RV University CIEn</h3><p>Connected with the university's Centre for Innovation &amp; Entrepreneurship.</p></div>
            <div className="dark-card"><Icon name="target" className="accent-on-dark" /><h3>IEEE APSCON 2026</h3><p>Selected for the MYOSA 4.0 student competition, live demonstration track.</p></div>
            <div className="dark-card"><Icon name="trophy" className="accent-on-dark" /><h3>Founder track record</h3><p>Certifications, awards and hackathon results across the founding team.</p></div>
          </Reveal>
          <Reveal as="div" style={{ marginTop: 24 }}>
            <Link to="/achievements" className="btn btn-secondary">See all achievements <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Planning an event or want to collaborate?</h2>
              <p>Reach out about a wedding, corporate event, festival, or a product partnership.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Start a conversation <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
