/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCharactersRickAndMorty } from '../../thunkAction/rickAndMorty/rickAndMortyThunk';
import { sortLists, flatByPages } from '../../utils';

const initialState = {
  loading: false,
  error: null,
  info: null,
  toggleSort: true,
  page: 0,
  results: [],
  sortedResults: [],
  resultsByPage: [],
};

const charactersSlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    orderById: (state) => {
      const sortedResults = sortLists('id', state.results, state.toggleSort);
      const pages = flatByPages(sortedResults, 5);
      state.toggleSort = !state.toggleSort;
      state.sortedResults = sortedResults;
      state.resultsByPage = pages;
    },
    changePage: (state, action) => {
      state.page = action.payload - 1;
    },
    initialState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getCharactersRickAndMorty.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharactersRickAndMorty.fulfilled, (state, action) => {
      state.info = action.payload.info;
      state.results = action.payload.results;
      state.sortedResults = action.payload.results;
      state.resultsByPage = flatByPages(action.payload.results, 5);
      state.loading = false;
    });
    builder.addCase(getCharactersRickAndMorty.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { orderById, changePage } = charactersSlice.actions;
export default charactersSlice.reducer;
