import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Stepper from '../../molecules/Stepper/Stepper';
import AnthropromedicalMeasures from '../AnthropromedicalMeasures/AnthropromedicalMeasures';
import CurrentIllnessForm from '../CurrentIllnessForm/CurrentIllnessForm';
import VitalFunctions from '../VitalFunctions/VitalFuntions';

const NewAppointmentForm = () => {
  const { step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();

  const steps = ['Medidas Antropométricas', 'Funciones Vitales', 'Enfermedad Actual'];

  return (
    <div className="p-3 w-full">
      <Stepper activeStep={step} onChange={(index) => dispatch(setStep(index))} steps={steps} />
      {[<AnthropromedicalMeasures />, <VitalFunctions />, <CurrentIllnessForm />][step]}
    </div>
  );
};

export default NewAppointmentForm;
