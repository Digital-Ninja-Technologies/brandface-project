import { useId, useState } from 'react';
import { CALENDLY_URL, GHL_WEBHOOK_URL } from '../siteConfig.js';

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  firmName: '',
};

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') };
}

async function submitLead(form) {
  const { firstName, lastName } = splitName(form.fullName);
  const res = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'BrandFace Media site',
      name: form.fullName,
      firstName,
      lastName,
      email: form.email,
      phone: form.phone,
      companyName: form.firmName,
    }),
  });
  if (!res.ok) {
    throw new Error('Submission failed');
  }
}

// Two steps: contact details -> Calendly. Submitting posts the lead to the GHL
// webhook and routes straight to the scheduler, with no confirmation screen between.
//
// Both steps stay mounted and are toggled with a class rather than unmounted, so the
// Calendly iframe loads in the background from page load instead of starting cold at
// the moment someone finishes the form.
export default function BookingFlow({ step, onSubmitSuccess, calendlyClassName }) {
  // Two BookingFlow instances are mounted at once (the popup and the on-page section),
  // so element ids have to be unique per instance or the labels bind to the wrong inputs.
  const uid = useId();
  const fieldId = (name) => `${uid}-${name}`;

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitLead(form);
      onSubmitSuccess(form);
    } catch {
      setError("Something went wrong sending that. Please try again, or email us directly if it keeps happening.");
    } finally {
      setSubmitting(false);
    }
  };

  const onCalendly = step === 'calendly';

  return (
    <>
      <form className={`bf-booking-form${onCalendly ? ' bf-step-hidden' : ''}`} onSubmit={handleSubmit}>
        <div className="bf-field">
          <label htmlFor={fieldId('fullName')}>Full name</label>
          <input
            id={fieldId('fullName')}
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jordan Rivera"
            required
            value={form.fullName}
            onChange={update('fullName')}
          />
        </div>
        <div className="bf-field">
          <label htmlFor={fieldId('email')}>Email</label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@yourfirm.com"
            required
            value={form.email}
            onChange={update('email')}
          />
        </div>
        <div className="bf-field">
          <label htmlFor={fieldId('phone')}>Phone number</label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            required
            value={form.phone}
            onChange={update('phone')}
          />
        </div>
        <div className="bf-field">
          <label htmlFor={fieldId('firmName')}>Law firm name</label>
          <input
            id={fieldId('firmName')}
            name="firmName"
            type="text"
            autoComplete="organization"
            placeholder="Rivera Injury Law"
            required
            value={form.firmName}
            onChange={update('firmName')}
          />
        </div>
        {error && <p className="bf-field-error">{error}</p>}
        <button type="submit" className="bf-btn-gold-lg bf-booking-submit" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Continue to scheduling'}
        </button>
      </form>

      <div className={`${calendlyClassName}${onCalendly ? '' : ' bf-step-hidden'}`}>
        <iframe src={CALENDLY_URL} title="Schedule a call with BrandFace Media" />
      </div>
    </>
  );
}
