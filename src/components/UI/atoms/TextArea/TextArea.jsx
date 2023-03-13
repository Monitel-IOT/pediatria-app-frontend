import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ children, ...props }) => (
  <textarea
    {...props}
    className={`${props.className} mt-2 leading-none outline-0 text-sm text-gray-500 p-2 border border-gray-300 rounded focus:border-cyan-600 w-full`}
  >
    {children}
  </textarea>
);

TextArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

export default TextArea;
