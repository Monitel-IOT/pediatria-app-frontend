import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const MenuItem = ({
  linkTo, children, iconLeft, className, ...props
}) => (
  <NavLink
    to={linkTo}
    className={classNames(
      `flex items-center text-sm px-8 py-2 hover:text-blue-main-500 relative active:text-blue-main-500 transition duration-500 ease-in-out ${className}`,
      { 'text-blue-main-500 before:content-[""] before:w-[5px] before:absolute before:top-0 before:left-0 before:bottom-0 before:rounded-tr-full before:rounded-br-full before:my-2 before:bg-blue-main-500': props.isActive },
      { 'text-gray-700': !props.isActive },
    )}
  >
    {iconLeft && <span className="pr-2">{iconLeft}</span>}
    {children}
  </NavLink>
);

MenuItem.defaultProps = {
  isActive: false,
};

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconLeft: PropTypes.node,
  className: PropTypes.string,
  linkTo: PropTypes.string,
  isActive: PropTypes.bool,
};

export default MenuItem;
