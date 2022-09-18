import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn, faMagnifyingGlass, faPlusSquare, faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../../atoms/MenuItem/MenuItem';

const MenuList = () => (
  <div>
    <MenuItem linkTo="/dashboard" iconLeft={<FontAwesomeIcon size="xl" icon={faChartColumn} />}>Dashboard</MenuItem>
    <MenuItem linkTo="/searchPatient" iconLeft={<FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />}>Buscar Paciente</MenuItem>
    <MenuItem linkTo="/nuevo-paciente" iconLeft={<FontAwesomeIcon size="xl" icon={faPlusSquare} />}>Nuevo paciente</MenuItem>
    <MenuItem linkTo="/perfil/:id" iconLeft={<FontAwesomeIcon size="xl" icon={faUser} />}>Perfil</MenuItem>
    <MenuItem linkTo="/" iconLeft={<FontAwesomeIcon size="xl" icon={faGear} />}>Configuración</MenuItem>
  </div>
);

export default MenuList;
