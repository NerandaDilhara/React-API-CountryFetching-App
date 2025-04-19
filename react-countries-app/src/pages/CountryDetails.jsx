import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getByCode } from '../services/api';
import Header from '../components/Header';

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const res = await getByCode(code);
        setCountry(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    loadCountry();
  }, [code]);

  if (!country) return <p className="p-6">Loading...</p>;

  return (
    <div>
      <Header/>

      <Link to="/"><button className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-4'>← Back to Home</button></Link>
      
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold mt-4">{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      </div>
    </div>
  );
};

export default CountryDetails;
