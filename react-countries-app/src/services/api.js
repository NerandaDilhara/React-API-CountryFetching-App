import axios from 'axios';

const API_BASE = 'https://restcountries.com/v3.1';

export const getAllCountries = () => axios.get(`${API_BASE}/all`);
export const getCountryByName = (name) => axios.get(`${API_BASE}/name/${name}`);
export const getByRegion = (region) => axios.get(`${API_BASE}/region/${region}`);
export const getByCode = (code) => axios.get(`${API_BASE}/alpha/${code}`);
export const getByLanguage = (language) => axios.get(`${API_BASE}/lang/${language}`);


// All Countries
// https://restcountries.com/v3.1/all
// Search by country name. 
// https://restcountries.com/v3.1/name/{name}
// Search by country’s full name.
// https://restcountries.com/v3.1/name/{name}?fullText=true
// Search by cca2, ccn3, cca3 or cioc country code (yes, any!)
// https://restcountries.com/v3.1/alpha/{code}
// Search by currency code or name
// https://restcountries.com/v3.1/currency/{currency}
// Search by capital city
// https://restcountries.com/v3.1/capital/{capital}
// Search by region (replace X with the version you want to use)
// https://restcountries.com/v3.1/region/{region}

