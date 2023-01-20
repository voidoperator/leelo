import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Searchbar } from './searchbar/Searchbar';
import { SearchResults } from './searchResults/SearchResults';
import { selectSearchTerm } from './searchbar/searchbarSlice';

export function Subreddits() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector(selectSearchTerm);
  return (
    <aside className="subreddits-grid">
      <div className="sub-grid">
        <Searchbar />
        <SearchResults searchTerm={searchTerm} />
      </div>
    </aside>
  );
}
