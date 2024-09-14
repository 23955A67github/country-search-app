import React from 'react';
import SearchBar from './components/SearchBar';
import countriesData from './countries.json';

const App = () => {
  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar countries={countriesData} />
    </div>
  );
};

export default App;
