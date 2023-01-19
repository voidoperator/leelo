import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRedditPosts = createAsyncThunk(
  'reddit/fetchRedditPosts',
  async (page, { getState }) => {
    const nextPage = page ? `&after=${page}` : '';
    const state = getState().redditPosts;
    const location = state.domainPath;
    const apiEndPoint = `https://www.reddit.com${location}`;
    const jsonParam = '.json?sr_detail=1';
    const response = await fetch(`${apiEndPoint}${jsonParam}${nextPage}`);
    const json = await response.json();
    return json;
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
    resetPosts: (state, action) => {
      state.redditPosts = [];
    },
    setDomainPath: (state, action) => {
      switch (action.payload) {
        case '/':
          state.domainPath = '/';
          return;
        case '/mejor':
          state.domainPath = '/top';
          return;
        case '/popular':
          state.domainPath = '/hot';
          return;
        case '/nuevo':
          state.domainPath = '/new';
          return;
        case '/trending':
          state.domainPath = '/rising';
          return;
        default:
          state.domainPath = '/';
      }
    },
  },
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

export const { setDomainPath, resetPosts } = fetchRedditPostsSlice.actions;
export const selectRedditPosts = (state) => state.redditPosts;
export default fetchRedditPostsSlice.reducer;
