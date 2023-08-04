import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../layout/Card/Card';
import FormInput from '../../molecules/FormInput';
import { handleChange } from '../../../../state/auth/authSlice';
import Button from '../../atoms/Button/Button';
import { fetchEditUsersById } from '../../../../thunkAction/profile/profileThunk';

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const { databaseUser, user } = useSelector((state) => state.authReducer);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchEditUsersById(
      { idPatient: databaseUser.data.id, form: databaseUser.data, token: user.token },
    ));
  };

  return (
    <div className="sm:w-3/4 mx-auto">
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
            disabled
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
          <Button primary type="submit">Editar</Button>
        </form>
      </Card>
    </div>
  );
};
export default EditProfileForm;
