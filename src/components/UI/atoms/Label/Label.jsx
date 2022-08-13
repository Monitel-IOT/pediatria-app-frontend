import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor, ...props }) => (
  <label htmlFor={htmlFor} {...props} className="text-base font-bold mb-2">{children}</label>
);

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  htmlFor: PropTypes.string,
};

export default Label;
