import React, { useEffect, useState } from 'react';
import {
  Search,
  Globe,
  Filter,
  Compass,
} from 'lucide-react';
import {
  getAllCountries,
  getCountryByName,
  getByRegion,
  getByLanguage,
} from '../services/api';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');

  const loadCountries = async () => {
    try {
      const res = await getAllCountries();
      setCountries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchCountries = async (name) => {
    try {
      const res = await getCountryByName(name);
      setCountries(res.data);
    } catch (err) {
      setCountries([]);
    }
  };

  const filterCountries = async (region) => {
    try {
      if (!region) {
        loadCountries();
      } else {
        const res = await getByRegion(region);
        setCountries(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filterLanguages = async (language) => {
    try {
      if (!language) {
        loadCountries();
      } else {
        const res = await getByLanguage(language);
        setCountries(res.data); // ✅ FIXED: it was mistakenly setLanguages before
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (search) {
      searchCountries(search);
    } else if (region) {
      filterCountries(region);
    } else if (language) {
      filterLanguages(language);
    } else {
      loadCountries();
    }
  }, [search, region, language]); // ✅ FIXED: added language to dependencies

  return (
    <div className="from-gray-100 to-gray-300 min-h-screen">
      <Header />
      <div className="p-4 md:p-8 container mx-auto max-w-7xl">

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 mb-8">

          <div className="flex items-center w-full md:w-2/3 gap-3">
            <Search className="text-gray-600" />
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div className="flex items-center w-full md:w-2/3 gap-3">
            <Filter className="text-gray-600" />
            <FilterBar region={region} onRegionChange={(e) => setRegion(e.target.value)} />
          </div>

          {/* <div className="flex items-center w-full md:w-2/3 gap-3">
            <Filter className="text-gray-600" />
            <FilterBar language={language} onLanguageChange={(e) => setLanguage(e.target.value)} />
          </div> */}

        </div>

        <div className="flex items-center gap-2 mb-4">
          <Globe className="text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            {search
              ? `Search Results for "${search}"`
              : region
              ? `Countries in ${region}`
              : language
              ? `Countries speaking ${language}`
              : 'All Countries'}
          </h2>
        </div>

        {countries.length === 0 ? (
          <div className="text-center mt-16 text-gray-500 text-lg">
            <Compass className="mx-auto mb-2 animate-pulse" />
            No countries found.
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
