/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import {
  ArrowUpCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import { Comments } from './comments/Comments';

export function Post(props) {
  const [displayComments, setDisplayComments] = useState(false);

  const {
    title,
    author,
    subredditName,
    numberOfComments,
    imageUrl,
    description,
    upVotes,
    url,
    postTime,
    iconUrl,
    isVideo,
    videoUrl,
    videoSize,
    handleTime,
    id,
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

  const handleNumbers = (num) => {
    const prettyNum =
      num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
    return prettyNum;
  };

  return (
    <div className="post-wrapper">
      <div className="upvotes">
        <ArrowUpCircleIcon className="vote-icon" />
        <span className="votes">{handleNumbers(upVotes)}</span>
        <span className="votes-deco" />
      </div>
      <div className="post-group">
        <div className="post-info">
          <div className="name-icon-wrapper">
            <a
              href={`https://www.reddit.com/${subredditName}`}
              target="_blank"
              rel="noreferrer"
            >
              {iconUrl && (
                <img
                  className="w-8 h-8 rounded-full"
                  src={fixedIcon}
                  alt={title}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              )}
              {iconUrl === null && (
                <QuestionMarkCircleIcon className="subreddit-icon" />
              )}
            </a>
            <a
              href={`https://www.reddit.com/${subredditName}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="subreddit-name">{subredditName}</div>
            </a>
          </div>
          <span className="post-author">
            Publicado por
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
          {imageUrl && !isVideo && (
            <img
              src={imageUrl}
              onError={(e) => (e.target.style.display = 'none')}
              alt={title}
              title={title}
            />
          )}
          {isVideo && (
            <video
              width={videoSize.width}
              height={videoSize.height}
              muted
              controls
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          {description && <div className="post-description">{description}</div>}
        </div>
        <div className="post-icons">
          <a href={`https://reddit.com${url}`} target="_blank" rel="noreferrer">
            <GlobeAltIcon className="secondary-icons" />
          </a>
          <div className="comments-group">
            <button
              onClick={() => setDisplayComments(!displayComments)}
              type="button"
              className="comments-group"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="secondary-icons" />
              <div className="comment-number">
                {handleNumbers(numberOfComments)}
              </div>
            </button>
          </div>
        </div>
        {displayComments && (
          <Comments
            id={id}
            url={url}
            handleNumbers={handleNumbers}
            handleTime={handleTime}
          />
        )}
      </div>
    </div>
  );
}
