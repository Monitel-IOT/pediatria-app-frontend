import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input {...props} className="border-gray-300 py-2 px-4 border rounded leading-none focus:border-cyan-600 outline-0" />
);

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
