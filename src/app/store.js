import { configureStore } from '@reduxjs/toolkit';
import redditPostsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/posts/comments/commentsSlice';
import searchbarReducer from '../features/subreddits/searchbar/searchbarSlice';
import searchResultsReducer from '../features/subreddits/searchResults/searchResultsSlice';

export const store = configureStore({
  reducer: {
    redditPosts: redditPostsReducer,
    comments: commentsReducer,
    searchTerm: searchbarReducer,
    searchResults: searchResultsReducer,
  },
});
