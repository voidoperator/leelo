/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SideNav } from '../features/sideNav/SideNav';
import { Posts } from '../features/posts/Posts';
import { Subreddits } from '../features/subreddits/Subreddits';
import ROUTES from './routes';
import { fetchRedditPosts, selectRedditPosts } from './appSlice';

export default function App() {
  const posts = useSelector(selectRedditPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedditPosts());
  }, [dispatch]);

  return (
    <Router>
      <SideNav routes={ROUTES} />
      <Posts posts={posts.redditPosts} />
      <Subreddits />
    </Router>
  );
}
