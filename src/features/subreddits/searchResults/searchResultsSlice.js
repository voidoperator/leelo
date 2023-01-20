import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
  'searchResults/fetchSearchResults',
  async (searchTerm) => {
    const termToSearch = searchTerm.split(' ').join('%20');
    const apiEndPoint = `https://www.reddit.com/search.json?q=${termToSearch}&type=sr`;
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    return json;
  }
);

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    isLoading: false,
    hasError: false,
    allSearchResults: [],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.allSearchResults.push(action.payload);
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default searchResultsSlice.reducer;
export const selectAllSearchResults = (state) => state.allSearchResults;
