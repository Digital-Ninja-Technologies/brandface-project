import Reveal from './Reveal.jsx';

const CLIENTS = [
  {
    practice: 'Personal injury',
    city: 'Chicago',
    result: '8M+ views, 35K+ new followers, signing cases for about $200 in ad spend.',
  },
  {
    practice: 'Estate planning',
    city: 'Boca Raton',
    result:
      '~250K views from one video in her first month on a brand-new account; booked an estate-plan consultation straight from that video.',
  },
  {
    practice: 'Family law',
    city: 'Chicago',
    result: '100K+ views from one video in her first month on a brand-new account.',
  },
];

export default function ClientResults() {
  return (
    <section id="results" className="bf-section-tight bf-section-alt">
      <div className="bf-container">
        <div className="bf-center">
          <Reveal className="bf-eyebrow bf-section-tight-inner">Client results</Reveal>
          <Reveal as="h2" delay={80}>
            Real firms. Real numbers.
          </Reveal>
        </div>

        <div className="bf-grid-3" style={{ marginTop: 48 }}>
          {CLIENTS.map((c, i) => (
            <Reveal key={c.practice} delay={i * 100} className="bf-card">
              <div className="bf-card-num">{c.practice}</div>
              <h3>{c.city}</h3>
              <p>{c.result}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
