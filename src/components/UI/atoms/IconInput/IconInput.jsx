import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const IconInput = (props) => (
  <label htmlFor="iconInput">
    <input
      id="iconInput"
      {...props}
      className={classNames('border-gray-300 p-2 sm:px-4 border rounded leading-none text-sm placeholder:text-sm focus:border-cyan-600 outline-0 my-2')}
    />
  </label>
);

IconInput.propTypes = {
  type: PropTypes.string,
  // onChange: PropTypes.func,
  // error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default IconInput;
