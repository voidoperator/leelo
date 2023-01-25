import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRedditPosts = createAsyncThunk(
  'reddit/fetchRedditPosts',
  async (page, { getState }) => {
    const { domainPath } = getState().redditPosts;
    const { data } = await axios.get(
      `https://www.reddit.com${decodeURI(domainPath)}&after=${page}`
    );
    return data;
  }
);

const fetchRedditPostsSlice = createSlice({
  name: 'redditPosts',
  initialState: {
    isLoading: false,
    hasError: false,
    domainPath: '',
    nextPage: '',
    redditPosts: [],
  },
  reducers: {
    resetPosts: (state) => {
      state.redditPosts = [];
    },
    setDomainPath: (state, action) => {
      switch (action.payload) {
        case '/':
          state.domainPath = '/.json?sr_detail=1';
          return;
        case '/mejor':
          state.domainPath = '/top/.json?sr_detail=1';
          return;
        case '/popular':
          state.domainPath = '/hot/.json?sr_detail=1';
          return;
        case '/nuevo':
          state.domainPath = '/new/.json?sr_detail=1';
          return;
        case '/trending':
          state.domainPath = '/rising/.json?sr_detail=1';
          return;
        default:
          state.domainPath = `/${action.payload}/hot/.json?sr_detail=1`;
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditPosts.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(fetchRedditPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.nextPage = action.payload.data.after;
        state.redditPosts.push(action.payload.data.children);
      })
      .addCase(fetchRedditPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { setDomainPath, resetPosts } = fetchRedditPostsSlice.actions;
export const selectRedditPosts = (state) => state.redditPosts;
export default fetchRedditPostsSlice.reducer;
