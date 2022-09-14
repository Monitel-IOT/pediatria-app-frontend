import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';

const LiLink = ({
  linkTo, children, iconLeft, size, ...props
}) => {
  let style = {};
  if (size === 'small') {
    style = {
      li: 'w-40 sm:w-44',
      Link: 'h-14 px-0 sm:px-1',
    };
  }
  if (size === 'medium') {
    style = {
      li: 'w-48 sm:w-52',
      Link: 'h-16 sm:h-18 text-lg px-1 sm:px-2',

    };
  }
  if (size === 'big') {
    style = {
      li: 'w-52 sm:w-64',
      Link: 'h-18 sm:h-20 text-xl px-1 sm:px-2',
    };
  }
  return (
    <li className={`border-b-2 ${style.li} relative bg-white shadow-2xl px-0 sm:px-1 ${props.className}`}>
      <Link to={linkTo} className={`flex items-center py-4 ${style.Link} overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out`}>
        {iconLeft && <span className="px-1.5">{iconLeft}</span>}
        <Typography component="p" className="px-1.5">
          {children}
        </Typography>
      </Link>
    </li>
  );
};

LiLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconLeft: PropTypes.node,
  className: PropTypes.string,
  linkTo: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

export default LiLink;
