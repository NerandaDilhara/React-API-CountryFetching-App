import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountryCard from '../components/CountryCard';

const mockCountry = {
  cca3: 'LKA',
  name: { common: 'Sri Lanka' },
  capital: ['Colombo'],
  region: 'Asia',
  population: 21803000,
  flags: { svg: 'https://flagcdn.com/lk.svg' },
};

test('renders country card with correct data', () => {
  render(
    <BrowserRouter>
      <CountryCard country={mockCountry} />
    </BrowserRouter>
  );

  expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
  expect(screen.getByText(/Colombo/i)).toBeInTheDocument();
  expect(screen.getByText(/Asia/i)).toBeInTheDocument();
  expect(screen.getByText(/21,803,000/)).toBeInTheDocument();
});
