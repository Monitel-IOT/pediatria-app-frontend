import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChange, nextStep, prevStep,
} from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const VitalFunctions = () => {
  const { form, step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <FormInput
          type="number"
          label="FR"
          name="fRespiratory"
          addon="x/min"
          value={form.fRespiratory}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="FC"
          name="fCardiac"
          addon="x/min"
          value={form.fCardiac}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="Sat."
          name="saturacion"
          addon="%"
          value={form.saturacion}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="Temperatura"
          name="temperature"
          addon="°C"
          value={form.temperature}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
      </form>
      <div className="mt-2">
        <Button
          primary={!(step === 0)}
          disabled={(step === 0)}
          onClick={() => dispatch(prevStep())}
        >
          Atrás
        </Button>
        <Button
          // eslint-disable-next-line max-len
          primary={(form.fRespiratory.length !== 0 && form.fCardiac.length !== 0 && form.saturacion.length !== 0 && form.temperature.length !== 0)}
          // eslint-disable-next-line max-len
          disabled={(form.fRespiratory.length === 0 || form.fCardiac.length === 0 || form.saturacion.length === 0 || form.temperature.length === 0)}
          onClick={() => dispatch(nextStep(3))}
          className="ml-2"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default VitalFunctions;
