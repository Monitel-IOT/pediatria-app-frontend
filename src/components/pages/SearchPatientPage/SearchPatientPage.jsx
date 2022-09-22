import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import SearchPatientTemplate from '../../UI/templates/SearchPatientTemplate/SearchPatientTemplate';
import { fetchPatients } from '../../../thunkAction/patients/patientsThunk';

const SearchPatientPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);
  useEffect(() => {
    dispatch(fetchPatients('632b905bc9eb8ed068053b0a'));
  }, []);

  return (
    <div>
      <SearchPatientTemplate />
    </div>
  );
};

export default SearchPatientPage;
