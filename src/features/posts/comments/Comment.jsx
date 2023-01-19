import React from 'react';

export function Comment(props) {
  const { text, author, upVotes, timePosted, isOP } = props;
  return (
    <div className="flex flex-col p-2 my-2 transition-all bg-gray-700 border border-gray-700 rounded-md shadow-lg hover:border-gray-600">
      <div
        id="avatar-author"
        className="flex flex-row items-center gap-2 mb-2 text-gray-400"
      >
        <div id="author" className="flex flex-row">
          <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
      <div className="">
        <h4 className="text-base text-gray-300 post-author">{text}</h4>
      </div>
    </div>
  );
}
