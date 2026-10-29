import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('presents the portfolio and its primary links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /mehul garg/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work');
  expect(screen.getByRole('heading', { name: 'CloudX Suite' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view résumé/i })).toHaveAttribute('href', expect.stringContaining('.pdf'));
});

test('mobile navigation opens and closes after following a section link', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /open menu/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Skills' }));
  expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
});
