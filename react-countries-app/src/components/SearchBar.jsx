import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (

    
    <input
      type="text"
      placeholder="Search countries by name..."
      className="w-full md:w-1/2 p-3 rounded-md border shadow-sm focus:outline-none"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
