import React from 'react';
import PropTypes from 'prop-types';

const Td = ({ children }) => (
  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{children}</td>
);

Td.propTypes = {
  children: PropTypes.string,
};

export default Td;
