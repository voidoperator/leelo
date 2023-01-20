/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowUpIcon } from '@heroicons/react/24/solid/';

export function Comment(props) {
  const { text, author, upVotes, timePosted, isOP, isMOD } = props;
  const avatarStyle = isOP
    ? 'text-blue-300'
    : isMOD
    ? 'text-green-300'
    : 'text-gray-400';

  return (
    <div className="comment-container">
      <div className="comment-wrapper">
        <div className="avatar-author">
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
            <span className={`mx-0 text-xs ${avatarStyle} post-author`}>
              OP
            </span>
          )}
          {isMOD && (
            <span className={`mx-0 text-xs ${avatarStyle} post-author`}>
              MOD
            </span>
          )}
          <span className="mx-0 post-author">{author}</span>
          <div className="mx-0 text-xs post-author">{timePosted}</div>
        </div>
        <div className="avatar-author">
          <ArrowUpIcon className="w-4 text-slate-400" />
          <span className="post-author">{upVotes}</span>
        </div>
      </div>
      <div className="comment-author">
        <ReactMarkdown disallowedElements={['a']} unwrapDisallowed>
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
