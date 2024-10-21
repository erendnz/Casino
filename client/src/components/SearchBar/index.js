import React from 'react';
import './index.scss';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)} // Event handler for search term change
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
