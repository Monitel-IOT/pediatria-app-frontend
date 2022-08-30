import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '../../atoms/Typography/Typography';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../organisms/Card/Card';

const SearchPatientTemplate = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const resultsByPage = useSelector((state) => state.charactersRickAndMortyReducer.resultsByPage);

  const changeIndex = (page) => {
    setPageIndex(page - 1);
  };

  return (
    <main className="p-5 bg-gray-100 h-screen">
      <Card className="mt-4">
        Search header ...
      </Card>
      <Card className="mt-4">
        <Typography component="h3" className="mb-2">
          List of Characters
        </Typography>
        {resultsByPage[pageIndex]?.map((character) => (
          <div key={character.id}>
            <h2>{`${character.id}.- ${character.name}`}</h2>
          </div>
        ))}
      </Card>
      <Card className="mt-4">
        <Pager maxPages={resultsByPage.length} index={pageIndex} onChange={changeIndex} />
      </Card>
    </main>
  );
};

export default SearchPatientTemplate;
