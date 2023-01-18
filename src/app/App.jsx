/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
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
