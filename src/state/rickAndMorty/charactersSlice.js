/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCharactersRickAndMorty } from '../../thunkAction/rickAndMorty/rickAndMortyThunk';

const initialState = {
  loading: false,
  error: null,
  info: null,
  results: null,
};

const charactersSlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
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

export default charactersSlice.reducer;
