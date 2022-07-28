import { configureStore } from '@reduxjs/toolkit';
import charactersRickAndMortyReducer from './rickAndMorty/charactersSlice';

export default configureStore({
  reducer: {
    charactersRickAndMortyReducer,
  },
});
