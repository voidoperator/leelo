import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { selectSearchTerm, setSearchTerm } from './searchbarSlice';
import { fetchSearchResults } from '../searchResults/searchResultsSlice';

export function Searchbar(props) {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector(selectSearchTerm);
  const { setCurrentSearchTerm } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentSearchTerm(event.target.value);
    dispatch(fetchSearchResults({ searchTerm }));
    dispatch(setSearchTerm(''));
  };

  return (
    <div className="searchbar-grid">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
          </div>
          <input
            required
            type="search"
            id="default-search"
            value={searchTerm}
            onInput={(event) => dispatch(setSearchTerm(event.target.value))}
            className="searchbar-input"
            minLength={3}
            min={3}
          />
          <button type="submit" className="search-btn">
            busca
          </button>
        </div>
      </form>
    </div>
  );
}
