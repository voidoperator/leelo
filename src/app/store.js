import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from './appSlice';

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
  },
});
