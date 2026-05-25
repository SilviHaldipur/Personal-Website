/* global React */
const { useState, useEffect } = React;

/* ============================================================
   Shared components — silvi.haldipur.com
   ============================================================ */

function Nav({ active, onNavigate }) {
  const items = [
    ['home', '01', 'Home'],
    ['about', '02', 'About'],
    ['work', '03', 'Work'],
    ['perspectives', '04', 'Perspectives'],
    ['contact', '05', 'Contact'],
  ];
  return (
    <header className="sh-nav" role="banner">
      <a
        href="#home"
        className="sh-wordmark"
        onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
      >
        Silvi Haldipur
      </a>
      <nav aria-label="Primary">
        <ul className="sh-nav-items">
          {items.map(([key, num, label]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={`sh-nav-item ${active === key ? 'is-active' : ''}`}
                aria-current={active === key ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); onNavigate(key); }}
              >
                <span className="sh-nav-num" aria-hidden="true">{num}</span>
                <span className="sh-nav-label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="sh-footer">
      <div className="sh-footer-grid">
        <div className="sh-footer-mark">
          <div className="sh-wordmark sh-footer-wordmark">Silvi Haldipur</div>
          <div className="sh-footer-tag">Commercial executive. Life sciences and consumer health.</div>
          <div className="sh-footer-tag sh-footer-tag--muted">Greater Philadelphia</div>
        </div>
        <div>
          <div className="meta sh-footer-h">Sections</div>
          <ul className="sh-footer-list">
            {[
              ['home', '01', 'Home'],
              ['about', '02', 'About'],
              ['work', '03', 'Work'],
              ['perspectives', '04', 'Perspectives'],
              ['contact', '05', 'Contact'],
            ].map(([k, n, l]) => (
              <li key={k}>
                <a href={`#${k}`} onClick={(e) => { e.preventDefault(); onNavigate(k); }}>
                  <span className="sh-footer-num">{n}</span> {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="meta sh-footer-h">Contact</div>
          <ul className="sh-footer-list">
            <li><a href="mailto:silvi@haldipur.com">silvi@haldipur.com</a></li>
            <li>
              <a href="https://linkedin.com/in/silvihaldipur" target="_blank" rel="noreferrer">
                LinkedIn <span className="sh-ext">↗</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                Speaking inquiries
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sh-footer-base">
        <div className="meta sh-footer-copy">© 2026 Silvi Haldipur</div>
      </div>
    </footer>
  );
}

function PageShell({ paper, children }) {
  return <main id="main" className={paper ? 'sh-page paper' : 'sh-page'}>{children}</main>;
}

function SectionLabel({ num, children }) {
  return (
    <h2 className="sh-section-label">
      <span className="sh-section-num">{num}</span>
      <span className="sh-section-name">{children}</span>
    </h2>
  );
}

/* ---------- Hero ---------- */
function HeroPortrait({ portraitSrc }) {
  return (
    <section className="sh-hero">
      <div className="sh-hero-text">
        <div className="meta sh-hero-tag">Commercial executive · Life sciences and consumer health</div>
        <h1 className="hero-statement sh-hero-statement">
          An instinct for what comes next in pharma commercial, and the rigor to <em className="sh-hero-accent">make it real</em>.
        </h1>
        <p className="sh-hero-sub">
          Twenty years building the capabilities the industry hasn’t yet named. The work sits at the intersection of systems thinking, human-centered design, and organizational development, and produces commercial organizations that are smarter, faster, and more human.
        </p>
        <div className="sh-hero-ctas">
          <PrimaryCTA onClick={() => window.__sh_navigate && window.__sh_navigate('perspectives')}>
            Read perspectives
          </PrimaryCTA>
          <SecondaryCTA onClick={() => window.__sh_navigate && window.__sh_navigate('contact')}>
            Get in touch
          </SecondaryCTA>
        </div>
      </div>
      <div className="sh-hero-field">
        <div className="sh-hero-mark" aria-hidden="true">S H</div>
        <div className="sh-hero-portrait">
          <img src={portraitSrc} alt="Silvi Haldipur, commercial executive in life sciences and consumer health." />
        </div>
      </div>
    </section>
  );
}

/* ---------- Three pillars ---------- */
function Pillar({ num, title, children }) {
  return (
    <div className="sh-pillar">
      <div className="meta sh-pillar-num">{num}</div>
      <h3 className="sh-pillar-title">{title}</h3>
      <p className="sh-pillar-body">{children}</p>
    </div>
  );
}

/* ---------- Case hero card (Work page 2x2 grid) ---------- */
function CaseHeroCard({ num, slug, title, headline, metric, metricLabel, theme, isOpen, onOpen }) {
  return (
    <button
      type="button"
      className={`sh-casehero ${isOpen ? 'is-open' : ''}`}
      onClick={() => onOpen && onOpen(slug)}
      aria-expanded={isOpen}
    >
      <div className="sh-casehero-top">
        <span className="sh-casehero-num">Case {num}</span>
        <span className="sh-casehero-theme">{theme}</span>
      </div>
      <h3 className="sh-casehero-title">{title}</h3>
      <p className="sh-casehero-headline">{headline}</p>
      <div className="sh-casehero-bottom">
        <div className="sh-casehero-metric">
          <div className="sh-casehero-metric-n">{metric}</div>
          <div className="sh-casehero-metric-l">{metricLabel}</div>
        </div>
        <span className="sh-casehero-cta">
          Read the case <span className="sh-casehero-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );
}

/* ---------- Case card (home list) ---------- */
function CaseCard({ num, title, theme, tenure, summary, onOpen }) {
  return (
    <a
      href="#"
      className="sh-case"
      onClick={(e) => { e.preventDefault(); onOpen && onOpen(); }}
    >
      <div className="sh-case-row">
        <div className="sh-case-num meta">Case {num}</div>
        <div className="sh-case-body">
          <h3 className="sh-case-title">{title}</h3>
          <div className="sh-case-meta">
            <span className="meta">{theme}</span>
            <span className="meta">·</span>
            <span className="meta">{tenure}</span>
          </div>
          <p className="sh-case-summary">{summary}</p>
        </div>
        <div className="sh-case-readmore-col">
          <span className="sh-case-readmore">Read the case ↗</span>
        </div>
      </div>
    </a>
  );
}

/* ---------- Essay card (Perspectives Writing section) ---------- */
function EssayCard({ title, url }) {
  return (
    <article className="sh-essay">
      <a
        className="sh-essay-link-block"
        href={url || '#'}
        target="_blank"
        rel="noreferrer noopener"
      >
        <h3 className="sh-essay-title">{title}</h3>
        <span className="sh-essay-link">Read on LinkedIn <span className="sh-ext" aria-hidden="true">↗</span></span>
      </a>
    </article>
  );
}

/* ---------- Logo wall ---------- */
function LogoWall({ items, tone }) {
  const cls = tone === 'paper' ? 'on-paper' : tone === 'ink' ? 'on-ink' : 'on-navy';
  return (
    <div className={`sh-logowall ${cls}`}>
      {items.map((name) => (
        <div className="sh-logo" key={name}>{name}</div>
      ))}
    </div>
  );
}

/* ---------- Keynote pull-quote ---------- */
function Keynote({ onMore }) {
  return (
    <section className="sh-keynote">
      <div className="meta sh-keynote-kicker">The keynote</div>
      <blockquote className="sh-keynote-quote">
        “How many of you have a patient-centric mission? How many of you are compensated for the quality of the experience?”
      </blockquote>
      <div className="sh-keynote-meta">
        <span className="sh-keynote-title"><em>You are not broken, the system is.</em></span>
        <span className="meta sh-keynote-where">2026 PanAgora Pharma CX Summit</span>
      </div>
      <a
        className="sh-keynote-link"
        href="#perspectives"
        onClick={(e) => { e.preventDefault(); onMore && onMore(); }}
      >
        Read the keynote summary
      </a>
    </section>
  );
}

/* ---------- Answer-lead band (Home: "Who she is"; Perspectives: "The argument") ---------- */
function AnswerLead({ label, children }) {
  return (
    <div className="sh-answer-lead">
      <div className="sh-answer-lead-label-col">
        <div className="sh-answer-lead-label">{label}</div>
      </div>
      <div className="sh-answer-lead-body">{children}</div>
    </div>
  );
}

/* ---------- Perspective link (Home: Featured perspectives list) ---------- */
function PerspectiveLink({ title, url }) {
  return (
    <a
      className="sh-perspective"
      href={url || '#'}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="sh-perspective-title">{title}</span>
      <span className="sh-perspective-ext" aria-hidden="true">↗</span>
    </a>
  );
}

/* ---------- CTA components ---------- */
function PrimaryCTA({ href, onClick, children }) {
  return (
    <a
      href={href || '#'}
      className="sh-cta sh-cta--primary"
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick(e); } }}
    >
      {children} <span className="sh-cta-arrow" aria-hidden="true">→</span>
    </a>
  );
}
function SecondaryCTA({ href, onClick, children }) {
  return (
    <a
      href={href || '#'}
      className="sh-cta sh-cta--secondary"
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick(e); } }}
    >
      {children}
    </a>
  );
}

/* ---------- Meta row (case detail) ---------- */
function MetaRow({ items }) {
  return (
    <div className="sh-metarow">
      {items.map(([k, v], i) => (
        <div className="sh-metarow-item" key={i}>
          <div className="meta">{k}</div>
          <div className="sh-metarow-v">{v}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Nav, Footer, PageShell, SectionLabel,
  HeroPortrait, Pillar,
  CaseCard, CaseHeroCard, EssayCard, LogoWall, Keynote, MetaRow,
  AnswerLead, PerspectiveLink, PrimaryCTA, SecondaryCTA,
});
