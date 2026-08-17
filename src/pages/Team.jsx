import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import team from '../data/team';

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Team</p>
          <h1>The people behind Trinarix</h1>
          <p className="page-hero-sub">Three RV University students, each bringing something different — technology, product, and execution.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="card-grid three" as="div">
            {team.map((member) => (
              <div className="team-detail-card" key={member.id}>
                <div className="avatar avatar-lg">{member.initials}</div>
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <div className="contact-topics" style={{ margin: '14px 0' }}>
                  {member.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <p className="team-bio">{member.bio}</p>
                {member.credentials.length > 0 && (
                  <ul className="feature-list" style={{ marginTop: 16 }}>
                    {member.credentials.map((c) => (
                      <li key={c}><Icon name="check" className="icon-sm accent-success" /> {c}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="—" kicker="Together" title="Idea, technology and execution, in-house." />
          <Reveal className="card-grid three">
            <div className="feature-card">
              <Icon name="cpu" className="accent-blue" />
              <h3>Technology &amp; hardware</h3>
              <p>AI, IoT and embedded systems experience for building the technical side of interactive products.</p>
            </div>
            <div className="feature-card">
              <Icon name="box" className="accent-blue" />
              <h3>Product &amp; software</h3>
              <p>Full-stack and computer vision background for turning a concept into a working, testable product.</p>
            </div>
            <div className="feature-card">
              <Icon name="spark" className="accent-blue" />
              <h3>Innovation &amp; execution</h3>
              <p>Research, entrepreneurship and event-organising experience for getting an idea in front of real people.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Want to work with us?</h2>
              <p>We're open to collaboration, mentorship and early partnerships.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in touch <Icon name="arrow-right" className="icon-sm" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
