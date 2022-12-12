import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { changePage, filterBy } from '../../../../state/patients/patientsSlice';
import Button from '../../atoms/Button/Button';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../../layout/Card/Card';
import TableList from '../../organisms/TableList/TableList';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Container from '../../../layout/Container/Container';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientCard from '../../organisms/PatientCard/PatientCard';
import IconInput from '../../atoms/IconInput/IconInput';

// const data = {
//   head: ['DNI', 'Nombre', 'Apellidos', 'Fecha de Nacimiento'],
//   body: [],
// };

const SearchPatientTemplate = () => {
  const { resultsByPage, page } = useSelector((state) => state.patientsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataPages = [
    {
      link: '/searchPatient',
      text: 'Lista de Pacientes',
    }];
  return (
    <Wrapper>
      <Container>
        <main className="py-4 bg-gray-100">
          <section className="lg:flex items-stretch">
            <PageHeader title="Lista de Pacientes" dataPages={dataPages} />
            <div className="mt-2 ml-auto md:flex items-center">
              <IconInput
                iconRigth={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                placeholder="Buscar"
                type="text"
                onChange={(e) => dispatch(filterBy([e.target.value, ['nombre']]))}
              />
              <Button primary uppercase className="ml-2" onClick={() => navigate('/nuevo-paciente')}>
                Nuevo Paciente
              </Button>
            </div>
          </section>
          <div className="sm:hidden">
            {resultsByPage[page]?.map((patient) => (
              <PatientCard key={patient.nombre} patient={patient} />
            ))}
          </div>

          <Card className="mt-4 hidden sm:block">
            {resultsByPage[page] ? (
              <TableList data={{
                // head: Object.keys(resultsByPage[page][0]),
                head: ['DNI', 'Nombre', 'Apellidos', 'Fecha de Nacimiento'],
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
          {resultsByPage.length > 1
          && (
          <Card className="mt-4">
            <Pager
              maxPages={resultsByPage.length}
              index={page}
              onChange={(pageIndex) => dispatch(changePage(pageIndex))}
            />
          </Card>
          )}
        </main>
      </Container>
    </Wrapper>
  );
};

export default SearchPatientTemplate;
