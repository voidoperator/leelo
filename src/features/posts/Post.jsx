import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  ArrowUpCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import {
  fixImgUrl,
  fixNumber,
  translateApi,
  getUrlsForGallery,
  handleDisplayError,
} from '../../util/utilities';
import { DefaultRedditIcon } from '../../Components/Logos';
import { Comments } from './comments/Comments';
import { YoutubeEmbed } from '../../Components/YoutubeEmbed';

export function Post(props) {
  const [translatedText, setTranslatedText] = useState('');
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
    isGallery,
    isYoutube,
    youtubeUrl,
    videoUrl,
    videoSize,
    galleryContent,
    id,
  } = props;

  useEffect(() => {
    if (!title) return;
    const translate = async () => {
      const translation = await translateApi(title);
      setTranslatedText(translation);
    };
    translate();
  }, [title]);

  let gallery;
  if (isGallery) {
    gallery = getUrlsForGallery(galleryContent) || '';
  }
  let youtubeId;
  if (isYoutube) {
    [, youtubeId] = youtubeUrl.split('=');
  }

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
                  alt={translatedText}
                  title={subredditName}
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
          <div className="post-title">{translatedText}</div>
          {imageUrl && !isVideo && (
            <img
              src={imageUrl}
              onError={handleDisplayError}
              alt={translatedText}
              title={translatedText}
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
          {isGallery &&
            gallery.map((imgUrl, index) => {
              return (
                <img
                  src={imgUrl}
                  alt={translatedText}
                  title={translatedText}
                  key={`${id}${index}`}
                  onError={handleDisplayError}
                />
              );
            })}
          {isYoutube && <YoutubeEmbed embedId={youtubeId} />}
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
