import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  children, ...props
}) => (
  <div className={`m-1 w-12 h-12 flex relative justify-center items-center rounded-full bg-gray-500 text-lg text-white uppercase font-semibold px-4 py-1 ${props.className}`}>
    {children}
  </div>
);

Avatar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

export default Avatar;
