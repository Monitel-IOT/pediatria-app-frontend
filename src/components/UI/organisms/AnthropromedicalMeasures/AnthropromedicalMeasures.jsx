import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChange, nextStep, prevStep,
} from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const AnthropromedicalMeasures = () => {
  const { form, step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <form action="">
        <FormInput
          type="number"
          label="Peso"
          name="weight"
          addon="Kg"
          placeholder="Peso..."
          value={form.weight}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="Talla"
          name="height"
          addon="cm"
          placeholder="Talla..."
          value={form.height}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="PC"
          name="PC"
          addon="cm"
          placeholder="PC..."
          value={form.PC}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
        />
        <FormInput
          type="number"
          label="IMC (Indice de Masa Corporal)"
          name="IMC"
          placeholder="IMC..."
          value={form.IMC}
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
          primary={(form.weight.length !== 0 && form.height.length !== 0 && form.PC.length !== 0 && form.IMC.length !== 0)}
          // eslint-disable-next-line max-len
          disabled={(form.weight.length === 0 || form.height.length === 0 || form.PC.length === 0 || form.IMC.length === 0)}
          onClick={() => dispatch(nextStep(3))}
          className="ml-2"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default AnthropromedicalMeasures;
