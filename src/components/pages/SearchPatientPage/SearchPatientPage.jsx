import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getByPages } from '../../../state/rickAndMorty/charactersSlice';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import SearchPatientTemplate from '../../UI/templates/SearchPatientTemplate/SearchPatientTemplate';

const SearchPatientPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRickAndMorty())
      .then(() => dispatch(
        getByPages({ cutIndex: 5 }),
      ));
  }, []);

  return (
    <div>
      <SearchPatientTemplate />
    </div>
  );
};

export default SearchPatientPage;
