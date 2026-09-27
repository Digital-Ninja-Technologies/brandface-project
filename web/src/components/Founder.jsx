import Reveal from './Reveal.jsx';

export default function Founder() {
  return (
    <section className="bf-section">
      <div className="bf-container-narrow">
        <Reveal className="bf-eyebrow bf-center">The founder</Reveal>
        <Reveal as="p" delay={80} className="bf-founder-body">
          Before the agency, Bdo generated 300M+ organic views as a creator, with brand partnerships including Red
          Bull, Apple and Smart Water. Now he only works with law firms.
        </Reveal>
      </div>
    </section>
  );
}
