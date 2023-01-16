/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from './routes';
import { SideNav } from '../features/sideNav/SideNav';
import { Posts } from '../features/posts/Posts';
import { Subreddits } from '../features/subreddits/Subreddits';

export default function App() {
  return (
    <Router>
      <SideNav routes={ROUTES} />
      <Posts />
      <Subreddits />
    </Router>
  );
}
