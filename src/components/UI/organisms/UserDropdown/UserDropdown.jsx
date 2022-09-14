import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';
import DropdownList from '../../molecules/DropdownList/DropdownList';

const UserDropdown = () => {
  const data = [
    {
      linkTo: '/',
      text: 'Ver perfil',
    },
    {
      linkTo: '/',
      text: 'Cambiar contraseña',
    },
    {
      linkTo: '/',
      text: 'Log out',
    }];
  const [isDropdownActive, setisDropdownActive] = useState(false);
  return (

    <div className="items-center relative p-1">
      {/* <!-- Icon --> */}
      <Button outline onClick={() => setisDropdownActive(!isDropdownActive)} iconRigth={<FontAwesomeIcon size="lg" icon={faCaretDown} />}>
        Dr. Bernalesssss
      </Button>
      <div className={`${isDropdownActive ? 'active' : 'hidden'}`}>
        <DropdownList size="small" data={data} />
      </div>
    </div>
  );
};

export default UserDropdown;
