import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SideNav } from '../features/sideNav/SideNav';
import { Posts } from '../features/posts/Posts';
import { Subreddits } from '../features/subreddits/Subreddits';
import ROUTES from './routes';

export default function App() {
  return (
    <Router>
      <SideNav routes={ROUTES} />
      <Posts />
      <Subreddits />
    </Router>
  );
}
