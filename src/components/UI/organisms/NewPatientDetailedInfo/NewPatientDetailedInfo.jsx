import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChange, nextStep, prevStep,
} from '../../../../state/newPatientForm/newPatientFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';
import CheckBox from '../../atoms/CheckBox/CheckBox';

const NewPatientDetailedInfo = () => {
  const { form, errors, step } = useSelector((state) => state.newPatientFormReducer);
  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <form action="">
        <FormInput
          type="number"
          label="Peso de Nacimiento"
          name="birthWeight"
          value={form.birthWeight}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.birthWeight}
        />
        <FormInput
          type="text"
          label="Parto"
          name="childBirth"
          value={form.childBirth}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.childBirth}
        />
        <FormInput
          type="text"
          label="Apgar"
          name="apgar"
          value={form.apgar}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.apgar}
        />
        <FormInput
          type=""
          label="Lactancia"
          name="lactation"
          value={form.lactation}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.lactation}
        />
        <FormInput
          type=""
          label="Gestación"
          name="gestation"
          value={form.gestation}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          error={errors.gestation}
        />
        <CheckBox
          label="Alimentación Complementaria"
          name="supplementaryFeeding"
          disabled={false}
          onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.checked }))}
          checked={form.supplementaryFeeding}
        />
        <h1>{form.supplementaryFeeding ? 'true' : 'false'}</h1>
      </form>
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
  );
};

export default NewPatientDetailedInfo;
