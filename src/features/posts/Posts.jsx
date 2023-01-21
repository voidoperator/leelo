import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  fetchRedditPosts,
  selectRedditPosts,
  setDomainPath,
} from './postsSlice';
import { fixTime } from '../../util/utilities';
import { LetterLogo } from '../../Components/Logos';
import { LoadingSpinner } from '../../Components/LoadingSpinner';
import { ErrorCard } from '../../Components/ErrorCard';
import { Pagination } from './pagination/Pagination';
import { Post } from './Post';

export function Posts() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { redditPosts, isLoading, hasError, nextPage } =
    useSelector(selectRedditPosts);
  const currentPath = location.pathname;

  useEffect(() => {
    dispatch(setDomainPath(currentPath));
  }, [location]);

  useEffect(() => {
    dispatch(fetchRedditPosts());
  }, [dispatch, location]);

  const handleNextPage = (page) => {
    dispatch(fetchRedditPosts(page));
  };

  return (
    <main className="posts-grid">
      <div className="posts-wrapper">
        <div className="header-logo">
          <div className="logo-wrapper">
            <div className="logo-container">
              <LetterLogo />
            </div>
          </div>
        </div>
        {redditPosts &&
          redditPosts.map((data) => {
            return data.map((post) => {
              const postPath = post.data;
              const iconUrl =
                postPath.sr_detail.icon_img ||
                postPath.sr_detail.community_icon;
              const isVideo = postPath.is_video;
              const videoUrl = isVideo
                ? postPath.media.reddit_video.fallback_url.split('?').shift()
                : '';
              const videoSize = isVideo
                ? {
                    height: postPath.media.reddit_video.height,
                    width: postPath.media.reddit_video.height,
                  }
                : '';
              return (
                <Post
                  iconUrl={iconUrl}
                  key={postPath.id}
                  subredditName={postPath.subreddit_name_prefixed}
                  author={postPath.author}
                  numberOfComments={postPath.num_comments}
                  url={postPath.permalink}
                  upVotes={postPath.score}
                  title={postPath.title}
                  description={postPath.selftext}
                  postTime={fixTime(postPath.created_utc)}
                  imageUrl={postPath.url_overridden_by_dest}
                  isVideo={postPath.is_video}
                  videoUrl={videoUrl}
                  videoSize={videoSize}
                  id={postPath.id}
                />
              );
            });
          })}
        {isLoading && <LoadingSpinner />}
        {hasError && <ErrorCard />}
        {!isLoading && !hasError && redditPosts && (
          <Pagination destination={nextPage} handleClick={handleNextPage} />
        )}
      </div>
    </main>
  );
}
