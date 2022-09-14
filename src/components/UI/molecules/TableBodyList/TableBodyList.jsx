import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Td from '../../atoms/Td/Td';
import IconButton from '../../atoms/IconButton/IconButton';

const TableBodyList = ({ data }) => (
  <tbody>
    {data.map((row) => (
      <tr key={Math.random()}>
        {Object.entries(row).map(([key, value]) => (
          <Td key={key}>{value}</Td>
        ))}
        <Td><IconButton outline="blue" icon={<FontAwesomeIcon size="lg" icon={faCircleInfo} />} /></Td>
        <Td><IconButton outline="danger" icon={<FontAwesomeIcon size="lg" icon={faTrash} />} /></Td>
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
