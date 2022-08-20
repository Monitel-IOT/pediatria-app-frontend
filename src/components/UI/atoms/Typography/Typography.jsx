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
  if (component === 'h3') {
    return (
      <h3 className={`text-xl font-bold ${props.className}`}>
        {children}
      </h3>
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
