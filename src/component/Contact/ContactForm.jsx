import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import './contact.css';

const emailAddress = 'mehul.garg104@gmail.com';

export default function ContactForm({ endpoint = process.env.REACT_APP_CONTACT_API_URL || '' }) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const requestRef = useRef(null);
  const isSending = status === 'sending';

  useEffect(() => () => requestRef.current?.abort(), []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (requestRef.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const data = Object.fromEntries(['name', 'email', 'message', 'website'].map(key => [key, String(fields.get(key) || '').trim()]));
    const nextErrors = {};
    if (!data.name || data.name.length > 100) nextErrors.name = 'Enter your name (up to 100 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) nextErrors.email = 'Enter a valid email address.';
    if (!data.message || data.message.length > 5000) nextErrors.message = 'Enter your message (up to 5,000 characters).';
    setErrors(nextErrors);
    setFeedback('');
    setStatus('idle');
    if (Object.keys(nextErrors).length) {
      form.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    if (!endpoint.trim() || data.website) {
      setStatus('error');
      setFeedback('Online messages are not available right now. Please use the email link below.');
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);
    setStatus('sending');
    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result?.success !== true) throw new Error('Message was not accepted');
      form.reset();
      setStatus('success');
      setFeedback('Your message has been sent. Thanks for reaching out!');
    } catch {
      setStatus('error');
      setFeedback('Your message could not be sent. Please try again or use the email link below.');
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
    }
  }

  function clearFieldError(event) {
    const fieldName = event.target.name;
    if (errors[fieldName]) setErrors(previous => ({ ...previous, [fieldName]: undefined }));
  }

  return (
    <form className="contact-form" aria-labelledby="contact-form-heading" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-heading">
        <span className="form-eyebrow">START A CONVERSATION</span>
        <h3 id="contact-form-heading">Send a message<span>.</span></h3>
        <p>All fields are required.</p>
      </div>
      <fieldset disabled={isSending} onInput={clearFieldError}>
        <legend className="visually-hidden">Your contact details and message</legend>
        <div className="contact-fields-row">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
            {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
            {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
          </div>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about the opportunity or project…" required maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
          {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
        </div>
        <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <button className="button button-primary contact-submit" type="submit">
          {isSending ? <>Sending… <LoaderCircle className="sending-icon" size={18} aria-hidden="true" /></> : <>Send message <ArrowUpRight size={18} aria-hidden="true" /></>}
        </button>
      </fieldset>
      {feedback && <p className={`contact-feedback ${status === 'success' ? 'is-success' : 'is-error'}`} role={status === 'success' ? 'status' : 'alert'}>{status === 'success' && <CheckCircle2 size={17} aria-hidden="true" />}{feedback}</p>}
      {isSending && <p className="visually-hidden" role="status">Sending your message.</p>}
      <p className="contact-form-email">Prefer email? <a href={`mailto:${emailAddress}`}>Email me directly <ArrowUpRight size={13} aria-hidden="true" /></a></p>
    </form>
  );
}
