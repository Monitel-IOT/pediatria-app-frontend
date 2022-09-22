import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../../../layout/Wrapper/Wrapper';

const DashboardTemplate = () => {
  const estado = useSelector((state) => state.charactersRickAndMortyReducer);
  console.log(estado.loading);
  return (
    <Wrapper>
      <div className="h-[calc(100vh-5rem)]">DashboardTemplae</div>
    </Wrapper>
  );
};

export default DashboardTemplate;
