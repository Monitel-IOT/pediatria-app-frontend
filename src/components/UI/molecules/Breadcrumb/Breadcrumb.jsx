import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => (
  <ul className="flex items-center">
    <li className="text-xs sm:text-sm">Pages</li>
    <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-xs sm:text-sm" />
    <li className="text-xs sm:text-sm">Lista de Pacientes</li>
  </ul>
);

export default Breadcrumb;
