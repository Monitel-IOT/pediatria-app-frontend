import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn, faMagnifyingGlass, faPlusSquare, // faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import UserCard from '../../organisms/UserCard/UserCard';

const MenuList = () => {
  const {
    nameSurnameLetters, databaseUser,
  } = useSelector((state) => state.authReducer);
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
