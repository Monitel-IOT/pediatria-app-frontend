import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';
import DropdownList from '../../molecules/DropdownList/DropdownList';
import { getUserByFirebaseIdAPI } from '../../../../thunkAction/auth/authThunk';

const UserDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByFirebaseIdAPI('47ogzKmeH2eHGvvalc5hgaTScei2'));
  }, []);
  const {
    databaseUser,
  } = useSelector((state) => state.authReducer);
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
  return (

    <div className="items-center relative">
      {/* <!-- Icon --> */}
      <Button outline onClick={() => setisDropdownActive(!isDropdownActive)} iconRigth={<FontAwesomeIcon size="lg" icon={faCaretDown} />}>
        {`${databaseUser.data ? `Dr. ${databaseUser.data.name}` : '...'}`}
      </Button>
      <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
        <DropdownList size="small" data={data} />
      </div>
    </div>
  );
};

export default UserDropdown;
