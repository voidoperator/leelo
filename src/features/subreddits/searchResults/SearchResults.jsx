import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { selectSearchResults, fetchSearchResults } from './searchResultsSlice';
import {
  fixImgUrl,
  fixNumber,
  handleDisplayError,
} from '../../../util/utilities';
import { DefaultRedditIcon } from '../../../Components/Logos';

export function SearchResults() {
  // const dispatch = useDispatch();
  const { allSearchResults } = useSelector(selectSearchResults);

  return (
    <div className="searchresults-grid">
      <div className="searchresults-wrapper">
        <ul className="w-full text-sm font-medium text-white bg-gray-700 border-gray-600 rounded-lg h-1/2">
          {allSearchResults.map((result, index) => {
            const { data } = result;
            if (data.subscribers < 500) return null;
            const subs = fixNumber(data.subscribers) || '0';
            let imgUrl = data.icon_img || data.community_icon;
            if (imgUrl) imgUrl = fixImgUrl(imgUrl);
            return (
              <li
                key={`${data.id}${data.name}${index}`}
                className="flex flex-col px-4 py-2 border-b border-gray-600 rounded-t-lg"
              >
                <div className="flex flex-row items-center justify-start">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={data.display_name}
                      title={data.display_name}
                      onError={handleDisplayError}
                      className="rounded-full w-7 h-7"
                    />
                  ) : (
                    <DefaultRedditIcon styles="w-7 h-7 rounded-full" />
                  )}
                  <div>{data.display_name_prefixed}</div>
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
