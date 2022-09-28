import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, prevStep } from '../../../../state/newPatientForm/newPatientFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const FormThree = () => {
  const { form, errors } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <form action="">
        <FormInput
          type="text"
          label="Apellidos"
          name="surname"
          value={form.surname}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.surname}
        />
        <FormInput
          type="text"
          label="Peso de Nacimiento"
          name="birthWeight"
          value={form.birthWeight}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.birthWeight}
        />
      </form>
      <div>
        <Button primary onClick={() => dispatch(prevStep())}>
          Atrás
        </Button>
        <Button
          primary={!(errors.surname || errors.birthWeight)}
          disabled={(errors.surname || errors.birthWeight)}
          // onClick={() => console.log("Enviando data...")}
          className="ml-2"
        >
          Crear Paciente
        </Button>
      </div>
    </div>
  );
};

export default FormThree;
