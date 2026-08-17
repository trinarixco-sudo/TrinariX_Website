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
          <h1>Games, experiences and product innovation.</h1>
          <p className="page-hero-sub">Trinarix is a student-led startup connected with RV University's Centre for Innovation &amp; Entrepreneurship (CIEn).</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead index="01" kicker="Our story" title="Why Trinarix exists." />
          <Reveal className="about-story">
            <div>
              <p>Trinarix is centred on games, interactive experiences and customizable physical/game-based products, with the broader goal of creating engaging experiences for individuals, groups, events and organizations.</p>
              <p>The important part of that positioning: Trinarix isn't simply a "gaming company." It's better understood as a games, experiences and product-innovation startup — developing customizable, modular and engaging physical game experiences for consumers, events and organizations.</p>
              <p>The venture is connected with RV University's Centre for Innovation &amp; Entrepreneurship, which places it inside the university's entrepreneurship ecosystem rather than being a one-off classroom project.</p>
            </div>
            <div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-year">Start</span>
                  <h4>A CIEn-connected concept</h4>
                  <p>Trinarix began as an idea within RV University's innovation and entrepreneurship ecosystem.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Formats</span>
                  <h4>Ten experience categories defined</h4>
                  <p>From board games to screen-free interactive experiences — a modular set of formats, not a single product.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Team</span>
                  <h4>Three founders, complementary skills</h4>
                  <p>Technology, product and execution — brought together as a founding team of three.</p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">Now</span>
                  <h4>Building toward real events</h4>
                  <p>Turning concepts into prototypes people can actually play.</p>
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
              <p>To create engaging, screen-free experiences that bring people together — at weddings, offices, festivals and everyday gatherings.</p>
            </div>
            <div className="panel-card">
              <Icon name="compass" className="accent-blue" />
              <h3>Vision</h3>
              <p>A recognizable name for customizable game experiences — built by students, for real events and real people.</p>
            </div>
            <div className="panel-card">
              <Icon name="bulb" className="accent-blue" />
              <h3>Philosophy</h3>
              <p>A game should adapt to the people playing it, the occasion and the space — not the other way around.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <SectionHead index="03" kicker="Core values" title="What guides how we build." />
          <Reveal className="card-grid four">
            <div className="feature-card"><Icon name="spark" className="accent-blue" /><h3>Creativity</h3><p>Starting from an occasion or audience, not a generic game template.</p></div>
            <div className="feature-card"><Icon name="check" className="accent-blue" /><h3>Craft</h3><p>Prototyping and testing formats with real groups before calling them finished.</p></div>
            <div className="feature-card"><Icon name="users" className="accent-blue" /><h3>Community</h3><p>Designing for social interaction — games that work better with more people, not fewer.</p></div>
            <div className="feature-card"><Icon name="box" className="accent-blue" /><h3>Entrepreneurial drive</h3><p>Treating every format as a product, not just a fun idea.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Want to be part of this early?</h2>
              <p>We're looking for early collaborators, mentors and event partners.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/team" className="btn btn-secondary">Meet the team</Link>
              <Link to="/contact" className="btn btn-primary">Get in touch <Icon name="arrow-right" className="icon-sm" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
