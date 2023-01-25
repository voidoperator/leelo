import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchResults = createAsyncThunk(
  'searchResults/fetchSearchResults',
  async ({ searchTerm, page, pagination }) => {
    const apiEndPoint = `https://www.reddit.com/search.json?q=${decodeURI(
      searchTerm
    )}&after=${page}&type=sr`;
    const { data } = await axios.get(apiEndPoint);
    return { loadMore: !!pagination, searchTerm, data };
  }
);

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    isLoading: false,
    hasError: false,
    hasSearched: false,
    amountOfResults: 0,
    searchTerm: '',
    nextPage: '',
    allSearchResults: [],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.hasSearched = false;
        state.isLoading = true;
        state.hasError = false;
        state.noResults = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.hasSearched = true;
        const { searchTerm, loadMore, data } = action.payload;
        state.searchTerm = searchTerm;
        state.nextPage = data.data.after;
        state.amountOfResults = data.data.dist;
        if (loadMore) {
          state.allSearchResults = state.allSearchResults.concat(
            data.data.children
          );
        } else {
          state.allSearchResults = data.data.children;
        }
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.hasSearched = false;
        state.isLoading = false;
        state.hasError = true;
        state.noResults = false;
      });
  },
});

export default searchResultsSlice.reducer;
export const selectSearchResults = (state) => state.searchResults;
