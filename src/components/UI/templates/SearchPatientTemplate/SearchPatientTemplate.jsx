import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, orderById } from '../../../../state/rickAndMorty/charactersSlice';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../organisms/Card/Card';

const SearchPatientTemplate = () => {
  const {
    resultsByPage,
    page,
    toggleSort,
  } = useSelector((state) => state.charactersRickAndMortyReducer);
  const dispatch = useDispatch();

  return (
    <main className="p-5 bg-gray-100 h-screen">
      <Card className="mt-4">
        Search header ...
        <div className="ml-auto">
          <span className="mr-2">Ordenar: </span>
          <Button primary onClick={() => dispatch(orderById())}>
            {toggleSort ? 'Descendente' : 'Ascendente'}
          </Button>
        </div>
      </Card>
      <Card className="mt-4">
        <Typography component="h3" className="mb-2">
          List of Characters
        </Typography>
        {resultsByPage[page]?.map((character) => (
          <div key={character.id}>
            <h2>{`${character.id}.- ${character.name}`}</h2>
          </div>
        ))}
      </Card>
      <Card className="mt-4">
        <Pager
          maxPages={resultsByPage.length}
          index={page}
          onChange={(pageIndex) => dispatch(changePage(pageIndex))}
        />
      </Card>
    </main>
  );
};

export default SearchPatientTemplate;
