import React from 'react';
import PropTypes from 'prop-types';
import useButtonStyle from '../../../hooks/useButtonStyle';

const IconButton = ({
  icon, primary, outline, danger, disabled, uppercase, ...props
}) => {
  const [styles] = useButtonStyle({
    primary, outline, danger, disabled, uppercase,
  });
  return (
    <button {...props} type="button" className={`${styles.main} ${styles.uppercase} px-2.5 py-1 sm:px-3 sm:py-2`}>
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
  icon: PropTypes.node,
};

export default IconButton;
