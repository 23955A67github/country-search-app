import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Optional for styling

const SearchBar = ({ countries }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(query.toLowerCase()) || 
        country.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredCountries);
    } else {
      setSuggestions([]);
    }
  }, [query, countries]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.name} - {suggestion.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
