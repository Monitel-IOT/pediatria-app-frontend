import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RouteLink = ({ children, ...props }) => (
  <Link {...props} className="text-xs sm:text-sm uppercase text-blue-main-500">{children}</Link>
);

RouteLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default RouteLink;
