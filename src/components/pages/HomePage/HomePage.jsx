import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';

const HomePage = () => {
  const dispatch = useDispatch();
  const rickAndMorty = useSelector((state) => state.charactersRickAndMortyReducer);
  // const loading = useSelector((state) => state.charactersRickAndMortyReducer.loading);

  console.log('characters', rickAndMorty.results);

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div>
      <h1>Gestion Clinica</h1>
    </div>
  );
};

export default HomePage;
