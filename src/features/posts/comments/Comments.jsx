/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments } from './commentsSlice';
import { Comment } from './Comment';
import { LoadingSpinner } from '../../../Components/LoadingSpinner';
import { ErrorCard } from '../../../Components/ErrorCard';
import { fixTime, fixNumber } from '../../../util/utilities';

export function Comments(props) {
  const { url, id } = props;
  const dispatch = useDispatch();
  const { allComments, isLoading, hasError } = useSelector(selectComments);

  useEffect(() => {
    if (allComments[id]) return;
    dispatch(fetchComments({ url, id }));
  }, [dispatch]);

  const comments = allComments[id] || [];

  return (
    <div className="comments-wrapper">
      {isLoading && <LoadingSpinner />}
      {hasError && <ErrorCard />}
      {!isLoading &&
        !hasError &&
        comments.map((comment) => {
          const commentPath = comment.data;
          return (
            <Comment
              key={commentPath.id}
              text={commentPath.body}
              author={commentPath.author}
              isOP={commentPath.isSubmitter}
              isMOD={commentPath.distinguished}
              timePosted={fixTime(commentPath.created_utc)}
              upVotes={fixNumber(commentPath.ups)}
              permalink={commentPath.permalink}
            />
          );
        })}
      {!isLoading && !hasError && (
        <div className="flex flex-col items-center pagination">
          <div className="flex mt-2 pagination">
            <a
              href={`https://www.reddit.com${url}}`}
              className="shadow pagination-button"
              target="_blank"
              rel="noreferrer"
            >
              Mas
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
