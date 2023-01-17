import React from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { SearchResults } from './searchResults/SearchResults';

export function Subreddits() {
  return (
    <aside className="subreddits-grid">
      <div className="sub-grid">
        <Searchbar />
        <SearchResults />
      </div>
    </aside>
  );
}
