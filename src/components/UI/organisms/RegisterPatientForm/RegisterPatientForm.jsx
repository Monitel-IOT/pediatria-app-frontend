import React from 'react';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import FormInput from '../../molecules/FormInput';
import GenderRadio from '../../molecules/GenderRadio/GenderRadio';
import Card from '../Card/Card';
import VaccinesCheckBox from '../../molecules/VaccinesCheckBox/VaccinesCheckBox';
import Typography from '../../atoms/Typography/Typography';

const RegisterPatientForm = () => (
  <div className="max-w-prose">
    <Typography component="h1">Registro Paciente</Typography>
    <Card className="mt-4">
      <form action="">
        <FormInput label="Dni/Codigo" type="text" />
        <FormInput label="Nombre" type="text" />
        <FormInput label="Apellidos" type="text" />
        <FormInput label="Fecha de Nacimiento" type="date" />
        <FormInput label="Parto *" type="text" />
        <GenderRadio />
        <CheckBox label="Alimentacion Complementaria" />
        <FormInput label="Peso de Nacimiento" type="text" />
        <FormInput label="Apgar *" type="text" />
        <FormInput label="Edad Gestacional" type="text" />
        <FormInput label="Tipo de Lactancia *" type="text" />
      </form>
    </Card>
    <VaccinesCheckBox />
  </div>
);

export default RegisterPatientForm;
