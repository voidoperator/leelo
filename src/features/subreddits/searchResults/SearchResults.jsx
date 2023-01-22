import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchResults } from './searchResultsSlice';
import {
  fetchRedditPosts,
  setDomainPath,
  resetPosts,
} from '../../posts/postsSlice';
import {
  fixImgUrl,
  fixNumber,
  handleDisplayError,
} from '../../../util/utilities';
import { DefaultRedditIcon } from '../../../Components/Logos';

export function SearchResults() {
  const dispatch = useDispatch();
  const { allSearchResults } = useSelector(selectSearchResults);

  const handleClick = (subredditToFetch) => {
    dispatch(setDomainPath(subredditToFetch));
    dispatch(resetPosts());
    dispatch(fetchRedditPosts());
  };

  return (
    <div className="searchresults-grid">
      <ul className="search-result-list">
        {allSearchResults
          .filter(({ data }) => {
            return data.subscribers > 100;
          })
          .map(({ data }, index) => {
            const subs = fixNumber(data.subscribers);
            let imgUrl = data.icon_img || data.community_icon;
            if (imgUrl) imgUrl = fixImgUrl(imgUrl);
            return (
              <li
                key={`${data.id}${data.name}${index}`}
                className="search-result"
                onClickCapture={() => handleClick(data.display_name_prefixed)}
              >
                <div className="search-sr-icon">
                  <div className="search-sr-icon">
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
                    <div className="sr-name">{data.display_name_prefixed}</div>
                  </div>
                  <div className="sr-sub-count">{subs}</div>
                </div>
                <div className="minimal-text">{data.title}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
