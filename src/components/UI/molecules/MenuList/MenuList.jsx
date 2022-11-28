import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn, faMagnifyingGlass, faPlusSquare, // faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import UserCard from '../../organisms/UserCard/UserCard';

const MenuList = () => {
  const {
    nameSurnameLetters, databaseUser, user,
  } = useSelector((state) => state.authReducer);
  const location = useLocation();

  return (
    <div>
      <div className="ml-8 mt-8 mr-8 mb-5">
        <UserCard
          className="pb-5 border-b-2"
          avatarText={nameSurnameLetters === '' ? user.email[0] : nameSurnameLetters}
          name={`${databaseUser?.data?.name || user.email} ${databaseUser?.data?.surname || ''}`}
        />
      </div>
      <MenuItem
        linkTo="/dashboard"
        iconLeft={<FontAwesomeIcon size="lg" icon={faChartColumn} />}
        isActive={location.pathname === '/dashboard'}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        linkTo="/searchPatient"
        iconLeft={<FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />}
        isActive={location.pathname === '/searchPatient'}
      >
        Mis Pacientes
      </MenuItem>
      <MenuItem
        linkTo="/nuevo-paciente"
        iconLeft={<FontAwesomeIcon size="lg" icon={faPlusSquare} />}
        isActive={location.pathname === '/nuevo-paciente'}
      >
        Nuevo paciente
      </MenuItem>
      {/* <MenuItem linkTo="/perfil/:id" iconLeft={<FontAwesomeIcon size="xl"
    icon={faUser} />}>Perfil</MenuItem>
    <MenuItem linkTo="/" iconLeft={<FontAwesomeIcon size="xl"
    icon={faGear} />}>Configuración</MenuItem> */}
    </div>
  );
};

export default MenuList;
