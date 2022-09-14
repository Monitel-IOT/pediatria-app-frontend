import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import SearchPatientTemplate from '../../UI/templates/SearchPatientTemplate/SearchPatientTemplate';
import NavbarTemplate from '../../UI/templates/NavbarTemplate/NavbarTemplate';

const SearchPatientPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div>
      <NavbarTemplate />
      <SearchPatientTemplate />
    </div>
  );
};

export default SearchPatientPage;
