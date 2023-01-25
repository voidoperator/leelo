import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ url, id }) => {
    const { data } = await axios.get(
      `https://www.reddit.com${decodeURI(url)}.json?limit=20`
    );
    return { id, children: data[1].data.children };
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    isLoading: false,
    hasError: false,
    allComments: {},
  },
  reducers: {
    toggleDisplayComments: (state, action) => {
      state.displayComments = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        const { id, children } = action.payload;
        children.pop();
        state.allComments[id] = children;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default commentsSlice.reducer;
export const { toggleDisplayComments } = commentsSlice.actions;
export const selectComments = (state) => state.comments;
