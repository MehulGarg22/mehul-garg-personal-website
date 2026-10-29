import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

const originalFetch = global.fetch;
const endpoint = 'https://contact.example.test/message';

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  global.fetch = originalFetch;
});

function fillForm() {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: '  Recruiter  ' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'recruiter@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: '  Let us discuss a backend engineering opportunity.  ' } });
}

function submitForm() {
  fireEvent.submit(screen.getByRole('form', { name: /send a message/i }));
}

test('validates contact details before sending and focuses the first invalid field', () => {
  render(<ContactForm endpoint={endpoint} />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: '   ' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid-email' } });
  submitForm();

  expect(global.fetch).not.toHaveBeenCalled();
  expect(screen.getByLabelText('Name')).toHaveFocus();
  expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByLabelText('Message')).toHaveAttribute('aria-invalid', 'true');
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});

test('keeps the message and offers email when the API is not configured', () => {
  render(<ContactForm endpoint="" />);
  fillForm();
  submitForm();

  expect(global.fetch).not.toHaveBeenCalled();
  expect(screen.getByRole('alert')).toHaveTextContent(/online messages are not available/i);
  expect(screen.getByRole('link', { name: /email me directly/i })).toHaveAttribute('href', 'mailto:mehul.garg104@gmail.com');
  expect(screen.getByLabelText('Message')).toHaveValue('  Let us discuss a backend engineering opportunity.  ');
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});

test('posts trimmed JSON, prevents duplicate sends, and clears the form only after confirmed success', async () => {
  let resolveRequest;
  global.fetch.mockImplementation(() => new Promise(resolve => { resolveRequest = resolve; }));
  render(<ContactForm endpoint={endpoint} />);
  fillForm();
  submitForm();
  submitForm();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  const [url, options] = global.fetch.mock.calls[0];
  expect(url).toBe(endpoint);
  expect(options.method).toBe('POST');
  expect(options.headers).toEqual({ 'Content-Type': 'application/json' });
  expect(JSON.parse(options.body)).toEqual({
    name: 'Recruiter',
    email: 'recruiter@example.com',
    message: 'Let us discuss a backend engineering opportunity.',
    website: '',
  });
  expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
  expect(screen.getByLabelText('Message')).toBeDisabled();
  expect(screen.getByLabelText('Message')).not.toHaveValue('');

  await act(async () => {
    resolveRequest({ ok: true, json: async () => ({ success: true }) });
  });

  expect(screen.getByRole('status')).toHaveTextContent(/your message has been sent/i);
  expect(screen.getByLabelText('Name')).toHaveValue('');
  expect(screen.getByLabelText('Email')).toHaveValue('');
  expect(screen.getByLabelText('Message')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
});

test.each([
  ['an HTTP error', () => Promise.resolve({ ok: false, json: async () => ({ success: true }) })],
  ['a rejected message', () => Promise.resolve({ ok: true, json: async () => ({ success: false }) })],
  ['a network failure', () => Promise.reject(new Error('Network unavailable'))],
])('preserves the message and shows a retry option after %s', async (_, result) => {
  global.fetch.mockImplementation(result);
  render(<ContactForm endpoint={endpoint} />);
  fillForm();
  submitForm();

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/could not be sent/i));
  expect(screen.getByLabelText('Name')).toHaveValue('  Recruiter  ');
  expect(screen.getByLabelText('Message')).toHaveValue('  Let us discuss a backend engineering opportunity.  ');
  expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});
