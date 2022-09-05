import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import Td from '../../atoms/Td/Td';

const TableBodyList = ({ data }) => (
  <tbody>
    {data.map((row) => (
      <tr key={Math.random()}>
        {Object.entries(row).map(([key, value]) => (
          <Td key={key}>{value}</Td>
        ))}
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"><FontAwesomeIcon icon={faCircleInfo} size="xl" /></td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"><FontAwesomeIcon icon={faTrash} size="xl" /></td>
      </tr>
    ))}
  </tbody>
);

TableBodyList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dni: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      apellidos: PropTypes.string.isRequired,
      fechaNacimiento: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBodyList;
