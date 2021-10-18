import React, { useState } from 'react';
import styles from './search.module.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const baseSearchUrl = 'https://www.google.com/search';

  const search = (e) => {
    if (e.code === 'Enter') {
      const url = `${baseSearchUrl}?q=${searchQuery}`;
      window.open(url);
      setSearchQuery('');
    }
  };

  return (
    <div class="search-container" id="search">
      <input
        class="search-input"
        type="text"
        placeholder="Search Google"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
