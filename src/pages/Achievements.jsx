import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { startupAchievements, founderAchievements } from '../data/achievements';

export default function Achievements() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Achievements</p>
          <h1>Achievements &amp; recognition</h1>
          <p className="page-hero-sub">We only list what's independently confirmed — a few other things are still pending certificates and aren't on the site yet.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead index="01" kicker="Trinarix" title="As a startup." />
          <Reveal className="card-grid two">
            {startupAchievements.map((a) => (
              <div className="info-card" key={a.title}>
                <Icon name={a.icon} className="accent-blue" />
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="02" kicker="Founder track record" title="What the team brings individually." />
          <Reveal className="achievement-list">
            {founderAchievements.map((a) => (
              <div className="achievement-row" key={a.title}>
                <Icon name={a.icon} className="accent-amber" />
                <div>
                  <span className="achievement-person">{a.person}</span>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Want to collaborate or mentor us?</h2>
              <p>We're a young team looking for the right early partners.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in touch <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
