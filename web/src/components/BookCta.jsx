import Reveal from './Reveal.jsx';
import BookingFlow from './BookingFlow.jsx';
import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

export default function BookCta() {
  const { leadSubmitted, markLeadSubmitted } = useBooking();

  return (
    <section id="book" className="bf-section bf-book">
      <div className="bf-book-glow" />
      <div className="bf-book-inner">
        <Reveal className="bf-eyebrow">Book a strategy call</Reveal>
        <Reveal as="h2" delay={80}>
          Let's find out what one signed case is worth to you.
        </Reveal>
        <Reveal as="p" delay={140} className="sub">
          {leadSubmitted
            ? 'Pick a time below. A 30-minute call, no obligation and no pressure.'
            : "Tell us about your firm and we'll map out exactly how the engine would work for you. No obligation and no pressure."}
        </Reveal>

        <Reveal delay={200} className="bf-calendly-wrap">
          <BookingFlow
            step={leadSubmitted ? 'calendly' : 'form'}
            onSubmitSuccess={markLeadSubmitted}
            calendlyClassName="bf-calendly-frame"
          />
          <p className="bf-book-note">
            Backed by the {GUARANTEE_CONSULTS} consultation, {GUARANTEE_DAYS}-day guarantee on the Growth Engine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
