import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import { fetchPatientsById } from '../../../../thunkAction/patients/patientsThunk';
import Button from '../../atoms/Button/Button';
import Measurement from '../../molecules/Measurement/Measurement';
import Container from '../../../layout/Container/Container';
import { updateAppointmentByIdAPI } from '../../../../thunkAction/appointments/appointmentsThunk';
import Alert from '../../molecules/Alert/Alert';
import Modal from '../../molecules/Modal/Modal';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const DashboardTemplate = () => {
  const dispatch = useDispatch();
  const {
    patient,
  } = useSelector((state) => state.patientsReducer);
  // const {
  //   user,
  // } = useSelector((state) => state.authReducer);
  const [isOpen, setIsOpen] = useState(false);

  const dataPages = [
    {
      link: '/dashboard',
      text: 'Dashboard',
    }];
  // console.log(user);
  const appointmentObject = {
    idAppointment: '6351eb032e655955f5166c2d',
    newAppointment: {
      characteristicsAttention: {
      },
      sickTime: '400 dias',
      vitalFunctions: {
        fr: 37,
        fc: 15,
        t: 36,
        saturacion: 95,
      },
      percentiles: {
        percentileWeight: 37,
        heightPercentile: 15,
        percentilMC: 36,
      },
      appointmentDate: '2023-08-18T00:00:00.000Z',
      weight: 5.78,
      size: 78,
      age: '2 años',
      brainPerimeter: 15,
      bodyMassIndex: 5,
      prolongedDiagnosis: [
        {
          diagnosis: 'Diabetes',
          age: '3 meses',
        },
        {
          diagnosis: 'No se',
          age: '2 meses',
        },
      ],
      diagnosis: [
        {
          diagnosticName: 'Gripe',
        },
        {
          diagnosticName: 'Infeccion estomacal',
        },
      ],
      longTreatment: [
        {
          longTreatmentName: 'Eutirox',
          suspensionDate: null,
        },
        {
          longTreatmentName: 'Ranttt',
          suspensionDate: null,
        },
      ],
      treatment: [
        {
          nameTreatment: 'Ibuprofeno',
        },
        {
          nameTreatment: 'Paracetamol',
        },
      ],
      auxiliaryExams: [
        {
          exams: 'Orina',
        },
        {
          exams: 'Sangre',
        },
      ],
      state: true,
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Container className="py-4">
        <PageHeader title="Dashboard" dataPages={dataPages} />
        <Button primary onClick={() => dispatch(updateAppointmentByIdAPI(appointmentObject))}>
          CLICK actualizar appointment con id:
          {` ${appointmentObject.idAppointment}`}
        </Button>
        <Button primary onClick={() => dispatch(fetchPatientsById('630eef31b204ef57c21ed3d3'))}>
          CLICK para cargar un paciente
        </Button>
        <ul>
          <li>
            dni paciente:
            {patient.DNI}
          </li>
          <li>
            nombre paciente:
            {patient.Name}
          </li>
          <li>
            apellido paciente:
            {patient.LastName}
          </li>
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5 md:grid-cols-4">
          <Measurement icon={<FontAwesomeIcon icon={faUsers} />} text="Pacientes" value="20" />
          <Measurement icon={<FontAwesomeIcon icon={faCalendarCheck} />} text="Atenciones" value="14" />
        </div>
        <div className="mt-5">
          <Alert>
            HELLO! This is an alert message.
          </Alert>
          <Alert outline className="mt-3">
            HELLO! This is an alert message.
          </Alert>
          <Alert type="success" className="mt-3">
            HELLO! This is an alert message.
          </Alert>
          <Alert type="success" outline className="mt-3">
            HELLO! This is an alert message.
          </Alert>
          <Alert type="danger" className="mt-3">
            HELLO! This is an alert message.
          </Alert>
          <Alert type="danger" outline className="mt-3">
            HELLO! This is an alert message.
          </Alert>
        </div>
        <div className="mt-5">
          <Button primary onClick={openModal}>Open Modal</Button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <button type="button" className="absolute top-[1rem] right-[1rem]" onClick={closeModal}>
              X
            </button>
            Hello this is a Modal
          </Modal>
        </div>
      </Container>
    </Wrapper>
  );
};

export default DashboardTemplate;
