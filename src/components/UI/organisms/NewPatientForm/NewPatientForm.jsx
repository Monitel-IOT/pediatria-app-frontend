import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Stepper from '../../molecules/Stepper/Stepper';
import Card from '../Card/Card';
import FormOne from '../FormOne/FormOne';
import FormThree from '../FormThree/FormThree';
import FormTwo from '../FormTwo/FormTwo';

const NewPatientForm = () => {
  const { step } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  const steps = ['Datos Personales', 'Otros datos', 'Mas Datos'];

  return (
    <Card className="mt-4">
      <Stepper activeStep={step} onChange={(index) => dispatch(setStep(index))} steps={steps} />
      {[<FormOne />, <FormTwo />, <FormThree />][step]}
    </Card>
  );
};

export default NewPatientForm;
