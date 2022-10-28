import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';
import DropdownList from '../../molecules/DropdownList/DropdownList';
import { getUserByFirebaseIdAPI } from '../../../../thunkAction/auth/authThunk';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const {
    databaseUser, user,
  } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(getUserByFirebaseIdAPI(user.uid));
  }, []);
  const data = [
    {
      link: '/',
      text: 'Ver perfil',
    },
    {
      link: '/',
      text: 'Cambiar contraseña',
    },
    {
      link: '/',
      text: 'Log out',
    }];
  const [isDropdownActive, setisDropdownActive] = useState(false);
  // condicionales para mostrar iniciales del usuario en el avatar
  let textAvatar;
  if (databaseUser.data) {
    if (databaseUser.data.surname) {
      textAvatar = databaseUser.data.name[0] + databaseUser.data.surname[0];
    } else if (databaseUser.data.name) {
      // eslint-disable-next-line prefer-destructuring
      textAvatar = databaseUser.data.name[0];
    }
    if (databaseUser.data.msg === 'Not found') {
      // eslint-disable-next-line prefer-destructuring
      textAvatar = '...';
    }
  } else {
    textAvatar = '...';
  }
  return (

    <div className="items-center relative">
      {/* <!-- Icon --> */}
      <Button avatar onClick={() => setisDropdownActive(!isDropdownActive)} iconRigth={<FontAwesomeIcon size="sm" icon={faCaretDown} />}>
        {textAvatar}
      </Button>
      <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
        <DropdownList size="small" data={data} side="left" />
      </div>
    </div>
  );
};

export default UserDropdown;
