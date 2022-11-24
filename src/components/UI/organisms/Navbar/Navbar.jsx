import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Typography from '../../atoms/Typography/Typography';
import UserDropdown from '../UserDropdown/UserDropdown';

const Navbar = ({ setToggleMainBar }) => (
  <nav className="items-center justify-between bg-white flex py-3 w-full shadow-lg z-50 h-[5rem] fixed">
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-10">
      <FontAwesomeIcon icon={faBars} className="text-3xl sm:text-2xl hover:text-blue-main-500 cursor-pointer text-gray-500" onClick={() => setToggleMainBar((prev) => !prev)} />
      <div className=" items-center w-2/5 sm:flex-grow hidden sm:block">
        <Typography className="mb-2 px-2 pt-2 text-2xl text-gray-700 font-bold">
          PEDIATRIA
        </Typography>
      </div>
      <UserDropdown />
    </div>
  </nav>
);

Navbar.propTypes = {
  setToggleMainBar: PropTypes.func,
};
export default Navbar;
