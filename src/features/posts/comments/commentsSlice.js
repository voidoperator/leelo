import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ url, id }) => {
    const apiEndPoint = `https://www.reddit.com${url}.json?limit=10`;
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    const data = json[1].data.children;
    console.log(data);
    return { id, data };
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    isLoading: false,
    hasError: false,
    dispTorFcomments: false,
    allComments: {},
  },
  reducers: {
    toggleDisplayComments: (state, action) => {
      state.displayComments = action.payload;
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      const { id, data } = action.payload;
      data.pop();
      state.allComments[id] = data;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default commentsSlice.reducer;
export const { toggleDisplayComments } = commentsSlice.actions;
export const selectComments = (state) => state.comments;
