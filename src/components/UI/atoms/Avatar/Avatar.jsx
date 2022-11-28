import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  children, size, ...props
}) => (
  <span
    className={classNames(
      `flex relative justify-center items-center rounded-full text-gray-600 border-2 border-gray-600 bg-gray-100 uppercase px-4 py-1 ${props.className}`,
      { 'w-12 h-12 text-xl': size === 'small' },
      { 'w-16 h-16 text-2xl': size === 'medium' },
      { 'w-20 h-20 text-4xl': size === 'large' },
    )}
  >
    {children}
  </span>
);

Avatar.defaultProps = {
  size: 'small',
};

Avatar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
