import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const VitalFunctions = () => {
  // const { step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <FormInput
          type="text"
          label="FR"
          name="FR"
          addon="x/min"
        />
        <FormInput
          type="text"
          label="FC"
          name="FC"
          addon="x/min"
        />
        <FormInput
          type="text"
          label="Sat."
          name="saturacion"
          addon="%"
        />
        <FormInput
          type="text"
          label="Temperatura"
          name="temperature"
          addon="°C"
        />
      </form>
      <div className="mt-2">
        <Button
          primary
          onClick={() => dispatch(prevStep())}
        >
          Atrás
        </Button>
        <Button
        // eslint-disable-next-line max-len
          primary
          // eslint-disable-next-line max-len
          className="ml-2"
          onClick={() => dispatch(nextStep(4))}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default VitalFunctions;
