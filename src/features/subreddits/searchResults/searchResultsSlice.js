import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
  'searchResults/fetchSearchResults',
  async ({ searchTerm, page, pagination }) => {
    const loadMore = !!pagination;
    const nextPage = page ? `&after=${page}` : '';
    const termToSearch = searchTerm.split(' ').join('%20');
    const apiEndPoint = `https://www.reddit.com/search.json?q=${termToSearch}${nextPage}&type=sr`;
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    return { termToSearch, loadMore, data };
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
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.hasSearched = false;
        state.isLoading = true;
        state.hasError = false;
        state.noResults = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.hasSearched = true;
        const { termToSearch, loadMore, data } = action.payload;
        state.searchTerm = termToSearch;
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
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.hasSearched = false;
        state.isLoading = false;
        state.hasError = true;
        state.noResults = false;
      });
  },
});

export default searchResultsSlice.reducer;
export const selectSearchResults = (state) => state.searchResults;
