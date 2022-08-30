import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ children, component, ...props }) => {
  if (component === 'h1') {
    return (
      <h1 className={`text-3xl text-gray-600 font-bold ${props.className}`}>
        {children}
      </h1>
    );
  }
  if (component === 'h2') {
    return (
      <h3 className={`text-2xl font-bold ${props.className}`}>
        {children}
      </h3>
    );
  }
  if (component === 'h3') {
    return (
      <h3 className={`text-xl font-bold ${props.className}`}>
        {children}
      </h3>
    );
  }
  if (component === 'h4') {
    return (
      <h4 className={`text-l font-bold ${props.className}`}>
        {children}
      </h4>
    );
  }
  if (component === 'h5') {
    return (
      <h5 className={`text-sm font-bold ${props.className}`}>
        {children}
      </h5>
    );
  }
  if (component === 'p') {
    return (
      <p className={`${props.className}`}>
        {children}
      </p>
    );
  }
  return (
    <div>{children}</div>
  );
};

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  component: PropTypes.string,
  className: PropTypes.string,
};

export default Typography;
