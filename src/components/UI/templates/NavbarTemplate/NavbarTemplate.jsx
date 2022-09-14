import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Typography from '../../atoms/Typography/Typography';
import IconButton from '../../atoms/IconButton/IconButton';
import UserDropdown from '../../organisms/UserDropdown/UserDropdown';
import SidebarDropdown from '../../organisms/SidebarDropdown/SidebarDropdown';

const NavbarTemplate = () => {
  const [isSideBarActive, setisSideBarActive] = useState(false);
  return (
    <>
      <nav className="items-center justify-between flex py-3 shadow-lg relative z-50">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-3">
          <IconButton outline="blue" onClick={() => setisSideBarActive(!isSideBarActive)} icon={<FontAwesomeIcon size="lg" icon={faBars} />} />
          <div className=" items-center w-2/5 sm:flex-grow">
            <Typography className="mb-2 px-2 pt-2 text-2xl text-gray-700 font-bold">
              Pediatria Software
            </Typography>
          </div>
          <UserDropdown />
        </div>
      </nav>

      {/* Sidebar w-42 sm:w-52 */}
      <SidebarDropdown isDropdownActive={isSideBarActive} />

    </>
  );
};

export default NavbarTemplate;
