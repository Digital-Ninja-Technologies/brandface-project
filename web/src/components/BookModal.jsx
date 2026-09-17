import BookingFlow from './BookingFlow.jsx';
import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

// Stays mounted at all times (rather than unmounting when closed) so the Calendly
// iframe loads in the background from page load - it's instant by the time someone
// actually reaches the scheduling step, instead of loading from scratch.
export default function BookModal() {
  const { modalOpen, closeModal, leadSubmitted, markLeadSubmitted } = useBooking();

  return (
    <div
      className={`bf-modal-backdrop ${modalOpen ? 'open' : ''}`}
      onClick={closeModal}
      aria-hidden={!modalOpen}
      inert={!modalOpen ? '' : undefined}
    >
      <div className="bf-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="bf-modal-topbar" />
        <button type="button" className="bf-modal-close" aria-label="Close" onClick={closeModal}>
          ✕
        </button>

        <div className="bf-modal-head">
          <div className="bf-eyebrow">Book a strategy call</div>
          {leadSubmitted ? (
            <>
              <h3>Pick a time that works for you.</h3>
              <p>
                A 30-minute call, no obligation and no pressure. Backed by the {GUARANTEE_CONSULTS} consultation,{' '}
                {GUARANTEE_DAYS}-day guarantee on the Growth Engine.
              </p>
            </>
          ) : (
            <>
              <h3>Tell us about your firm.</h3>
              <p>
                A few quick questions so the call is useful from the first minute. You'll pick a time on the next
                step.
              </p>
            </>
          )}
        </div>
        <div className="bf-modal-body">
          <BookingFlow
            step={leadSubmitted ? 'calendly' : 'form'}
            onSubmitSuccess={markLeadSubmitted}
            calendlyClassName="bf-modal-calendly"
          />
        </div>
      </div>
    </div>
  );
}
