import { configureStore } from '@reduxjs/toolkit';
import charactersRickAndMortyReducer from './rickAndMorty/charactersSlice';
import patientsReducer from './patients/patientsSlice';

export default configureStore({
  reducer: {
    charactersRickAndMortyReducer,
    patientsReducer,
  },
});
