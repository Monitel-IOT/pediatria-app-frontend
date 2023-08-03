import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../layout/Card/Card';
import FormInput from '../../molecules/FormInput';
import { handleChange } from '../../../../state/profile/updateProfileSlice';

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const { databaseUser } = useSelector((state) => state.authReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full sm:w-[30rem]">
      <Card className="mt-4">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="Nombre"
            name="name"
            value={databaseUser.data.name}
            onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          />
          <FormInput
            type="text"
            label="Apellido"
            name="surname"
            value={databaseUser.data.surname}
            onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          />
          <FormInput
            type="text"
            label="Email"
            name="email"
            value={databaseUser.data.email}
            onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          />
          <FormInput
            type="text"
            label="DNI"
            name="dni"
            value={databaseUser.data.dni}
            onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          />
          <FormInput
            type="number"
            label="Telefono"
            name="phone"
            value={databaseUser.data.phone}
            onChange={(e) => dispatch(handleChange({ name: e.target.name, value: e.target.value }))}
          />
        </form>
      </Card>
    </div>
  );
};
export default EditProfileForm;
