import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({ onChange, error, ...props }) => (
  <div className="flex">
    <input
      {...props}
      onChange={(e) => onChange(e)}
      className={classNames('border-gray-300 w-full p-2 sm:px-4 leading-none text-sm placeholder:text-sm focus:border-cyan-600 outline-0 my-2', {
        'border-rose-500 focus:border-rose-500': error,
        'border rounded': !props.addon,
        'border rounded-l': props.addon,
      })}
    />
    {props.addon && <span className="text-sm flex items-center px-3 my-2 border-y border-r border-gray-300 bg-gray-100 rounded-r text-gray-500">{props.addon}</span>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  addon: PropTypes.string,
  icon: PropTypes.node,
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Input;
