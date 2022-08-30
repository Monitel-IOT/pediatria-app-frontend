/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCharactersRickAndMorty } from '../../thunkAction/rickAndMorty/rickAndMortyThunk';

const initialState = {
  loading: false,
  error: null,
  info: null,
  results: [],
  resultsByPage: [],
};

const charactersSlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    getByPages: (state, action) => {
      if (action.payload.cutIndex) {
        const { cutIndex } = action.payload;
        const pages = [];
        let page = [];
        state.results.forEach((v, i) => {
          if (i === 0 || i % cutIndex !== 0) {
            page.push(v);
          } else {
            pages.push([...page]);
            page = [v];
          }
        });
        if (page.length > 1) {
          pages.push([...page]);
        }
        state.resultsByPage = pages;
      }
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
      state.loading = false;
    });
    builder.addCase(getCharactersRickAndMorty.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { getByPages } = charactersSlice.actions;
export default charactersSlice.reducer;
