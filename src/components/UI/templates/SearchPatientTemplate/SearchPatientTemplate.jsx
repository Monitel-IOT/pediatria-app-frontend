import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, orderById, filterBy } from '../../../../state/patients/patientsSlice';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../../layout/Card/Card';
import TableList from '../../organisms/TableList/TableList';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Container from '../../../layout/Container/Container';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientCard from '../../organisms/PatientCard/PatientCard';

// const data = {
//   head: ['DNI', 'Nombre', 'Apellidos', 'Fecha de Nacimiento'],
//   body: [],
// };

const SearchPatientTemplate = () => {
  const {
    resultsByPage,
    page,
    toggleSort,
  } = useSelector((state) => state.patientsReducer);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <main className="py-4 bg-gray-100">
          <PageHeader title="Pacientes" />
          <Card className="mt-4">
            <Typography component="h4" className="mb-0">
              Busque por DNI, Nombre, Apellido o Fecha de Nacimiento:
            </Typography>
            <Input
              placeholder="Buscar..."
              type="text"
              onChange={(e) => dispatch(filterBy([e.target.value, ['nombre']]))}
            />

            <div className="ml-auto">
              <span className="mr-2">Ordenar: </span>
              <Button primary onClick={() => dispatch(orderById())}>
                {toggleSort ? 'Descendente' : 'Ascendente'}
              </Button>
            </div>
          </Card>
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />

          <Card className="mt-4">
            <Typography component="h3" className="mb-2">
              Lista de Pacientes
            </Typography>
            {resultsByPage[page] ? (
              <TableList data={{
                head: Object.keys(resultsByPage[page][0]),
                body: resultsByPage[page],
              }}
              />
            ) : <div>Cargando Data...</div>}
          </Card>
          {/* {resultsByPage[page]?.map((character) => (
          <div key={character.id}>
            <h2>{`${character.id}.- ${character.name}`}</h2>
          </div>
        ))} */}
          <Card className="mt-4">
            <Pager
              maxPages={resultsByPage.length}
              index={page}
              onChange={(pageIndex) => dispatch(changePage(pageIndex))}
            />
          </Card>
        </main>
      </Container>
    </Wrapper>
  );
};

export default SearchPatientTemplate;
