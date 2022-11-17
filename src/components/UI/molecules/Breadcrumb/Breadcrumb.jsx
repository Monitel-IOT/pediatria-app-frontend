import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ dataPages }) => (
  <ul className="flex items-center">
    <li key="%%%" className="text-xs sm:text-sm text-blue-600">Páginas</li>
    {dataPages?.map((dataElement) => (
      <li key={dataElement.text} className="text-xs sm:text-sm">
        <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        <NavLink
          to={dataElement.link}
          // className="underline text-blue-600 hover:text-blue-800"
          className={({ isActive }) => (isActive ? '' : 'text-blue-600 hover:text-blue-400')}
        >
          {dataElement.text}
        </NavLink>
      </li>
    ))}
  </ul>

);

Breadcrumb.propTypes = {
  dataPages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};
export default Breadcrumb;
