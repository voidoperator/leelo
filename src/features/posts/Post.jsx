/* eslint-disable no-return-assign */
import React from 'react';
import {
  ArrowUpCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';

export function Post(props) {
  const {
    subredditName,
    author,
    numberOfComments,
    url,
    imagePreview,
    upVotes,
    title,
    description,
    isVideo,
    postTime,
  } = props;

  // console.log(thumbnailUrl);

  return (
    <div className="post-wrapper">
      <div className="upvotes">
        <ArrowUpCircleIcon className="vote-icon" />
        <span className="votes">{upVotes}</span>
        <span className="votes-deco" />
      </div>
      <div className="post-group">
        <div className="post-info">
          <div className="name-icon-wrapper">
            <QuestionMarkCircleIcon className="subreddit-icon" />
            <div className="subreddit-name">{subredditName}</div>
          </div>
          <span className="post-author">Posted by u/{author}</span>
          <time className="post-date">{postTime}</time>
        </div>
        <div className="post-content">
          <div className="post-title">{title}</div>
          {imagePreview && (
            <img
              src={imagePreview}
              onError={(e) => (e.target.style.display = 'none')}
              alt={title}
            />
          )}
          {description && <div className="post-description">{description}</div>}
        </div>
        <div className="post-icons">
          <GlobeAltIcon className="secondary-icons" />
          <div className="comments-group">
            <ChatBubbleOvalLeftEllipsisIcon className="secondary-icons" />
            <div className="comment-number">{numberOfComments}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
