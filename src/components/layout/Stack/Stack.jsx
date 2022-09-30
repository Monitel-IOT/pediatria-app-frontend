import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ children, horizontal, ...props }) => {
  const styles = (key) => {
    switch (key) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };
  return (
    <div {...props} className={`${styles(horizontal)}`}>{children}</div>
  );
};

Stack.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  horizontal: PropTypes.string,
};

export default Stack;
