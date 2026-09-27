import Reveal from './Reveal.jsx';

const STEPS = [
  'We fly out and film you.',
  'We script, edit and publish 15 videos a month.',
  'We run your best videos as ads and track cost per signed case inside your own CRM.',
];

export default function HowItWorks() {
  return (
    <section id="work" className="bf-section-tight">
      <div className="bf-container">
        <div className="bf-center">
          <Reveal className="bf-eyebrow bf-section-tight-inner">How it works</Reveal>
          <Reveal as="h2" delay={80}>
            Three steps. We run all of them.
          </Reveal>
        </div>

        <div className="bf-grid-3" style={{ marginTop: 48 }}>
          {STEPS.map((step, i) => (
            <Reveal key={step} delay={i * 100} className="bf-card">
              <div className="bf-card-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{step}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
