import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCog } from '@fortawesome/free-solid-svg-icons';
import { changePage, closeDeleteModal, filterBy } from '../../../../state/patients/patientsSlice';
import Button from '../../atoms/Button/Button';
import Pager from '../../molecules/Pager/Pager';
import Card from '../../../layout/Card/Card';
import TableList from '../../organisms/TableList/TableList';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Container from '../../../layout/Container/Container';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientCard from '../../organisms/PatientCard/PatientCard';
import IconInput from '../../atoms/IconInput/IconInput';
import Typography from '../../atoms/Typography/Typography';
import EmptySection from '../../organisms/EmptySection/EmptySection';
import Modal from '../../molecules/Modal/Modal';
import NewPatientForm from '../../organisms/NewPatientForm/NewPatientForm';
import { closePatientForm, openPatientForm } from '../../../../state/newPatientForm/newPatientFormSlice';
import PatientDelete from '../../organisms/PatientDelete/PatientDelete';

// const data = {
//   head: ['DNI', 'Nombre', 'Apellidos', 'Fecha de Nacimiento'],
//   body: [],
// };

const SearchPatientTemplate = () => {
  const {
    resultsByPage, page, loading, showDeleteModal,
  } = useSelector((state) => state.patientsReducer);
  const { showPatientForm } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();
  const dataPages = [
    {
      link: '/searchPatient',
      text: 'Lista de Pacientes',
    }];
  return (
    <Wrapper>
      <Container>
        <Modal isOpen={showPatientForm} closeModal={() => dispatch(closePatientForm())} className="!w-[900px]">
          <NewPatientForm />
        </Modal>
        <Modal isOpen={showDeleteModal} closeModal={() => dispatch(closeDeleteModal())} className="" showXMark>
          <PatientDelete />
        </Modal>
        <main className="py-4 bg-gray-100">
          <section className="lg:flex items-stretch">
            <PageHeader title="Lista de Pacientes" dataPages={dataPages} />
            {resultsByPage[0]?.length >= 1 && (
            <div className="mt-2 ml-auto md:flex items-center">
              <IconInput
                iconRigth={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                placeholder="Buscar"
                type="text"
                onChange={(e) => dispatch(filterBy([e.target.value, ['name']]))}
              />
              <Button
                primary
                uppercase
                className="ml-2"
                onClick={() => dispatch(openPatientForm())}
              >
                Nuevo Paciente
              </Button>
            </div>
            )}
          </section>
          {loading ? (
            <div className="flex items-center justify-center mt-[28%]">
              <div className="flex items-center flex-col justify-center">
                <FontAwesomeIcon icon={faCog} className="fa-spin text-[3rem] text-blue-main-500" />
                <Typography component="h3" className="pt-2 text-gray-600">Cargando...</Typography>
              </div>
            </div>
          ) : (
            <>
              {resultsByPage[0]?.length >= 1 && (
              <div>
                <div className="sm:hidden">
                  {resultsByPage[page]?.map((patient) => (
                    <PatientCard key={patient.id} patient={patient} />
                  ))}
                </div>
                <Card className="mt-4 hidden sm:block">
                  <TableList
                    data={{
                      // head: Object.keys(resultsByPage[page][0]),
                      head: [
                        'DNI',
                        'Nombre',
                        'Apellidos',
                        'Fecha de Nacimiento',
                      ],
                      body: resultsByPage[page] || [],
                    }}
                  />
                </Card>
              </div>
              )}
              {!(resultsByPage[0]?.length >= 1) && (
              <div className="mt-[20%]">
                <EmptySection />
              </div>
              )}
              {resultsByPage?.length > 1 && (
                <Card className="mt-4">
                  <Pager
                    maxPages={resultsByPage.length}
                    index={page}
                    onChange={(pageIndex) => dispatch(changePage(pageIndex))}
                  />
                </Card>
              )}
            </>
          )}
        </main>
      </Container>
    </Wrapper>
  );
};

export default SearchPatientTemplate;
