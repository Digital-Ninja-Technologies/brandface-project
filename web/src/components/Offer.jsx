import Reveal from './Reveal.jsx';
import { useBooking } from '../BookingContext.jsx';

export default function Offer() {
  const { openModal } = useBooking();

  return (
    <section id="offer" className="bf-section-tight bf-section-alt">
      <div className="bf-container-mid">
        <div className="bf-center bf-offer-head">
          <Reveal className="bf-eyebrow bf-section-tight-inner">The offer</Reveal>
          <Reveal as="h2" delay={80}>
            90 days. We fly out and film you, publish 15 videos a month, and turn your best ones into ads that bring
            in cases.
          </Reveal>
        </div>

        <Reveal delay={140} as="p" className="bf-offer-price">
          Programs start at <span className="accent">$12,000</span> for 90 days.
        </Reveal>

        <Reveal as="p" delay={180} className="bf-offer-note">
          Ad spend is separate, controlled by you, and prescribed by us. Most firms start around $1,000/month.
        </Reveal>

        <Reveal delay={240} className="bf-card bf-card-highlight bf-offer-guarantee">
          <div className="bf-eyebrow">The guarantee</div>
          <ul className="bf-tier-list">
            <li>
              <span className="check">✓</span> Content: 1,000,000 views in 90 days.
            </li>
            <li>
              <span className="check">✓</span> Content + Ads: 20–30 qualified consultations in 90 days.
            </li>
          </ul>
          <p>Miss it and we keep working free until you hit it.</p>
        </Reveal>

        <Reveal delay={300} className="bf-center bf-offer-cta">
          <a
            href="#book"
            className="bf-btn-gold-lg"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Book your strategy call →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
