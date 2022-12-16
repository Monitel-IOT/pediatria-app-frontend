import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAppointnmentForm } from '../../../../state/appointments/appointmentsSlice';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Modal from '../../molecules/Modal/Modal';
import AppointmentList from '../../organisms/AppointmentList/AppointmentList';
import NewAppointmentForm from '../../organisms/NewAppointmentForm/NewAppointmentForm';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientDetails from '../../organisms/PatientDetails/PatientDetails';

const PatientTemplate = () => {
  const { getPatientLoading } = useSelector((state) => state.getPatientReducer);
  const { getAllAppointmentsLoading } = useSelector((state) => state.getAllAppointmentsReducer);
  const { showAppointmentForm } = useSelector((state) => state.appointmentsReducer);
  const dispatch = useDispatch();
  const dataPages = [
    {
      link: '/searchPatient',
      text: 'Lista de Pacientes',
    },
    {
      link: '#',
      text: 'Paciente',
    }];

  return (
    <Wrapper>
      <Container className="h-[calc(100vh-5rem)] pt-4">

        <Modal isOpen={showAppointmentForm} closeModal={() => dispatch(closeAppointnmentForm())} className="!w-[900px]" showXMark>
          <NewAppointmentForm />
        </Modal>
        <PageHeader title="Paciente" dataPages={dataPages} />
        <div>
          {getPatientLoading || getAllAppointmentsLoading
            ? <div className="flex justify-center mt-8">Cargando...</div>
            : (
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <PatientDetails />
                </div>
                <div>
                  <AppointmentList />
                </div>
              </div>
            )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default PatientTemplate;
