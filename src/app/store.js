import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/posts/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
    comments: commentsReducer,
  },
});
