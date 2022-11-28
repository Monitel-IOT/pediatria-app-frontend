import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {
  faUser, faKey, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../atoms/Avatar/Avatar';
import DropdownList from '../../molecules/DropdownList/DropdownList';
import Button from '../../atoms/Button/Button';
import LogOutModal from '../LogOutModal/LogOutModal';

const UserDropdown = () => {
  const {
    nameSurnameLetters,
  } = useSelector((state) => state.authReducer);

  const [isDropdownActive, setisDropdownActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // condicionales para mostrar iniciales del usuario en el avatar

  const data = [
    {
      link: '/',
      text: 'Ver perfil',
      icon: <FontAwesomeIcon size="lg" icon={faUser} />,
    },
    {
      link: '/',
      text: 'Cambiar contraseña',
      icon: <FontAwesomeIcon size="lg" icon={faKey} />,
    },
    {
      func: () => setIsOpen(true),
      text: 'Cerrar sesión',
      icon: <FontAwesomeIcon size="lg" icon={faSignOut} />,
    }];
  return (
    <>
      <div className="items-center relative">
        <Button outline size="normal no padding" onClick={() => setisDropdownActive(!isDropdownActive)}>
          <Avatar>
            {nameSurnameLetters}
          </Avatar>
        </Button>
        <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
          <DropdownList size="small" data={data} side="left" />
        </div>
      </div>

      <LogOutModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default UserDropdown;
