/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowUpIcon } from '@heroicons/react/24/solid/';
import { translateApi } from '../../../util/utilities';

export function Comment(props) {
  const [translatedText, setTranslatedText] = useState('');
  const { text, author, upVotes, timePosted, isOP, isMOD, permalink } = props;
  const commentUrl = `https://www.reddit.com${permalink}`;
  const avatarStyle = isOP
    ? 'text-blue-300'
    : isMOD
    ? 'text-green-300'
    : 'text-gray-400';

  useEffect(() => {
    if (!text) return;
    const translate = async () => {
      const translation = await translateApi(text);
      setTranslatedText(translation);
    };
    translate();
  }, [text]);

  return (
    <div className="comment-container">
      <div className="comment-info-wrapper">
        <a
          href={`https://www.reddit.com/u/${author}`}
          target="_blank"
          rel="noreferrer"
          className="comment-info-container"
        >
          <div className="flex flex-row">
            <div className="avatar-svg">
              <svg
                className={`absolute w-8 h-8 ${avatarStyle} -left-1`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {isOP && (
            <span className={`mx-0 text-xs ${avatarStyle} minimal-text`}>
              OP
            </span>
          )}
          {isMOD && (
            <span className={`mx-0 text-xs ${avatarStyle} minimal-text`}>
              MOD
            </span>
          )}
          <span className="mx-0 minimal-text">{author}</span>
          <div className="mx-0 text-xs minimal-text">{timePosted}</div>
        </a>
        <a
          className="comment-upvotes"
          href={commentUrl}
          target="_blank"
          rel="noreferrer"
        >
          <ArrowUpIcon className="w-4 text-slate-400" />
          <span className="comment-upvotes">{upVotes}</span>
        </a>
      </div>
      <a
        className="comment-body"
        href={commentUrl}
        target="_blank"
        rel="noreferrer"
      >
        <ReactMarkdown disallowedElements={['a']} unwrapDisallowed>
          {translatedText}
        </ReactMarkdown>
      </a>
    </div>
  );
}
