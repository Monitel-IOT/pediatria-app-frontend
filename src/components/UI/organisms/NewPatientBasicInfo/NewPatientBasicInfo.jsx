import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closePatientForm,
  handleChange, nextStep, prevStep,
} from '../../../../state/newPatientForm/newPatientFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';
import GenderRadio from '../../molecules/GenderRadio/GenderRadio';

const NewPatientBasicInfo = () => {
  const { form, errors, step } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <form action="">
        <FormInput
          type="text"
          label="DNI/Código"
          name="dni"
          value={form.dni}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.dni}
        />
        <FormInput
          type="text"
          label="Nombre"
          name="name"
          value={form.name}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.name}
        />
        <FormInput
          type="text"
          label="Apellidos"
          name="lastname"
          value={form.lastname}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.lastname}
        />
        <FormInput
          type="date"
          label="Fecha de nacimiento"
          name="birthDate"
          value={form.birthDate}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.birthDate}
        />
        <GenderRadio
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          value={form.gender}
          error={errors.gender}
        />
      </form>
      <div className="flex items-center justify-between mt-4">
        <Button
          danger
          onClick={() => dispatch(closePatientForm())}
        >
          Cancelar
        </Button>
        <div>
          <Button
            primary={!(step === 0)}
            disabled={(step === 0)}
            onClick={() => dispatch(prevStep())}
          >
            Atrás
          </Button>
          <Button
        // eslint-disable-next-line max-len
            primary={!(errors.name || errors.lastname || errors.birthDate || errors.gender) && (form.name.length !== 0 && form.lastname.length !== 0 && form.birthDate.length !== 0 && form.gender.length !== 0)}
          // eslint-disable-next-line max-len
            disabled={(errors.name || errors.lastname || errors.birthDate || errors.gender) || (form.name.length === 0 || form.lastname.length === 0 || form.birthDate.length === 0 || form.gender.length === 0)}
            onClick={() => dispatch(nextStep(3))}
            className="ml-2"
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPatientBasicInfo;
