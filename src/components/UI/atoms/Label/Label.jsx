import React from 'react';
import PropTypes from 'prop-types';

const Label = ({
  children, htmlFor, className, ...props
}) => (
  <label htmlFor={htmlFor} {...props} className={`text-sm text-gray-600 font-bold ${className}`}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
