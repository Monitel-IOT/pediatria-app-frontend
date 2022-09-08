import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewPatient } from '../../../../thunkAction/patients/patientsThunk';
import FormInput from '../../molecules/FormInput';
import GenderRadio from '../../molecules/GenderRadio/GenderRadio';
import Card from '../Card/Card';
import VaccinesCheckBox from '../../molecules/VaccinesCheckBox/VaccinesCheckBox';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import CheckBox from '../../atoms/CheckBox/CheckBox';

const RegisterPatientForm = () => {
  // const dispatch = useDispatch();
  const initalState = {
    NumberHC: 1,
    DNI: '',
    Name: '',
    LastName: '',
    DateBirth: '',
    Childbirth: '',
    Gender: '',
    BirthWeight: '',
    Apgar: '',
    SuplementaryFeeding: 'NO',
    Lactation: '',
    Gestation: '',
    Vaccines: [
    ],
    Estate: true,
  };
  const [newPatient, setNewPatient] = useState(initalState);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setNewPatient({
      ...newPatient,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleVaccinesCheckBox = (e) => {
    // console.log(e.target);
    setNewPatient({
      ...newPatient,
      Vaccines: [...newPatient.Vaccines, { Name: e.target.id }],
    });
  };

  const handleCreatePatient = (event) => {
    event.preventDefault();
    // Aqui usa el dispatch, pendiente de actualizaciones del back
    // dispatch(addNewPatient(newPatient));
    setNewPatient(initalState);
  };

  return (
    <div className="max-w-prose">
      <Typography component="h1">Registro Paciente</Typography>
      <Card className="mt-4">
        <form onSubmit={handleCreatePatient}>
          <FormInput
            label="Dni/Codigo"
            name="DNI"
            type="text"
            onChange={handleChange}
            value={newPatient.DNI}
            pattern="^[0-9]{8}$"
            errorMessage="Introduce un número de DNI válido."

          />
          <FormInput
            label="Nombres"
            name="Name"
            type="text"
            onChange={handleChange}
            value={newPatient.Name}
            pattern="^[A-Za-z0-9]{3,}$"
            errorMessage="El nombre debe contener 3 caracteres como mínimo."
            r
          />
          <FormInput
            label="Apellidos"
            name="LastName"
            type="text"
            onChange={handleChange}
            value={newPatient.LastName}
            pattern="^[A-Za-z0-9]{3,}$"
            errorMessage="Los apellidos deben contener 3 caracteres como mínimo."
            r
          />
          <FormInput
            label="Fecha de nacimiento"
            name="DateBirth"
            type="date"
            onChange={handleChange}
            value={newPatient.DateBirth}
            r
          />
          <FormInput
            label="Parto *"
            name="Childbirth"
            type="text"
            onChange={handleChange}
            value={newPatient.Childbirth}
            pattern="^[A-Za-z]$"
            errorMessage="Este campo sólo acepta letras."

          />
          <FormInput
            label="Peso de nacimiento (kg)"
            name="BirthWeight"
            type="number"
            onChange={handleChange}
            value={newPatient.BirthWeight}
            min={0}
            step={0.1}
          />
          <FormInput
            label="Apgar"
            name="Apgar"
            type="text"
            onChange={handleChange}
            value={newPatient.Apgar}
            pattern="^[A-Za-z]$"
            errorMessage="Este campo sólo acepta letras."
          />
          <GenderRadio onChange={handleChange} />
          <CheckBox
            label="Alimentación Complementaria"
            name="SuplementaryFeeding"
            onChange={handleChange}
          />
          <FormInput
            label="Lactancia"
            name="Lactation"
            type="text"
            onChange={handleChange}
            value={newPatient.Lactation}
            pattern="^[A-Za-z]$"
            errorMessage="Este campo sólo acepta letras."
          />
          <FormInput
            label="Gestación"
            name="Gestation"
            type="text"
            onChange={handleChange}
            value={newPatient.Gestation}
            pattern="^[A-Za-z]$"
            errorMessage="Este campo sólo acepta letras."
          />
          <VaccinesCheckBox onChange={handleVaccinesCheckBox} />
          <Button primary type="submit">
            Crear Paciente
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPatientForm;
