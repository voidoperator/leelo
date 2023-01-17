import React from 'react';

export function Pagination() {
  return (
    <div className="flex flex-col items-center pagination">
      <div className="inline-flex mt-2 pagination xs:mt-0">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-200 transition duration-300 bg-gray-600 border-gray-500 rounded-md hover:bg-gray-500"
        >
          Mas
        </button>
      </div>
    </div>
  );
}
