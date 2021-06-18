import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Robson Candido dos Santos Alves/i);
  expect(linkElement).toBeInTheDocument();
});
