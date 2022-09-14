import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn, faMagnifyingGlass, faPlusSquare, faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import DropdownList from '../../molecules/DropdownList/DropdownList';

const SidebarDropdown = ({ isDropdownActive }) => {
  const data = [
    {
      linkTo: '/dashboard',
      text: 'Dashboard',
      iconLeft: <FontAwesomeIcon size="lg" icon={faChartColumn} />,
    },
    {
      linkTo: '/searchPatient',
      text: 'Buscar Paciente',
      iconLeft: <FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />,
    },
    {
      linkTo: '/nuevo-paciente',
      text: 'Nuevo paciente',
      iconLeft: <FontAwesomeIcon size="lg" icon={faPlusSquare} />,
    },
    {
      linkTo: '/perfil/:id',
      text: 'Perfil',
      iconLeft: <FontAwesomeIcon size="lg" icon={faUser} />,
    },
    {
      linkTo: '/',
      text: 'Configuración',
      iconLeft: <FontAwesomeIcon size="lg" icon={faGear} />,
    }];
  return (
    <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
      <DropdownList size="medium" data={data} />
    </div>

  );
};

SidebarDropdown.propTypes = {
  isDropdownActive: PropTypes.bool.isRequired,
};

export default SidebarDropdown;
