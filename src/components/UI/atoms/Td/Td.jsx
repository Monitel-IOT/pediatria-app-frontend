import React from 'react';
import PropTypes from 'prop-types';

const Td = ({ children, ...props }) => (
  <td {...props} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{children}</td>
);

Td.propTypes = {
  children: PropTypes.node,
};

export default Td;
