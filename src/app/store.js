import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
  },
});
