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
    const input = event.target;
    event.preventDefault();
    if (searchTerm.length < 3) {
      input.reportValidity();
      return;
    }
    setCurrentSearchTerm(searchTerm);
    dispatch(fetchSearchResults({ searchTerm }));
    dispatch(setSearchTerm(''));
  };

  const handleInput = (event) => {
    const { target, key } = event;
    target.setCustomValidity('');

    dispatch(setSearchTerm(target.value));
    if (key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleClick = (event) => {
    const input = event.target;
    event.preventDefault();
    if (searchTerm.length < 3) {
      input.setCustomValidity(
        'Please lengthen this text to 3 characters or more.'
      );
      input.reportValidity();
      return;
    }
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
            onInput={(event) => handleInput(event)}
            onKeyDown={(event) => handleInput(event)}
            className="searchbar-input"
            minLength={3}
            min={3}
          />
          <button
            onClick={(event) => handleClick(event)}
            type="submit"
            className="search-btn"
          >
            busca
          </button>
        </div>
      </form>
    </div>
  );
}
