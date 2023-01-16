import React from 'react';
import { Post } from './Post';
import { LetterLogo } from '../../Components/Logos';
import { Pagination } from './pagination/Pagination';

export function Posts() {
  return (
    <div className="body-grid">
      <div className="body-wrapper">
        <div className="posts">
          <div className="logo-container">
            <div className="logo-wrapper">
              <LetterLogo />
            </div>
          </div>
          <Post />
          <Post />
          <Post />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
