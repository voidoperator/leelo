import React from 'react';

export function Pagination(props) {
  const { destination, handleClick } = props;
  return (
    <div className="flex flex-col items-center pagination">
      <div className="flex mt-2 pagination">
        <button
          onClick={() => handleClick(destination)}
          type="button"
          className="pagination-button"
        >
          Mas
        </button>
      </div>
    </div>
  );
}
