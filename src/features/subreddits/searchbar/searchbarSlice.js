import { createSlice } from '@reduxjs/toolkit';

const searchbarSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm;
export default searchbarSlice.reducer;
export const { setSearchTerm } = searchbarSlice.actions;
