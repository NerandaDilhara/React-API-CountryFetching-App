import React from 'react';

const FilterBar = ({ region, onRegionChange, language, onLanguageChange }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const languages = ['English', 'Spanish', 'French', 'Arabic', 'Chinese'];

  return (
    <>
      {region !== undefined && onRegionChange && (
        <select
          className="w-full p-3 rounded-md border shadow-sm focus:outline-none"
          value={region}
          onChange={onRegionChange}
        >
          <option value="">Filter by Region</option>
          {regions.map((reg) => (
            <option key={reg} value={reg}>{reg}</option>
          ))}
        </select>
      )}

      {language !== undefined && onLanguageChange && (
        <select
          className="w-full p-3 rounded-md border shadow-sm focus:outline-none"
          value={language}
          onChange={onLanguageChange}
        >
          <option value="">Filter by Language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default FilterBar;
