import React from 'react';
import PropTypes from 'prop-types';

const IconInput = ({
  iconLeft, iconRigth, ...props
}) => (
  <div className={`flex border border-gray-300 rounded-full focus-within:outline focus-within:outline-2 focus-within:outline-blue-main-500 overflow-hidden ${props.className}`}>
    {iconLeft && (
    <label htmlFor="email" className="flex items-center pl-2 bg-white">
      <span className="text-gray-500">{iconLeft}</span>
    </label>
    ) }
    <input
      id="email"
      {...props}
      className="px-2 py-2 border-0 focus:outline-none w-full"
    />
    {iconRigth && (
    <label htmlFor="email" className="flex items-center pr-4 bg-white">
      <span className="text-gray-500">{iconRigth}</span>
    </label>
    ) }
  </div>
);

IconInput.propTypes = {
  iconLeft: PropTypes.node,
  iconRigth: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default IconInput;
