import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Stepper from '../../molecules/Stepper/Stepper';
import NewPatientBasicInfo from '../NewPatientBasicInfo/NewPatientBasicInfo';
import NewPatientVaccines from '../NewPatientVaccines/NewPatientVaccines';
import NewPatientDetailedInfo from '../NewPatientDetailedInfo/NewPatientDetailedInfo';

const FormPatientModal = () => {
  const { step } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  const steps = ['Información Básica del Paciente', 'Información detallada del paciente', 'Vacunas'];

  return (
    <div>
      <Stepper activeStep={step} onChange={(index) => dispatch(setStep(index))} steps={steps} />
      {[<NewPatientBasicInfo />,
        <NewPatientDetailedInfo />,
        <NewPatientVaccines />][step]}
    </div>
  );
};

export default FormPatientModal;
