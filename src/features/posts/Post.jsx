import React from 'react';

export function Post() {
  return (
    <div className="post">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Lorem Ipsum
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Do est et dolor mollit consequat minim irure sint fugiat laborum. Do
            id aliqua elit incididunt excepteur ea eu. Laboris voluptate nulla
            ea elit. Officia est amet sunt sit commodo do sunt culpa aliqua
            labore aliqua occaecat nisi ut. Ipsum ex officia enim eiusmod.
          </p>
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
        </li>
      </ol>
    </div>
  );
}
