import React from 'react';
import { LetterLogo } from '../../Components/Logos';
import { Pagination } from './pagination/Pagination';
import { Post } from './Post';

export function Posts(props) {
  const { posts } = props;
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
        {posts.map((data) => {
          return data.map((post) => {
            const postPath = post.data;
            return (
              <Post
                key={postPath.id}
                subredditName={postPath.subreddit_name_prefixed}
                author={postPath.author}
                numberOfComments={postPath.num_comments}
                url={postPath.url}
                imagePreview={postPath.url_overridden_by_dest}
                upVotes={postPath.score}
                title={postPath.title}
                description={postPath.description}
                isVideo={postPath.is_video}
                postTime={postPath.postTime}
              />
            );
          });
        })}
        <Pagination />
      </div>
    </main>
  );
}
