import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, orderById } from '../../../../state/rickAndMorty/charactersSlice';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../organisms/Card/Card';
import TableList from '../../organisms/TableList/TableList';

const data = {
  head: ['DNI', 'Nombre', 'Apellidos', 'Fecha de Nacimiento'],
  body: [
    {
      dni: '6',
      nombre: 't',
      apellidos: 'suarez',
      fechaNacimiento: '14/05/20',
    },
    {
      dni: '00000',
      nombre: 'ttttrrrr',
      apellidos: 'r',
      fechaNacimiento: '14/05/22',
    },
    {
      dni: '11123',
      nombre: 'eeeeeee',
      apellidos: 'perez',
      fechaNacimiento: '14/05/96',
    },
    {
      dni: '1111',
      nombre: '1t',
      apellidos: 'ger',
      fechaNacimiento: '14/09/22',
    },
    {
      dni: '5555r',
      nombre: 'y',
      apellidos: 'x',
      fechaNacimiento: '10/01/22',
    },
    {
      dni: '73049941',
      nombre: 'cristian',
      apellidos: 'benites',
      fechaNacimiento: '30/05/22',
    },
    {
      dni: '5555555',
      nombre: 'taer',
      apellidos: 'os',
      fechaNacimiento: '14/05/22',
    },
    {
      dni: 'rgfhfh6666',
      nombre: 'ereee',
      apellidos: '7',
      fechaNacimiento: '14/05/22',
    },
    {
      dni: 'oooooooo',
      nombre: 'oowww',
      apellidos: 't',
      fechaNacimiento: '14/05/22',
    },
  ],
};

const SearchPatientTemplate = () => {
  const [query, setQuery] = useState('');
  const cs = Object.keys(data.body[0]);

  function filter(rs, filt) {
    return rs.filter((r) => cs.some((c) => r[c].toLowerCase().indexOf(filt.toLowerCase()) > -1));
  }
  const {
    resultsByPage,
    page,
    toggleSort,
  } = useSelector((state) => state.charactersRickAndMortyReducer);
  const dispatch = useDispatch();

  return (
    <main className="p-5 bg-gray-100 h-screen">
      <Card className="mt-4">
        <Typography component="h4" className="mb-0">
          Busque por DNI, Nombre, Apellido o Fecha de Nacimiento:
        </Typography>
        <Input placeholder="Buscar..." type="text" onChange={(e) => setQuery(e.target.value)} />

        <div className="ml-auto">
          <span className="mr-2">Ordenar: </span>
          <Button primary onClick={() => dispatch(orderById())}>
            {toggleSort ? 'Descendente' : 'Ascendente'}
          </Button>
        </div>
      </Card>
      <Card className="mt-4">
        <Typography component="h3" className="mb-2">
          Lista de Pacientes
        </Typography>
        <TableList data={{ head: data.head, body: filter(data.body, query) }} />
        {/* {resultsByPage[page]?.map((character) => (
          <div key={character.id}>
            <h2>{`${character.id}.- ${character.name}`}</h2>
          </div>
        ))} */}
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
