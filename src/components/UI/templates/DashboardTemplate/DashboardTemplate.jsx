import React, { useState } from 'react';
import './prueba.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faCaretDown, faChartColumn, faMagnifyingGlass, faPlusSquare, faUser, faGear,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import IconButton from '../../atoms/IconButton/IconButton';

const DashboardTemplate = () => {
  const [isSideBarActive, setisSideBarActive] = useState(true);
  return (
    <>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between py-3 shadow-lg navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <IconButton outline="blue" onClick={() => setisSideBarActive(!isSideBarActive)} icon={<FontAwesomeIcon size="lg" icon={faBars} />} />
          <div className="flex-grow items-center" id="navbarSupportedContent1">
            <a href="/">
              <Typography className="mb-2 px-2 pt-2 text-2xl text-gray-700 font-bold">
                Pediatria Software v0.0
              </Typography>

            </a>

          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="flex items-center relative">
            {/* <!-- Icon --> */}
            <div className="p-1">

              <div className="dropdown inline-block relative">
                <Button outline iconRigth={<FontAwesomeIcon size="lg" icon={faCaretDown} />}>
                  Usuario
                </Button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Ver Perfil</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Ver Pacientes</a></li>
                  <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Log out</a></li>
                </ul>
              </div>

            </div>
            {/* <!-- fin Icon --> */}
          </div>
          {/* <!-- Right elements --> */}
        </div>
      </nav>

      {/* Sidebar */}
      {isSideBarActive ? (
        <div className="w-60 h-full shadow-md bg-white px-1 absolute">
          <ul className="relative">
            <li className="relative">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <IconButton icon={<FontAwesomeIcon size="lg" icon={faChartColumn} />} />
                <Typography component="p" className="px-1">
                  Dashboard
                </Typography>
              </a>
            </li>
            <li className="relative">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <IconButton icon={<FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />} />
                <Typography component="p" className="px-1">
                  Buscar Paciente
                </Typography>
              </a>
            </li>
            <li className="relative">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <IconButton icon={<FontAwesomeIcon size="lg" icon={faPlusSquare} />} />
                <Typography component="p" className="px-1">
                  Nuevo Paciente
                </Typography>
              </a>
            </li>
            <li className="relative">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <IconButton icon={<FontAwesomeIcon size="lg" icon={faUser} />} />
                <Typography component="p" className="px-1">
                  Perfil
                </Typography>
              </a>
            </li>
            <li className="relative">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <IconButton icon={<FontAwesomeIcon size="lg" icon={faGear} />} />
                <Typography component="p" className="px-1">
                  Configuración
                </Typography>
              </a>
            </li>
          </ul>
        </div>
      ) : null }

    </>
  );
};

export default DashboardTemplate;
