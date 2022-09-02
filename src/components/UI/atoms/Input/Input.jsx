import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, ...props }) => (
  <input {...props} onChange={(e) => onChange(e)} className="border-gray-300 py-2 px-4 border rounded leading-none focus:border-cyan-600 outline-0" />
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
