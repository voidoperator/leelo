import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
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
