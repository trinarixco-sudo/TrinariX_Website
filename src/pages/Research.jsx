import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import research, { categories } from '../data/research';

export default function Research() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return research.filter((item) => {
      const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Research</p>
          <h1>Research &amp; Innovation</h1>
          <p className="page-hero-sub">Trinarix is built from ongoing research, prototyping and experimentation — not just product marketing. Publications, prototypes and technical reports will appear here as they're completed.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <Reveal className="research-toolbar">
            <div className="filter-tabs">
              {['All', ...categories].map((c) => (
                <button
                  key={c}
                  className={`filter-tab ${activeFilter === c ? 'active' : ''}`}
                  onClick={() => setActiveFilter(c)}
                  type="button"
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="search-box">
              <Icon name="search" className="icon-sm" />
              <input
                type="text"
                placeholder="Search publications..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <Reveal className="empty-placeholder">
              <Icon name="doc" className="accent-blue" />
              <h3>No publications yet</h3>
              <p>
                {research.length === 0
                  ? "We're actively researching and prototyping — nothing has been published yet, but check back soon."
                  : 'No results match your search or filter. Try a different term or category.'}
              </p>
            </Reveal>
          ) : (
            <div className="card-grid three">
              {filtered.map((item) => (
                <div className="research-card" key={item.slug}>
                  <span className="tag tag-amber">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
