import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const topics = ['Research Collaboration', 'Technology Partnership', 'Business Enquiry', 'Investment', 'Project Collaboration', 'Media', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: '', message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.org || 'N/A'}\n\n${form.message}`;
    const mailto = `mailto:hello@trinarix.com?subject=${encodeURIComponent('[Trinarix] ' + (form.subject || 'Enquiry'))}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Contact</p>
          <h1>Let's build something meaningful.</h1>
          <p className="page-hero-sub">Reach out for research collaboration, technology partnerships or general enquiries.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" required value={form.name} onChange={update('name')} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" required value={form.email} onChange={update('email')} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="org">Organisation</label>
                  <input type="text" id="org" value={form.org} onChange={update('org')} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" required value={form.subject} onChange={update('subject')}>
                    <option value="">What can we help you with?</option>
                    {topics.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" rows="5" required value={form.message} onChange={update('message')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Start a conversation <Icon name="arrow-right" className="icon-sm" /></button>
              <p className="form-note">This opens a message in your email client addressed to us — nothing is sent automatically.</p>
            </form>

            <div>
              <div className="contact-info-card">
                <h3>Reach us directly</h3>
                <a href="mailto:hello@trinarix.com"><Icon name="mail" className="icon-sm" /> hello@trinarix.com</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" className="icon-sm" /> LinkedIn</a>
                <a href="https://github.com/MehulkumarRVU/TrinariX_Website" target="_blank" rel="noopener noreferrer"><Icon name="github" className="icon-sm" /> GitHub</a>
              </div>
              <div className="contact-info-card">
                <h3>Currently open to</h3>
                <div className="contact-topics">
                  {topics.slice(0, 5).map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
