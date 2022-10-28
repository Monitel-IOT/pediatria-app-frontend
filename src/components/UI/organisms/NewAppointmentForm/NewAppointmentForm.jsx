import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Stepper from '../../molecules/Stepper/Stepper';
import Card from '../Card/Card';

const NewAppointmentForm = () => {
  const { step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();

  const steps = ['Medidas Antropométricas', 'Funciones Vitales', 'Enfermedad Actual', 'Otros Datos'];

  return (
    <Card className="mt-4">
      <Stepper activeStep={step} onChange={(index) => dispatch(setStep(index))} steps={steps} />
      {[<div>Medidas Antropromedicas</div>,
        <div>Funciones vitales</div>,
        <div>Enfermedad Actual</div>,
        <div>Otros Datos</div>][step]}
    </Card>
  );
};

export default NewAppointmentForm;
