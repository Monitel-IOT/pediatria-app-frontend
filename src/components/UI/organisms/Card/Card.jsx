import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, ...props }) => (
  <div {...props} className={`p-5 bg-white rounded-lg shadow-lg ${props.className}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

export default Card;
