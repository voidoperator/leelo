import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Searchbar } from './searchbar/Searchbar';
import { SearchResults } from './searchResults/SearchResults';
import { LoadingSpinner } from '../../Components/LoadingSpinner';
import { ErrorCard } from '../../Components/ErrorCard';
import { NoResultsCard } from '../../Components/NoResultsCard';
import { Pagination } from '../posts/pagination/Pagination';
import {
  selectSearchResults,
  fetchSearchResults,
} from './searchResults/searchResultsSlice';

export function Subreddits() {
  const dispatch = useDispatch();
  const {
    isLoading,
    hasError,
    amountOfResults,
    hasSearched,
    nextPage,
    searchTerm,
  } = useSelector(selectSearchResults);
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  const handleNextPage = (page) => {
    dispatch(fetchSearchResults({ searchTerm, page, pagination: true }));
  };

  return (
    <aside className="subreddits-grid">
      <div className="sub-grid">
        <Searchbar setCurrentSearchTerm={setCurrentSearchTerm} />
        {isLoading && <LoadingSpinner />}
        {hasError && <ErrorCard />}
        {!amountOfResults && hasSearched && <NoResultsCard />}
        {currentSearchTerm !== searchTerm && <SearchResults />}
        {!isLoading && !hasError && nextPage && (
          <div className="search-pagination">
            <Pagination destination={nextPage} handleClick={handleNextPage} />
          </div>
        )}
      </div>
    </aside>
  );
}
