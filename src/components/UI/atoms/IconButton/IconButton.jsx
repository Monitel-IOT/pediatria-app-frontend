import React from 'react';
import PropTypes from 'prop-types';
import useButtonStyle from '../../../hooks/useButtonStyle';

const IconButton = ({
  icon, primary, outline, danger, disabled, uppercase, ...props
}) => {
  const [styles] = useButtonStyle({
    primary, outline, danger, disabled, uppercase, ...props,
  });
  return (
    <button {...props} type="button" className={`${styles.main} ${styles.uppercase} ${props.className}`}>
      {icon && <span>{icon}</span>}
    </button>
  );
};

IconButton.propTypes = {
  outline: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.string,
};

export default IconButton;
