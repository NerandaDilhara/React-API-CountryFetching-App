import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../components/FilterBar';

test('renders filter dropdown with options', () => {
  render(<FilterBar region="" onRegionChange={() => {}} />);
  expect(screen.getByDisplayValue(/filter by region/i)).toBeInTheDocument();
  expect(screen.getByText('Africa')).toBeInTheDocument();
});
