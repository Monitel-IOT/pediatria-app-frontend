import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import SearchPatientTemplate from '../../UI/templates/SearchPatientTemplate/SearchPatientTemplate';
import { fetchPatients } from '../../../thunkAction/patients/patientsThunk';

const SearchPatientPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);
  useEffect(() => {
    dispatch(fetchPatients(user.token));
  }, []);

  return (
    <div>
      <SearchPatientTemplate />
    </div>
  );
};

export default SearchPatientPage;
