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
          redditPosts.map((post) => {
            return post.map(({ data }) => {
              const iconUrl =
                data.sr_detail.icon_img || data.sr_detail.community_icon;
              const isVideo = data.is_video;
              const videoUrl = isVideo
                ? data.media.reddit_video.fallback_url.split('?').shift()
                : '';
              const videoSize = isVideo
                ? {
                    height: data.media.reddit_video.height,
                    width: data.media.reddit_video.height,
                  }
                : '';
              return (
                <Post
                  iconUrl={iconUrl}
                  key={data.id}
                  subredditName={data.subreddit_name_prefixed}
                  author={data.author}
                  numberOfComments={data.num_comments}
                  url={data.permalink}
                  upVotes={data.score}
                  title={data.title}
                  description={data.selftext}
                  postTime={fixTime(data.created_utc)}
                  imageUrl={data.url_overridden_by_dest}
                  isVideo={data.is_video}
                  isGallery={data.is_gallery}
                  galleryContent={data.media_metadata}
                  videoUrl={videoUrl}
                  videoSize={videoSize}
                  id={data.id}
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
