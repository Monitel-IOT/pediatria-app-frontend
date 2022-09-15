import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import HomeTemplate from '../../UI/templates/HomeTemplate/HomeTemplate';
// import { ReactComponent as Trash } from '../../../assets/svg/Trash.svg';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div>
      <HomeTemplate />
    </div>
  );
};

export default HomePage;
