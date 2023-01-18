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
    title,
    author,
    subredditName,
    numberOfComments,
    imagePreview,
    description,
    upVotes,
    url,
    isVideo,
    postTime,
    iconUrl,
  } = props;

  let fixedIcon = iconUrl;
  if (iconUrl) {
    const newIcon = iconUrl.split('.');
    if (newIcon.length !== 5) {
      const iconCopy = [...newIcon];
      const extension = newIcon[3].split('?').splice(0, 1).join('');
      iconCopy.splice(3, 1);
      iconCopy.push(extension);
      fixedIcon = iconCopy.join('.');
    }
  }
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
            {iconUrl && (
              <a
                href={`https://www.reddit.com/${subredditName}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={fixedIcon}
                  alt={title}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </a>
            )}
            {iconUrl === null && (
              <a
                href={`https://www.reddit.com/${subredditName}`}
                target="_blank"
                rel="noreferrer"
              >
                <QuestionMarkCircleIcon className="subreddit-icon" />
              </a>
            )}
            <a
              href={`https://www.reddit.com/${subredditName}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="subreddit-name">{subredditName}</div>
            </a>
          </div>
          <span className="post-author">
            Posted by
            <a
              href={`https://www.reddit.com/user/${author}`}
              target="_blank"
              rel="noreferrer"
            >
              {` u/${author}`}
            </a>
            <span className="post-time">{`• ${postTime}`}</span>
          </span>
        </div>
        <div className="post-content">
          <div className="post-title">{title}</div>
          {imagePreview && (
            <img
              src={imagePreview}
              onError={(e) => (e.target.style.display = 'none')}
              alt={title}
              title={title}
            />
          )}
          {description && <div className="post-description">{description}</div>}
        </div>
        <div className="post-icons">
          <a href={`https://reddit.com${url}`} target="_blank" rel="noreferrer">
            <GlobeAltIcon className="secondary-icons" />
          </a>
          <div className="comments-group">
            <ChatBubbleOvalLeftEllipsisIcon className="secondary-icons" />
            <div className="comment-number">{numberOfComments}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
