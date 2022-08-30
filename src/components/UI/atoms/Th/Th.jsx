import React from 'react';
import PropTypes from 'prop-types';

const Th = ({ children }) => (
  <th scope="col" className="text-sm font-semibold text-blue-main-500 px-6 py-4 text-center uppercase">{children}</th>
);

Th.propTypes = {
  children: PropTypes.string,
};

export default Th;
