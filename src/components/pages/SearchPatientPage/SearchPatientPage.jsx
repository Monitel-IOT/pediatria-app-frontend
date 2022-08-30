import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import SearchPatientTemplate from '../../UI/templates/SearchPatientTemplate/SearchPatientTemplate';

const SearchPatientPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div>
      <SearchPatientTemplate />
    </div>
  );
};

export default SearchPatientPage;
