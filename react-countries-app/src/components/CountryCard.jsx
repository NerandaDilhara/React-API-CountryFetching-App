import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Globe2, Users } from 'lucide-react';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.cca3}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer border"
    >
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-44 object-cover border-b rounded-t-2xl"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{country.name.common}</h2>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} /> <span className="text-sm"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Globe2 size={16} /> <span className="text-sm"><strong>Region:</strong> {country.region}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users size={16} /> <span className="text-sm"><strong>Population:</strong> {country.population.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
