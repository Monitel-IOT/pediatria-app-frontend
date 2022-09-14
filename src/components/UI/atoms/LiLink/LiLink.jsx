import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';

const LiLink = ({
  linkTo, children, iconLeft, ...props
}) => (
  <li className={`border-b-2 w-38 sm:w-44  relative bg-white shadow-2xl px-0 sm:px-1 ${props.className}`}>
    <Link to={linkTo} className="flex items-center py-4 px-1 sm:px-2 h-14 overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out">
      {iconLeft && <span>{iconLeft}</span>}
      <Typography component="p" className="px-1">
        {children}
      </Typography>
    </Link>
  </li>
);

LiLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconLeft: PropTypes.node,
  className: PropTypes.string,
  linkTo: PropTypes.string,
};

export default LiLink;
