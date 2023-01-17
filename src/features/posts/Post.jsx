import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

export function Post() {
  const upVotes = 500;
  const subredditName = 'r/cyberpunk';
  const postTime = '8 hours ago';

  return (
    <div className="post-wrapper">
      <div className="post-grid">
        <div className="upvotes">
          <span className="votes">{upVotes}</span>
          <span className="votes-deco" />
        </div>
        <div className="post-info">
          <div className="name-icon-wrapper">
            <QuestionMarkCircleIcon className="subreddit-icon" />
            <div className="subreddit-name">{subredditName}</div>
          </div>
          <author className="post-author">Posted by u/someone</author>
          <time className="post-date">{postTime}</time>
        </div>
        <div className="post-content">
          <div className="post-title">Let the good times roll 🤣🤣🤣</div>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{' '}
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="post-icons">
          <QuestionMarkCircleIcon className="subreddit-icon" />
          <QuestionMarkCircleIcon className="subreddit-icon" />
        </div>
      </div>
    </div>
  );
}
