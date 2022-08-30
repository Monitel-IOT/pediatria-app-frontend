import React from 'react';
import PropTypes from 'prop-types';
import Td from '../../atoms/Td/Td';

const TableBody = ({ data }) => (
  <tbody>
    {data.map((row) => (
      <tr key={Math.random()}>
        {Object.entries(row).map(([key, value]) => (
          <Td key={key}>{value}</Td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tratamiento: PropTypes.string.isRequired,
      fechaDeInicio: PropTypes.string.isRequired,
      tiempo: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBody;
