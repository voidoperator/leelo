import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRedditPosts = createAsyncThunk(
  'reddit/fetchRedditPosts',
  async () => {
    const response = await fetch('https://www.reddit.com/.json');
    const json = await response.json();
    return json.data.children;
  }
);

export const fetchRedditPostsSlice = createSlice({
  name: 'redditPosts',
  initialState: {
    isLoading: false,
    hasError: false,
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
      state.redditPosts.push(action.payload);
    },
    [fetchRedditPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectRedditPosts = (state) => state.redditPosts;
export default fetchRedditPostsSlice.reducer;
