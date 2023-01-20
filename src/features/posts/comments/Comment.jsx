import React from 'react';

export function Comment(props) {
  const { text, author, upVotes, timePosted, isOP } = props;
  return (
    <div className="comment-container">
      <div className="avatar-author">
        <div id="author" className="flex flex-row">
          <div className="avatar-svg">
            <svg
              className="absolute w-8 h-8 text-gray-400 -left-1"
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
        <span className="post-author">{author}</span>
      </div>
      <div className="comment-author">{text}</div>
    </div>
  );
}
