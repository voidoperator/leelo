import React from 'react';
import { Post } from './Post';
import { LetterLogo } from '../../Components/Logos';
import { Pagination } from './pagination/Pagination';

export function Posts() {
  return (
    <main className="posts-grid">
      <div className="posts-wrapper">
        <div className="posts-container">
          <div className="logo-wrapper">
            <div className="logo-container">
              <LetterLogo />
            </div>
          </div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Pagination />
      </div>
    </main>
  );
}
