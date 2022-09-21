import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => (
  <div className={`w-[calc(100%-30px)] my-0 mx-auto sm:w-[85%] lg:max-w-[1024px] 2xl:mx-w-[1200px] ${className}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};
export default Container;
