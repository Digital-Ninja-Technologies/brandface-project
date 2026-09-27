// Meta Pixel helpers. The pixel itself is installed in index.html; it may be blocked
// by an ad blocker or still loading, so every call is guarded and never throws into
// the submit path - a failed pixel must not stop a lead reaching GHL.

function fbq(...args) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return false;
  try {
    window.fbq(...args);
    return true;
  } catch {
    return false;
  }
}

// Fired when the booking form is submitted ("Continue to scheduling"). The ad
// campaign optimizes on this event, so it fires on a successful submit only.
export function trackLead(form) {
  return fbq('track', 'Lead', {
    content_name: 'Booking form',
    practice_area: form?.practiceArea || undefined,
  });
}

// Calendly posts a message to the parent window when a booking completes. Listening
// for it is the only way to see the booking from this page, since the scheduler runs
// inside a cross-origin iframe.
export function onCalendlyScheduled(callback) {
  if (typeof window === 'undefined') return () => {};
  const handler = (e) => {
    if (typeof e.origin !== 'string' || !e.origin.includes('calendly.com')) return;
    if (e.data?.event === 'calendly.event_scheduled') callback();
  };
  window.addEventListener('message', handler);
  return () => window.removeEventListener('message', handler);
}

export function trackMeetingScheduled() {
  return fbq('trackCustom', 'invitee_meeting_scheduled');
}
