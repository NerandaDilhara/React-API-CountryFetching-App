import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with copyright', () => {
  render(<Footer />);
  expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
});
