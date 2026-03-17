import { render, screen } from '@testing-library/react';
import App from './App';

test('renders analytics page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /overview/i, level: 1 })
  ).toBeInTheDocument();
});
