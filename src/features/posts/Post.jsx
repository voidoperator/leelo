import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  ArrowUpCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { fixImgUrl, fixNumber, handleDisplayError } from '../../util/utilities';
import { DefaultRedditIcon } from '../../Components/Logos';
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
    id,
  } = props;

  return (
    <div className="post-wrapper">
      <div className="upvotes">
        <ArrowUpCircleIcon className="vote-icon" />
        <span className="votes">{fixNumber(upVotes)}</span>
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
              {iconUrl ? (
                <img
                  className="w-8 h-8 rounded-full"
                  src={fixImgUrl(iconUrl)}
                  alt={title}
                  onError={handleDisplayError}
                />
              ) : (
                <DefaultRedditIcon styles="subreddit-icon" />
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
          <span className="minimal-text">
            Publicado por
            <a
              href={`https://www.reddit.com/user/${author}`}
              target="_blank"
              rel="noreferrer"
            >
              {` u/${author}`}
            </a>
            <span className="minimal-text">{`• ${postTime}`}</span>
          </span>
        </div>
        <div className="post-content">
          <div className="post-title">{title}</div>
          {imageUrl && !isVideo && (
            <img
              src={imageUrl}
              onError={handleDisplayError}
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
          {description && (
            <div className="post-description">
              <ReactMarkdown disallowedElements={['a']} unwrapDisallowed>
                {description}
              </ReactMarkdown>
            </div>
          )}
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
                {fixNumber(numberOfComments)}
              </div>
            </button>
          </div>
        </div>
        {displayComments && <Comments id={id} url={url} />}
      </div>
    </div>
  );
}
