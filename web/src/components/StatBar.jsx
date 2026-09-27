import Reveal from './Reveal.jsx';

const STATS = [
  { value: '~$200', label: 'Signed case in ad spend (PI client)' },
  { value: '8M+', label: 'Views for one attorney' },
  { value: '250K', label: 'Views from one video in month one, brand-new account' },
  { value: 'Every practice area', label: '3 states', text: true },
];

export default function StatBar() {
  return (
    <section className="bf-statbar-outer">
      <div className="bf-container">
        <div className="bf-statbar">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bf-statbar-cell">
              <div className={`bf-statbar-num${s.text ? ' bf-statbar-num-text' : ''}`}>{s.value}</div>
              <div className="bf-statbar-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
