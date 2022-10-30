import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn, faMagnifyingGlass, faPlusSquare, // faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import UserCard from '../../organisms/UserCard/UserCard';
import { getUserByFirebaseIdAPI } from '../../../../thunkAction/auth/authThunk';

const MenuList = () => {
  const dispatch = useDispatch();
  const {
    nameSurnameLetters, user, databaseUser,
  } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(getUserByFirebaseIdAPI(user.uid));
  }, []);
  return (
    <div>

      <UserCard userTypeText="Doctor" avatarText={nameSurnameLetters}>
        {`${databaseUser.data ? databaseUser.data.name : 'cargando'}`}
        {' '}
        {`${databaseUser.data ? databaseUser.data.surname : '...'}`}
      </UserCard>
      <MenuItem linkTo="/dashboard" iconLeft={<FontAwesomeIcon size="xl" icon={faChartColumn} />}>Dashboard</MenuItem>
      <MenuItem linkTo="/searchPatient" iconLeft={<FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />}>Buscar Paciente</MenuItem>
      <MenuItem linkTo="/nuevo-paciente" iconLeft={<FontAwesomeIcon size="xl" icon={faPlusSquare} />}>Nuevo paciente</MenuItem>
      {/* <MenuItem linkTo="/perfil/:id" iconLeft={<FontAwesomeIcon size="xl"
    icon={faUser} />}>Perfil</MenuItem>
    <MenuItem linkTo="/" iconLeft={<FontAwesomeIcon size="xl"
    icon={faGear} />}>Configuración</MenuItem> */}
    </div>
  );
};

export default MenuList;
