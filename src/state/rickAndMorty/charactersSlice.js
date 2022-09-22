/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCharactersRickAndMorty } from '../../thunkAction/rickAndMorty/rickAndMortyThunk';
import { sortLists, flatByPages, filterSearch } from '../../utils';

const initialState = {
  loading: false,
  error: null,
  info: null,
  toggleSort: true,
  page: 0,
  results: [],
  sortedResults: [],
  resultsByPage: [],
  resultsFiltered: [],
};

const charactersSlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    filterByQuery: (state, action) => {
      const filteredList = filterSearch(state.results, action.payload, ['name']);
      state.resultsFiltered = filteredList;
    },
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

export const {
  orderById, changePage, exampleFunction, filterByQuery,
} = charactersSlice.actions;
export default charactersSlice.reducer;
