import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  faUser, faKey, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../atoms/Avatar/Avatar';
import DropdownList from '../../molecules/DropdownList/DropdownList';
import { signOut } from '../../../../thunkAction/auth/authThunk';
import Button from '../../atoms/Button/Button';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    nameSurnameLetters, user,
  } = useSelector((state) => state.authReducer);

  const [isDropdownActive, setisDropdownActive] = useState(false);
  // condicionales para mostrar iniciales del usuario en el avatar

  const handleSignOut = async () => {
    await dispatch(signOut());
    await navigate('/login');
  };
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
      func: handleSignOut,
      text: 'Cerrar sesión',
      icon: <FontAwesomeIcon size="lg" icon={faSignOut} />,
    }];
  return (
    <div className="items-center relative">
      {/* <!-- Icon --> */}
      <Button outline size="normal no padding" onClick={() => setisDropdownActive(!isDropdownActive)}>
        <Avatar size="small">
          {nameSurnameLetters === '' ? user?.email[0] : nameSurnameLetters }
        </Avatar>
      </Button>

      <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
        <DropdownList size="small" data={data} side="left" />
      </div>
    </div>
  );
};

export default UserDropdown;
