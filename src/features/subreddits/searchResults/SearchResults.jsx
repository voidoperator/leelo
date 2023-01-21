import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { selectSearchResults, fetchSearchResults } from './searchResultsSlice';
import {
  fixImgUrl,
  fixNumber,
  handleDisplayError,
} from '../../../util/utilities';

export function SearchResults() {
  // const dispatch = useDispatch();
  const { allSearchResults } = useSelector(selectSearchResults);

  return (
    <div className="searchresults-grid">
      <div className="searchresults-wrapper">
        <ul className="w-full text-sm font-medium text-white bg-gray-700 border-gray-600 rounded-lg h-1/2">
          {allSearchResults.map((result, index) => {
            const { data } = result;
            const subs = fixNumber(data.subscribers) || '0';
            let imgUrl = data.icon_img || '';
            if (imgUrl) imgUrl = fixImgUrl(imgUrl);
            if (data.subreddit_type === 'restricted') return null;
            return (
              <li
                key={`${data.id}${data.name}${index}`}
                className="flex flex-col px-4 py-2 border-b border-gray-600 rounded-t-lg"
              >
                <div className="flex flex-row items-center justify-start">
                  <img
                    src={imgUrl}
                    alt={data.display_name}
                    title={data.display_name}
                    onError={handleDisplayError}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>{subs}</div>
                </div>
                <div>{data.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
