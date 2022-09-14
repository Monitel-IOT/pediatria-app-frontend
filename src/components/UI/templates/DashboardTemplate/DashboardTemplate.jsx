import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faChartColumn, faMagnifyingGlass, faPlusSquare, faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import IconButton from '../../atoms/IconButton/IconButton';
import UserDropdown from '../../organisms/UserDropdown/UserDropdown';

const DashboardTemplate = () => {
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
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <UserDropdown />
          {/* <!-- Right elements --> */}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${isSideBarActive ? 'active' : 'hidden'}`}>
        <ul className="absolute z-40">
          <li className="border-b-2 w-42 sm:w-52 relative bg-white shadow-2xl px-0 sm:px-1">
            <Link to="/dashboard" className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out">
              <IconButton icon={<FontAwesomeIcon size="lg" icon={faChartColumn} />} />
              <Typography component="p" className="px-1">
                Dashboard
              </Typography>
            </Link>
          </li>
          <li className=" border-b-2 w-42 sm:w-52 relative bg-white shadow-2xl px-0 sm:px-1">
            <Link to="/searchPatient" className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out">
              <IconButton icon={<FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />} />
              <Typography component="p" className="px-1">
                Buscar Paciente
              </Typography>
            </Link>
          </li>
          <li className="border-b-2 w-42 sm:w-52 relative bg-white shadow-2xl px-0 sm:px-1">
            <a className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!">
              <IconButton icon={<FontAwesomeIcon size="lg" icon={faPlusSquare} />} />
              <Typography component="p" className="px-1">
                Nuevo Paciente
              </Typography>
            </a>
          </li>
          <li className="border-b-2 w-42 sm:w-52 relative bg-white shadow-2xl px-0 sm:px-1">
            <a className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!">
              <IconButton icon={<FontAwesomeIcon size="lg" icon={faUser} />} />
              <Typography component="p" className="px-1">
                Perfil
              </Typography>
            </a>
          </li>
          <li className="border-b-2 w-42 sm:w-52 relative bg-white shadow-2xl px-0 sm:px-1">
            <a className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!">
              <IconButton icon={<FontAwesomeIcon size="lg" icon={faGear} />} />
              <Typography component="p" className="px-1">
                Configuración
              </Typography>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardTemplate;
