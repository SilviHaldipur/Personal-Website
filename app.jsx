/* global React, Nav, Footer, PageShell, SectionLabel, HeroPortrait, Pillar,
            CaseCard, CaseHeroCard, EssayCard, LogoWall, Keynote, MetaRow,
            AnswerLead, PerspectiveLink, PrimaryCTA, SecondaryCTA,
            useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSlider */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Data — v9.1 copy
   ============================================================ */

const EMPLOYERS = [
  // Life sciences and pharma
  'Merck', 'Novo Nordisk', 'GSK', 'Sanofi',
  'Roche', 'Bristol Myers Squibb', 'Regeneron', 'Moderna',
  'Allergan', 'Galderma',
  // Consumer and CPG
  'First Quality',
  // Cross-sector
  'American Express', 'AT&T Wireless', 'Samsung', 'DHL', 'Bloomberg Philanthropies',
];

const LAUNCHES = [
  {
    name: 'Plavix',
    body: 'The first direct-to-consumer launch in pharmaceutical history. A category-defining moment for how prescription medicines reach patients.',
  },
  {
    name: 'Dupixent',
    body: 'Instrumental contributor to the launch of a category-defining biologic in asthma, now one of the top-selling biologics in the world.',
  },
  {
    name: 'Flonase Rx-to-OTC',
    body: 'Disrupted a $4B+ OTC allergy category dominated by oral antihistamines. Achieved #1 OTC market share.',
  },
  {
    name: 'Sotatercept PAH',
    body: 'Reduced time-to-treat by 62.5% through journey-level intervention design.',
  },
  {
    name: 'First Quality ingredient brand strategy',
    body: 'Created the first ingredient brand strategy for a leading private label manufacturer, an industry first in feminine hygiene.',
  },
];

const MODES = [
  {
    num: 'i',
    title: 'New commercial capabilities',
    body:
      'Customer experience installed as a commercial discipline at Merck. Agile and human-centered design embedded into pharma commercial operations across six markets. A consumer segmentation platform built on social listening and behavioral archetypes, commercialized by Experian. Behavioral intelligence with AI at Novo Nordisk.',
  },
  {
    num: 'ii',
    title: 'Launches that defined categories',
    body:
      'First DTC launch in pharma (Plavix). Dupixent in asthma. Flonase Rx-to-OTC delivering #1 OTC market share in a $4B+ category. Sotatercept PAH with time-to-treat cut by 62.5%. First Quality ingredient brand strategy as an industry first.',
  },
  {
    num: 'iii',
    title: 'Operating models built to last',
    body:
      'Merck\u2019s first Center of Co-Creation, still in use. The Global Human Health Digital Accelerator across six priority markets, with digital competencies built into the job descriptions for new commercial hires.',
  },
];

const CASES = [
  {
    num: '01',
    slug: 'co-creation',
    title: 'Building Merck’s first Center of Co-Creation.',
    headline: 'A turnkey service for design research, sprints, and customer co-creation, running on agile cadence inside one of pharma’s largest commercial organizations.',
    metric: '$1B+',
    metricLabel: 'incremental revenue supported',
    theme: 'Building new functions',
    tenure: 'Merck',
    summary:
      'A turnkey service for design research, sprints, and customer co-creation, anchored by a curated panel and a dedicated facility. Built to operate on agile timelines and integrated directly into how brand and franchise teams already worked.',
    sections: [
      {
        h: 'The situation',
        p: 'Merck had insights teams, but no enterprise function dedicated to structured customer co-creation operating on agile cadence. Co-creation work was distributed across brand teams, methods varied widely, and there was no shared infrastructure to convert customer evidence into commercial decisions at the speed agile teams required.',
      },
      {
        h: 'What Silvi and team built',
        p: 'Merck\u2019s first Center of Co-Creation: a turnkey service offering for design research interviews, design sprints, and customer co-creation workshops, anchored by a curated panel of customers and a dedicated co-creation facility. The model was built to operate on agile timelines, facilitated by trained experience design researchers, and integrated directly into how brand and franchise teams already worked.',
      },
      {
        h: 'The outcome',
        p: '100% adoption across mature digital execution teams. 50%+ reduction in time from customer feedback to insight-to-action. Repeat usage across major franchises. Supported $1B+ in incremental revenue across the campaign portfolio. The team\u2019s work also reframed the right problem to solve on several major initiatives, redirecting more than 1,500 hours of work from low-value to high-value paths.',
      },
    ],
    figures: [
      ['100%', 'Adoption across mature digital execution teams'],
      ['50%+', 'Reduction in feedback-to-insight time'],
      ['$1B+', 'Incremental revenue supported'],
      ['1,500+', 'Hours redirected to high-value paths'],
    ],
  },
  {
    num: '02',
    slug: 'sotatercept',
    title: 'Sotatercept PAH launch: collapsing time-to-treat in a rare, life-threatening disease.',
    headline: 'A two-phase intervention model targeting five friction points in the patient journey — coordinated where it was fragmented, fast where it was slow.',
    metric: '62.5%',
    metricLabel: 'reduction in time-to-treat',
    theme: 'Launch excellence',
    tenure: 'Merck',
    summary:
      'A two-phase intervention model targeting five distinct friction points in the patient journey. Coordinated where the existing experience was fragmented; supportive where it was anxious; operationally tight where it was slow.',
    sections: [
      {
        h: 'The situation',
        p: 'A new therapy for pulmonary arterial hypertension, a rare, progressive, life-threatening disease where every week of treatment delay carries real clinical risk. The existing patient journey was fragmented, anxiety-inducing, and operationally inefficient. Five distinct friction points were identified: anxious patients and time-strapped providers during shared decision-making, inefficient enrollment processes causing abandonment, complex coverage approvals taking four-plus weeks, confusing dose coordination and training, and siloed information increasing dropout risk.',
      },
      {
        h: 'What Silvi and team built',
        p: 'A two-phase intervention model targeting each friction point. Phase 1, Shared Decision Making, introduced patient guides, a PAH Navigator support function, and welcome kits to compress prescription acceptance from 12 weeks to 8 to 10. Phase 2, Prescription, Enrollment & Coverage, was the launch priority. Streamlined enrollment forms, a market access portal, dedicated case managers, and field support compressed time from prescription to treatment from four weeks to one and a half.',
      },
      {
        h: 'The outcome',
        p: 'A 62.5% reduction in time-to-treat. A fragmented journey replaced with a coordinated experience where patients felt supported, providers had the tools to prescribe with confidence, and access barriers were removed before they could compound.',
      },
    ],
    figures: [
      ['62.5%', 'Reduction in time-to-treat'],
      ['4 → 1.5 wk', 'Prescription to treatment'],
      ['12 → 8–10 wk', 'Prescription acceptance'],
      ['5', 'Friction points removed'],
    ],
  },
  {
    num: '03',
    slug: 'flonase',
    title: 'Flonase Rx-to-OTC: disrupting a $4B+ category dominated by oral antihistamines.',
    headline: 'A digital-first launch built on consumer truth, with a proprietary social-listening platform that turned signal into commercial decision in real time — later commercialized by Experian.',
    metric: '#1',
    metricLabel: 'OTC allergy market share',
    theme: 'Category disruption',
    tenure: 'GSK',
    summary:
      'A digital-first launch built on the consumer insight that allergy sufferers had resigned themselves to living smaller lives. Authentic content, community, education, and a proprietary social-listening platform that converted signal into commercial decision in real time.',
    sections: [
      {
        h: 'The situation',
        p: 'Launching Flonase as an over-the-counter product in one of the most congested categories in consumer healthcare. Seasonal allergy relief was a $4B+ market dominated by established oral antihistamines. The transition required overcoming category inertia, consumer resistance to the nasal spray delivery method, which carried lower consideration than oral options for reasons of comfort and habit, and the perception challenge of moving from prescription to OTC.',
      },
      {
        h: 'What the launch team built, with Silvi’s contributions',
        p: 'A digital-first launch strategy under the platform “Be Greater Than Your Allergies,” built on the consumer insight that allergy sufferers were not just managing symptoms, they were living smaller lives and had resigned themselves to it. The execution combined authentic content depicting real compromises, community-building around reclamation stories, integrated education on multi-symptom relief, and a proprietary social listening and consumer segmentation platform that translated consumer signals into behavioral archetypes and segments in real time, converting them into commercial decisions at the speed of the launch. The insights platform was later commercialized by Experian.',
      },
      {
        h: 'The outcome',
        p: '#1 market share in the OTC allergy category. A category-defining result for a brand transitioning from Rx to OTC against entrenched oral antihistamines, and a blueprint for Rx-to-OTC transitions in the digital age.',
      },
    ],
    figures: [
      ['#1', 'OTC allergy market share'],
      ['$4B+', 'Category disrupted'],
      ['Experian', 'Commercialized the insights platform'],
    ],
  },
  {
    num: '04',
    slug: 'accelerator',
    title: 'Global Human Health Digital Accelerator: embedding capability across six priority markets.',
    headline: 'A four-pillar Center of Excellence and an end-to-end transformation roadmap, deployed market by market with a baseline assessment of 50+ digital capabilities.',
    metric: 'Six',
    metricLabel: 'priority markets transformed',
    theme: 'Operating model redesign',
    tenure: 'Merck',
    summary:
      'A four-pillar Center of Excellence and an end-to-end transformation roadmap, deployed across six priority markets with a baseline assessment of 50+ digital capabilities and a tiered training program from Foundations through Specialization.',
    sections: [
      {
        h: 'The situation',
        p: 'Merck’s commercial operating model varied across markets, with digital initiatives showing up as bolt-on tactics rather than as embedded business capability. Pockets of innovation existed but did not scale. The organization needed a holistic approach that embedded digital, advanced analytics, agile methods, and experience design into the commercial operating model itself, with governance to sustain it.',
      },
      {
        h: 'What Silvi and team built',
        p: 'The Global Human Health Digital Accelerator, structured around four pillars: governance and knowledge sharing, digital delivery, digital solutions and global alliances, and customer engagement analytics. The approach was codified into an end-to-end transformation roadmap built on learnings from the France digital transformation and deployed across Merck’s six priority markets. An integrated baseline assessment evaluated 50+ digital capabilities across 34 components, giving each market a customized starting point. A playbook of digital transformation resources and a tiered training program embedded the new capabilities at the team and individual level.',
      },
      {
        h: 'The outcome',
        p: 'Digital capabilities embedded into the commercial operating model across six priority markets. New marketing and sales hires onboarded against digital competencies built into the job descriptions themselves. A reusable playbook and a community of practice that scaled the work beyond the original team.',
      },
    ],
    figures: [
      ['6', 'Priority markets'],
      ['50+', 'Digital capabilities assessed'],
      ['34', 'Assessment components'],
      ['4', 'Pillars of the COE'],
    ],
  },
];

const ESSAYS = [
  {
    title: 'Who will be Pharma\u2019s A.G. Lafley?',
    url: 'https://www.linkedin.com/pulse/who-pharmas-ag-lafley-silvi-haldipur-kocse/',
  },
  {
    title: 'Beyond the silo: why 2026 is the year of the pharmaceutical CXO',
    url: 'https://www.linkedin.com/pulse/beyond-silo-why-2026-year-pharmaceutical-cxo-silvi-haldipur-j99ue/',
  },
  {
    title: 'The retention multiplier: why the next phase of pharma growth is persistence-based care design',
    url: 'https://www.linkedin.com/pulse/retention-multiplier-why-next-phase-pharma-growth-design-haldipur-20due/',
  },
  {
    title: 'The war for \u201caccess\u201d is over. The war against operational burden has begun.',
    url: 'https://www.linkedin.com/pulse/war-access-over-against-operational-burden-has-begun-silvi-haldipur-nww9e/',
  },
  {
    title: 'From prescription drug to pharmacy aisle: how Flonase became the #1 nasal allergy spray',
    url: 'https://www.linkedin.com/pulse/from-prescription-drug-pharmacy-aisle-how-flonase-became-haldipur-7aowe/',
  },
  {
    title: 'The four conversations that turn CX teams into business partners after the product launches',
    url: 'https://www.linkedin.com/pulse/three-conversations-turn-cx-teams-business-partners-after-haldipur-efdwf/',
  },
  {
    title: 'The $2M patient portal no one uses: why healthcare CX investments fail',
    url: 'https://www.linkedin.com/pulse/2m-patient-portal-one-uses-why-healthcare-cx-fail-silvi-haldipur-ff3jf/',
  },
  {
    title: 'Beyond the \u201ccreepy\u201d chart note: why n=1 personalization is failing healthcare and how to build an experience engine instead',
    url: 'https://www.linkedin.com/pulse/beyond-creepy-chart-note-why-n1-personalization-failing-haldipur-elvtc/',
  },
  {
    title: 'The experience mirage: an executive guide to spotting real customer experience vs. department theater',
    url: 'https://www.linkedin.com/pulse/experience-mirage-guide-spotting-real-customer-vs-theater-haldipur-qvtde/',
  },
  {
    title: 'Why customer experience is the hardest transformation to achieve in organizations',
    url: 'https://www.linkedin.com/pulse/why-customer-experience-hardest-transformation-achieve-silvi-haldipur-kwfae/',
  },
  {
    title: 'The invisible burden: protecting your transformation agents',
    url: 'https://www.linkedin.com/pulse/invisible-burden-protecting-your-transformation-agents-silvi-haldipur-zojue/',
  },
  {
    title: 'Beyond control: building adaptive workplace cultures',
    url: 'https://www.linkedin.com/pulse/beyond-control-building-adaptive-workplace-cultures-silvi-haldipur-zy9pe/',
  },
  {
    title: 'Strategy as art: why creative minds are our greatest strategic asset',
    url: 'https://www.linkedin.com/pulse/strategy-art-why-creative-minds-our-greatest-asset-silvi-haldipur-uemje/',
  },
  {
    title: 'Transforming lives through exceptional customer experience',
    url: 'https://www.linkedin.com/pulse/transforming-lives-through-exceptional-customer-silvi-haldipur-teeue/',
  },
];

const PRINCIPLES = [
  {
    num: 'i',
    title: 'Capacity',
    body:
      'Transformation is not a failure of vision. It is a failure of capacity. Most organizations have the empathy to start a change but lack the operational hardcoding to sustain it. The mission is bridging the gap between strategic intent and sustainable execution, and capacity is where that bridge gets built or doesn’t.',
  },
  {
    num: 'ii',
    title: 'Thick data',
    body:
      'Strategy is only as good as the behavior it observes. Thin data — surveys, NPS, executive intuition — leads to thin results. Thick behavioral data identifies the specific human friction points, the clogs, that drain a system’s capacity. The targeted investment thesis is simple. Stop funding initiatives that conflict with how people actually behave.',
  },
  {
    num: 'iii',
    title: 'Culture sync',
    body:
      'You cannot scale care through a fractured culture. Employee experience is the ceiling of outcome performance. When culture and process are synchronized, when teams have the bandwidth to thrive, excellence becomes the default output and organizational throughput rises without adding headcount.',
  },
  {
    num: 'iv',
    title: 'Hardcoding',
    body:
      'Reliability is the highest form of empathy. Individual heroism does not scale and creates systemic risk. Hardcoding care into the operating model means aligning technology and process so that the right path for the customer is the easiest path for staff. Operational flow creates the predictability that payers, providers, and patients depend on.',
  },
];

/* ============================================================
   Pages
   ============================================================ */

function Home({ navigate, portraitSrc }) {
  return (
    <PageShell>
      <HeroPortrait portraitSrc={portraitSrc} />

      <section className="sh-section sh-section--narrow" data-screen-label="01 home — who silvi is" data-bleed="deep">
        <div className="sh-bleed-bg" aria-hidden="true"></div>
        <AnswerLead label="Who she is">
          Silvi Haldipur is a commercial executive in life sciences and consumer health with twenty years of experience installing the next commercial capability inside Fortune 500 organizations <em>before consensus</em>, and building the operating discipline to make it last.
        </AnswerLead>
      </section>

      <section className="sh-section" data-screen-label="02 home — launches">
        <SectionLabel num="02">Launches that have defined categories</SectionLabel>
        <p className="sh-section-lede">
          Silvi has contributed to or led category-defining commercial launches across pharma and consumer health: the first direct-to-consumer launch in pharma history, a top-selling biologic, an Rx-to-OTC transition that delivered #1 share in a $4B+ category, a rare-disease launch that cut time-to-treat by 62.5%, and an industry-first ingredient brand strategy.
        </p>
        <div className="sh-credentials">
          {LAUNCHES.map((l) => (
            <div className="sh-credential" key={l.name}>
              <div className="sh-credential-name">{l.name}</div>
              <div className="sh-credential-body">{l.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sh-section" data-screen-label="03 home — what she has built">
        <SectionLabel num="03">What she has built</SectionLabel>
        <p className="sh-pillars-lede">
          Three modes of work, applied consistently across two decades: new commercial capabilities, category-defining launches, and operating models that outlast the build.
        </p>
        <div className="sh-pillars">
          {MODES.map((p) => (
            <Pillar key={p.num} num={p.num} title={p.title}>{p.body}</Pillar>
          ))}
        </div>
      </section>

      <section className="sh-section">
        <SectionLabel num="04">Selected work</SectionLabel>
        <p className="sh-section-lede">
          Four builds. Each one a capability brought into pharma commercial before consensus, designed around customer truth, and still running after the work was done.
        </p>
        <div className="sh-cases">
          {CASES.map((c) => (
            <CaseCard key={c.num} {...c} onOpen={() => navigate('work', c.slug)} />
          ))}
        </div>
      </section>

      <section className="sh-section">
        <SectionLabel num="05">Featured perspectives</SectionLabel>
        <p className="sh-section-lede">
          Silvi writes on the operating layer of pharma commercial, the conditions that determine whether transformation delivers measurable outcomes, and the next operating model the industry will need.
        </p>
        <div className="sh-perspectives">
          {ESSAYS.slice(0, 10).map((e) => (
            <PerspectiveLink key={e.title} title={e.title} url={e.url} />
          ))}
        </div>
      </section>

      <section className="sh-section" data-bleed="rose">
        <div className="sh-bleed-bg" aria-hidden="true"></div>
        <Keynote onMore={() => navigate('perspectives')} />
      </section>

      <section className="sh-section">
        <SectionLabel num="07">Built and delivered for</SectionLabel>
        <p className="sh-section-lede">
          Silvi has built commercial capabilities, led launches, and redesigned operating models for sixteen organizations across life sciences, consumer health, financial services, telecommunications, philanthropy, logistics, and consumer electronics.
        </p>
        <LogoWall items={EMPLOYERS} tone="ink" />
      </section>
    </PageShell>
  );
}

/* ============================================================ */

function About({ navigate }) {
  return (
    <PageShell paper>
      <article className="sh-article">
        <div className="meta sh-article-kicker">02 · About</div>
        <h1 className="h1 sh-article-h1">A career spent building what didn’t exist before.</h1>
        <p className="lede sh-article-lede">
          Silvi Haldipur is a commercial executive in life sciences and consumer health whose work has consistently arrived before the industry had a name for it. Twenty years across Fortune 500 organizations. The pattern is conviction at the early window, and the operating discipline to make it last.
        </p>

        <h2 className="h2 sh-article-h2">The operator’s through line</h2>
        <p>
          Silvi works at the intersection of three disciplines that rarely sit together: systems thinking, human-centered design, and organizational development. Her career is a sequence of zero-to-one builds inside complex, regulated organizations, each one installing a commercial capability the industry had not yet named.
        </p>
        <p>
          Building commercial organizations that are smarter, faster, and more human is not a design challenge or a technology challenge or a change management challenge. It is all three, at once.
        </p>
        <p>
          Customer experience installed as a commercial discipline at Merck, when peers were still talking about content. Agile and human-centered design embedded into pharma commercial operations across six international markets. The Flonase Rx-to-OTC launch at GSK, where behavior-led digital community building disrupted a category dominated by oral antihistamines and delivered #1 OTC market share. The consumer segmentation platform Silvi and team built for that launch, anchored in social listening and behavioral archetypes, was later commercialized by Experian. The <em>Sotatercept</em> PAH launch, where journey-level intervention cut time-to-treat by 62.5%. Behavioral intelligence with AI at Novo Nordisk.
        </p>
        <p>
          Across all of it, the same question. What would have to be true, in data, in decision rights, in workflow, in measurement, in how the team is led, for the strategy to actually work at the operating layer?
        </p>

        <section data-bleed="sky">
          <div className="sh-bleed-bg" aria-hidden="true"></div>
          <h2 className="h2 sh-article-h2">How she operates</h2>
          <dl className="sh-operates">
            <div>
              <dt>Conviction at the early window</dt>
              <dd>The capabilities Silvi has installed were not consensus moves at the time. Conviction without operating discipline produces a thought leader. Operating discipline without conviction produces a competent modernizer. The work happens at the seam of both.</dd>
            </div>
            <div>
              <dt>Dynamic range from strategy to execution</dt>
              <dd>Silvi operates across the full altitude of commercial leadership, moving fluidly between board-level strategy and tactical execution in the same conversation. She has been described by senior leaders as someone who sees the forest and the trees, flexes across leadership styles, and translates between disciplines that rarely sit together. The range is what makes the operating discipline possible.</dd>
            </div>
            <div>
              <dt>Building inside the organization, not around it</dt>
              <dd>Functions stood up. Capabilities embedded. New roles created. Decision rights redrawn. Training programs that scale across hundreds of employees. The artifact is never a recommendation. It is a working system that the organization runs after the build is done.</dd>
            </div>
            <div>
              <dt>Leading high-performing teams through ambiguity</dt>
              <dd>Teams from five people to 500+, in environments where the work has not yet been fully defined. Hiring for ambiguity tolerance. Developing leaders inside the team as the function matures. Uniting cross-functional groups across design, clinical, technology, commercial, and analytics.</dd>
            </div>
            <div>
              <dt>Customer truth as the operating compass</dt>
              <dd>In ambiguous work, most leaders default to internal logic: what is politically safe, what was done last time, what the consultant slide recommended. Silvi defaults to the customer, whether patient, clinician, consumer, or payer. That is what keeps the new capability from being self-indulgent. It has to work for a real human at the other end.</dd>
            </div>
          </dl>
        </section>

        <h2 className="h2 sh-article-h2">Domain depth</h2>
        <p>
          Silvi’s commercial work has spanned thirteen therapeutic areas, the full healthcare ecosystem from patients to payers, five industries from life sciences to financial services, and both US and international commercial operations across six priority markets in Europe, Asia-Pacific, and Latin America.
        </p>
        <div className="sh-domain">
          <div className="sh-domain-row">
            <div className="meta sh-domain-h">Geographic experience</div>
            <div className="sh-domain-v">
              United States commercial leadership across multiple Fortune 500 organizations. International commercial leadership across six priority markets through the Merck Global Human Health Digital Accelerator, spanning Europe, Asia-Pacific, and Latin America. Operating models built to flex across regulatory environments, payer systems, and cultural contexts.
            </div>
          </div>
          <div className="sh-domain-row">
            <div className="meta sh-domain-h">Therapeutic areas</div>
            <div className="sh-domain-v">
              Obesity · Diabetes · Cardiovascular disease · Neuroscience · Oncology · Biosimilars · Vaccines · Infectious disease · Respiratory · Gastroenterology · Medical devices · Dermatology · Mental health
            </div>
          </div>
          <div className="sh-domain-row">
            <div className="meta sh-domain-h">Healthcare ecosystem</div>
            <div className="sh-domain-v">
              Patients · Providers · Payers · Regulators · Health systems · Digital health
            </div>
          </div>
          <div className="sh-domain-row">
            <div className="meta sh-domain-h">Industries</div>
            <div className="sh-domain-v">
              Life sciences · Consumer health · Consumer packaged goods · Health technology · Financial services
            </div>
          </div>
        </div>

        <h2 className="h2 sh-article-h2">Core expertise</h2>
        <p className="sh-expertise">
          Commercial leadership · Capability installation and operating model design · Launch excellence · DTC and Rx-to-OTC strategy · Customer experience as a commercial discipline · AI and behavioral intelligence · Human-centered design · Agile in commercial operations · Measurement and governance · C-suite advisory
        </p>

        <div className="sh-article-foot">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); navigate('work'); }}
            className="sh-quiet-link"
          >
            Read the selected work →
          </a>
        </div>
      </article>
    </PageShell>
  );
}

/* ============================================================ */

function Work({ focused, navigate }) {
  const findBySlug = (s) => CASES.find((c) => c.slug === s || c.num === s);
  const initial = findBySlug(focused) || CASES[0];
  const [open, setOpen] = useState(initial);
  const detailRef = useRef(null);
  const gridRef = useRef(null);

  // Update from external focus prop (deep link via navigate)
  useEffect(() => {
    if (focused) {
      const c = findBySlug(focused);
      if (c) setOpen(c);
    }
  }, [focused]);

  // Listen to hashchange so /work#sotatercept-style links update the case
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash) return;
      const c = findBySlug(hash);
      if (c) setOpen(c);
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Smooth-scroll to detail after a card click
  const openCase = (slug) => {
    const c = findBySlug(slug);
    if (!c) return;
    setOpen(c);
    if (window.location.hash !== `#${c.slug}`) {
      history.replaceState(null, '', `#${c.slug}`);
    }
    requestAnimationFrame(() => {
      detailRef.current && detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const scrollToGrid = () => {
    gridRef.current && gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const idx = CASES.findIndex((c) => c.num === open.num);
  const next = CASES[(idx + 1) % CASES.length];
  const prev = CASES[(idx - 1 + CASES.length) % CASES.length];

  return (
    <PageShell paper>
      <article className="sh-article sh-article--wide">
        <div className="meta sh-article-kicker">03 · Work</div>
        <h1 className="h1 sh-article-h1">Selected work.</h1>
        <p className="lede sh-article-lede">
          Four builds. Each one a capability brought into pharma commercial before consensus, designed around customer truth, and still running after the work was done.
        </p>

        <div className="sh-casegrid" ref={gridRef}>
          {CASES.map((c) => (
            <CaseHeroCard
              key={c.num}
              {...c}
              isOpen={open.num === c.num}
              onOpen={openCase}
            />
          ))}
        </div>

        <section className="sh-case-detail" ref={detailRef} id={`case-${open.slug}`} key={open.num}>
          <div className="sh-case-detail-eyebrow">
            <span className="sh-case-detail-num">Case {open.num}</span>
            <span className="sh-case-detail-theme">{open.theme} · {open.tenure}</span>
          </div>
          <h2 className="h2 sh-case-detail-title">{open.title}</h2>

          <div className="sh-case-prose">
            {open.sections.map((s, i) => (
              <div className="sh-case-prose-block" key={i}>
                <div className="meta sh-case-prose-h">{s.h}</div>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          {open.figures && open.figures.length > 0 && (
            <div className="sh-figures">
              {open.figures.map(([n, l], i) => (
                <div className="sh-figure" key={i}>
                  <div className="sh-figure-n">{n}</div>
                  <div className="sh-figure-l">{l}</div>
                </div>
              ))}
            </div>
          )}

          <nav className="sh-case-pager" aria-label="Case navigation">
            <button type="button" className="sh-case-pager-back" onClick={scrollToGrid}>
              <span className="sh-case-pager-arrow" aria-hidden="true">↑</span>
              <span>Back to all cases</span>
            </button>
            <button type="button" className="sh-case-pager-next" onClick={() => openCase(next.slug)}>
              <span className="sh-case-pager-meta">Next case · {next.theme}</span>
              <span className="sh-case-pager-nexttitle">
                {next.title.split(/:\s/)[0]}
                <span className="sh-case-pager-arrow" aria-hidden="true">→</span>
              </span>
            </button>
          </nav>
        </section>
      </article>
    </PageShell>
  );
}

/* ============================================================ */

function Perspectives({ navigate }) {
  return (
    <PageShell paper>
      <article className="sh-article">
        <div className="meta sh-article-kicker">04 · Perspectives</div>
        <h1 className="h1 sh-article-h1"><em>Care That Works.</em></h1>
        <p className="lede sh-article-lede">
          A framework, an argument, and a body of writing on what it actually takes to bridge the gap between strategy and execution in life sciences, and on where the next operating model for pharma commercial is going.
        </p>

        <h2 className="h2 sh-article-h2">The argument</h2>
        <p>
          Most transformation efforts in life sciences fail for structural reasons, not creative ones. McKinsey research indicates over 70% of transformations stall during execution. The breakdown happens at the operating layer where capacity is missing, signals are too thin, cultures are misaligned, and the change never gets hardcoded into how the organization actually works. <em>Care That Works</em> is the framework for the four conditions that have to be true for transformation to deliver outcomes rather than declarations.
        </p>

        <section data-bleed="sky">
          <div className="sh-bleed-bg" aria-hidden="true"></div>
          <h2 className="h2 sh-article-h2">The four principles of <em>Care That Works</em></h2>
          <ol className="sh-principles">
            {PRINCIPLES.map((p) => (
              <li key={p.num}>
                <div className="sh-principle-head">
                  <span className="sh-principle-num">{p.num}</span>
                  <span className="sh-principle-title">{p.title}</span>
                </div>
                <p className="sh-principle-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <h2 className="h2 sh-article-h2">What’s next: persistence-based care design</h2>
        <p>
          The next commercial capability pharma will need is a full operating model for persistence-based care design, built around what keeps patients on therapy and on the right care path over time, rather than around the discrete commercial events of acquisition and conversion.
        </p>
        <p>
          Three forces are converging to make this the defining shift: GLP-1 economics where persistence is the dominant commercial variable, payer pressure that contracts on adherence and outcomes, AI that finally makes behavioral intervention at scale operationally feasible, and policy shifts including the IRA and value-based care reforms that make the old launch-acquisition model less defensible.
        </p>
        <p>
          Silvi is building the operating model framework for it, drawing on twenty years of commercial experience and the behavioral intelligence work at Novo Nordisk. The first piece of public writing on the framework lives below. More to follow.
        </p>

        <section className="sh-keynote-block" data-bleed="rose">
          <div className="sh-bleed-bg" aria-hidden="true"></div>
          <div className="meta sh-keynote-kicker">The keynote</div>
          <h2 className="h2 sh-keynote-headline"><em>You are not broken, the system is.</em></h2>
          <div className="meta sh-keynote-where-block">
            2026 PanAgora Pharma CX Summit · March 25, 2026
          </div>
          <blockquote className="sh-keynote-quote sh-keynote-quote--paper">
            “How many of you have a patient-centric mission? How many of you are compensated for the quality of the experience?”
          </blockquote>
          <p>
            Silvi opened her keynote with two questions for the room. The gap between the two answers, she argued, is not a CX problem. It is a structural problem.
          </p>
          <p>
            The argument that followed traced the math employees are actually doing. Companies say experience quality matters but measure quarterly commercial KPIs. They reward operational throughput over patient persistence. They fund cross-functional collaboration in stated values and individual department budgets in practice. CX, in this system, becomes an elective.
          </p>
          <p>
            What good looks like, Silvi argued, can be seen in rare disease. Patient-centered, high-touch, low-volume care models built around persistence and the emotional peak-end rule are not nicer versions of standard pharma. They are structurally different. They make patient outcomes equal to organizational success, not adjacent to it.
          </p>
          <p>
            The path forward is not more empathy training. It is five concrete moves practitioners can run on Monday. Sit down with finance and HR, not just marketing. Audit metrics against stated goals and circle the gaps. Reframe CX as clinical continuity and persistence, not operational expense, in language CFOs understand. Pilot cross-functional performance alignment in one willing team. Make the business case in their language: mapping experience to forecasting accuracy, real-world evidence, and access program ROI.
          </p>
          <p className="sh-keynote-coda">
            The system is broken. No one in the room is powerless.
          </p>
        </section>

        <h2 className="h2 sh-article-h2">Writing</h2>
        <p className="sh-writing-lede">
          Essays and longer pieces on the operating layer of pharma commercial. New writing posted as it is completed.
        </p>
        <div className="sh-essays sh-essays--list">
          {ESSAYS.map((e) => <EssayCard key={e.title} {...e} />)}
        </div>
      </article>
    </PageShell>
  );
}

/* ============================================================ */

const CONTACT_OPTIONS = [
  { key: 'executive', label: 'Executive opportunities',     email: 'silvi@haldipur.com', hint: 'Operating roles, C-suite seats, board mandates.' },
  { key: 'speaking',  label: 'Speaking and advisory',       email: 'silvi@haldipur.com', hint: 'Keynotes, panels, closed-door gatherings, and C-suite advisory.' },
  { key: 'other',     label: 'Everything else',             email: 'silvi@haldipur.com', hint: 'Press, peers, and anything that does not fit the boxes above.' },
];

function Contact() {
  const [selected, setSelected] = useState('executive');
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);
  const opt = CONTACT_OPTIONS.find((o) => o.key === selected) || CONTACT_OPTIONS[0];

  useEffect(() => {
    const onDoc = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);

  return (
    <PageShell paper>
      <article className="sh-article sh-article--contact">
        <div className="meta sh-article-kicker">05 · Contact</div>
        <h1 className="h1 sh-article-h1">Get in touch.</h1>
        <p className="lede sh-article-lede">
          Tell her the nature of the conversation.
        </p>

        <section data-bleed="paper">
          <div className="sh-bleed-bg" aria-hidden="true"></div>
          <div className="sh-contact-form">
            <div className="meta sh-contact-label">The conversation is about</div>

          <div className={`sh-select ${open ? 'is-open' : ''}`} ref={dropRef}>
            <button
              type="button"
              className="sh-select-trigger"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="sh-select-value">{opt.label}</span>
              <span className="sh-select-caret" aria-hidden="true">↓</span>
            </button>
            {open && (
              <ul className="sh-select-menu" role="listbox">
                {CONTACT_OPTIONS.map((o) => (
                  <li key={o.key} role="option" aria-selected={o.key === selected}>
                    <button
                      type="button"
                      className={`sh-select-option ${o.key === selected ? 'is-selected' : ''}`}
                      onClick={() => { setSelected(o.key); setOpen(false); }}
                    >
                      <span className="sh-select-option-label">{o.label}</span>
                      {o.hint && <span className="sh-select-option-hint">{o.hint}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="sh-contact-target" key={opt.key}>
            <div className="meta sh-contact-label sh-contact-label--mail">Write to</div>
            <a className="sh-contact-mail" href={`mailto:${opt.email}?subject=${encodeURIComponent(opt.label)}`}>
              {opt.email}
            </a>
            {opt.hint && <p className="sh-contact-hint">{opt.hint}</p>}
          </div>
        </div>
        </section>
        <div className="sh-contact-foot">
          <a href="https://linkedin.com/in/silvihaldipur" target="_blank" rel="noreferrer">
            linkedin.com/in/silvihaldipur <span className="sh-ext">↗</span>
          </a>
        </div>
      </article>
    </PageShell>
  );
}

/* ============================================================
   App
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ground": "bone",
  "accentDensity": "considered",
  "heroSize": 100,
  "showStatusLine": true,
  "showCtas": true,
  "portraitTreatment": "color",
  "heroBg": "flat",
  "heroType": "default",
  "paperTint": "warm"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = useState('home');
  const [focusedCase, setFocusedCase] = useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const navigate = (key, focus) => {
    setPage(key);
    if (key === 'work' && focus) {
      setFocusedCase(focus);
      if (typeof window !== 'undefined') {
        history.replaceState(null, '', `#${focus}`);
      }
    } else {
      setFocusedCase(null);
      if (typeof window !== 'undefined' && window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // On mount: if URL hash matches a case slug, jump to Work page with that case open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && CASES.some((c) => c.slug === hash)) {
      setPage('work');
      setFocusedCase(hash);
    }
  }, []);

  // expose for hero CTAs (rendered inside a component without prop drilling)
  useEffect(() => {
    window.__sh_navigate = navigate;
    return () => { delete window.__sh_navigate; };
  });

  // Apply tweaks via CSS variables on root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--tw-hero-scale', String(t.heroSize / 100));
    root.dataset.accent = t.accentDensity;
    root.dataset.ground = t.ground;
    root.dataset.portrait = t.portraitTreatment;
    root.dataset.heroBg = t.heroBg;
    root.dataset.heroType = t.heroType;
    root.dataset.paper = t.paperTint;
    document.body.dataset.showStatus = t.showStatusLine ? '1' : '0';
    document.body.dataset.showCtas = t.showCtas ? '1' : '0';
  }, [t]);

  const portraitSrc = (window.__resources && window.__resources.portrait) || 'assets/silvi-portrait.jpg';

  let body;
  if (page === 'home') body = <Home navigate={navigate} portraitSrc={portraitSrc} />;
  else if (page === 'about') body = <About navigate={navigate} />;
  else if (page === 'work') body = <Work focused={focusedCase} navigate={navigate} />;
  else if (page === 'perspectives') body = <Perspectives navigate={navigate} />;
  else if (page === 'contact') body = <Contact />;

  const screenLabel = `0${['home', 'about', 'work', 'perspectives', 'contact'].indexOf(page) + 1} ${page}`;

  return (
    <div data-screen-label={screenLabel}>
      <a href="#main" className="sh-skip-link">Skip to main content</a>
      <Nav active={page} onNavigate={navigate} />
      {body}
      <Footer onNavigate={navigate} />

      <TweaksPanel>
        <TweakSection label="Ground" />
        <TweakRadio
          label="Home ground"
          value={t.ground}
          options={['navy', 'bone']}
          onChange={(v) => setTweak('ground', v)}
        />
        <TweakSection label="Accent" />
        <TweakRadio
          label="Orange accent"
          value={t.accentDensity}
          options={['minimal', 'considered', 'emphatic']}
          onChange={(v) => setTweak('accentDensity', v)}
        />
        <TweakSection label="Hero" />
        <TweakSlider
          label="Statement scale"
          value={t.heroSize}
          min={70}
          max={120}
          step={1}
          unit="%"
          onChange={(v) => setTweak('heroSize', v)}
        />
        <TweakToggle
          label="“Currently considering” line"
          value={t.showStatusLine}
          onChange={(v) => setTweak('showStatusLine', v)}
        />
        <TweakToggle
          label="Show hero CTAs"
          value={t.showCtas}
          onChange={(v) => setTweak('showCtas', v)}
        />
        <TweakSection label="Portrait" />
        <TweakRadio
          label="Treatment"
          value={t.portraitTreatment}
          options={['grayscale', 'duotone', 'color']}
          onChange={(v) => setTweak('portraitTreatment', v)}
        />
        <TweakSection label="Hero ground" />
        <TweakRadio
          label="Navy treatment"
          value={t.heroBg}
          options={['flat', 'gradient', 'panel']}
          onChange={(v) => setTweak('heroBg', v)}
        />
        <TweakRadio
          label="Statement"
          value={t.heroType}
          options={['default', 'large']}
          onChange={(v) => setTweak('heroType', v)}
        />
        <TweakSection label="Paper pages" />
        <TweakRadio
          label="Tint"
          value={t.paperTint}
          options={['white', 'warm', 'cool']}
          onChange={(v) => setTweak('paperTint', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
