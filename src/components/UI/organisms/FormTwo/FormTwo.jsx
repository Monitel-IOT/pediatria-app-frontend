import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, nextStep, prevStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const FormTwo = () => {
  const { form, errors } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <form action="">
        <FormInput
          type="text"
          label="Edad"
          value={form.age}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          name="age"
          error={errors.age}
        />
        <FormInput
          type="text"
          label="DNI"
          name="dni"
          value={form.dni}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.dni}
        />
      </form>

      <div>
        <Button primary onClick={() => dispatch(prevStep())}>
          Atras
        </Button>
        <Button
          primary={!(errors.age || errors.dni)}
          disabled={(errors.age || errors.dni)}
          onClick={() => dispatch(nextStep(3))}
          className="ml-2"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default FormTwo;
