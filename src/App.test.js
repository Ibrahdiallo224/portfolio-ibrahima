import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /recherche d’alternance en développement logiciel/i,
  });
  expect(heading).toBeInTheDocument();
});
