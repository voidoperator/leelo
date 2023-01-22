import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <ul className="search-result-list">
        {allSearchResults.map((result, index) => {
          const { data } = result;
          if (data.subscribers < 500) return null;
          const subs = fixNumber(data.subscribers) || '0';
          let imgUrl = data.icon_img || data.community_icon;
          if (imgUrl) imgUrl = fixImgUrl(imgUrl);
          return (
            <li
              key={`${data.id}${data.name}${index}`}
              className="search-result"
            >
              <div className="flex flex-row items-center justify-between">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={data.display_name}
                    title={data.display_name}
                    onError={handleDisplayError}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <DefaultRedditIcon styles="w-6 h-6 rounded-full" />
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
  );
}
