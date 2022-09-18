import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';

const MenuItem = ({
  linkTo, children, iconLeft, ...props
}) => (
  <div className={`relative bg-white px-0 sm:px-1 ${props.className}`}>
    <Link to={linkTo} className="flex grid place-items-center text-lg py-6 overflow-hidden h-24 text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out">
      {iconLeft && <span className="px-1.5">{iconLeft}</span>}
      <Typography component="p" className="px-1.5">
        {children}
      </Typography>
    </Link>
  </div>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconLeft: PropTypes.node,
  className: PropTypes.string,
  linkTo: PropTypes.string,
};

export default MenuItem;
