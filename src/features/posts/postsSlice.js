import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRedditPosts = createAsyncThunk(
  'reddit/fetchRedditPosts',
  async (nextPage = '') => {
    const apiEndPoint = 'https://www.reddit.com/';
    const jsonParam = '.json';
    const nextPageParam = nextPage ? `?after=${nextPage}` : '';
    const response = await fetch(`${apiEndPoint}${jsonParam}${nextPageParam}`);
    const json = await response.json();
    return json;
  }
);

export const fetchRedditPostsSlice = createSlice({
  name: 'redditPosts',
  initialState: {
    isLoading: false,
    hasError: false,
    nextPage: '',
    redditPosts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchRedditPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchRedditPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.nextPage = action.payload.data.after;
      state.redditPosts.push(action.payload.data.children);
    },
    [fetchRedditPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectRedditPosts = (state) => state.redditPosts;
export default fetchRedditPostsSlice.reducer;
