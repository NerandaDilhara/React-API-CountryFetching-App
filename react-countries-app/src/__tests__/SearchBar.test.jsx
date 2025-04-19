import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders search input', () => {
  render(<SearchBar />);
  expect(screen.getByPlaceholderText(/search countries/i)).toBeInTheDocument();
});
