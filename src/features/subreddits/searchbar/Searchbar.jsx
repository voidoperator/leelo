import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from './searchbarSlice';

export function Searchbar() {
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { value } = target;
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="searchbar-grid">
      <form>
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
            onChange={(event) => handleInput(event)}
            type="search"
            id="default-search"
            className="searchbar-input"
            placeholder="busca..."
            required
          />
          <button type="submit" className="search-btn">
            Busca
          </button>
        </div>
      </form>
    </div>
  );
}
